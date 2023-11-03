const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const cors = require("cors");
const cookiepaser = require("cookie-parser");
const Messages = require("./model/Message");

const registerUser = require("./routes/RegisterUser");
const login = require("./routes/LogIn");

const io = require("socket.io")(3002, {
  cors: {
    // origin: ["http://localhost:3000"],
    // origin: ["*"],
    origin: [`${process.env.SOCKETIOPORT}`],
  },
});

dotenv.config();
const app = express();

app.set("routes", __dirname + "/routes");
app.use("/routes/", express.static(path.join(__dirname, "./routes")));

app.use(express.static("routes"));

//mongoDb connenction
mongoose.set("strictQuery", true);
app.use(express.json());
// app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json({ limit: "50mb" }));
app.use(
  bodyparser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(cookiepaser());
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

app.use(fileupload({ useTempFiles: true }));

const url = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(url);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connection establishing successfully");
});

//socket.io for the chat system

let chats = [];
let includes = false;
let index = 0;

io.on("connection", (socket) => {
  console.log(`user ${socket.id} joined`);

  socket.on("custom-event", (number, string, obj) => {
    console.log(number, string, obj);
  });

  socket.on("get-senders", async (author) => {
    const recievedMessages = await Messages.find({
      receiver: author,
    });

    let senders = [];

    for (let i = 0; i < recievedMessages.length; i++) {
      senders.push(recievedMessages[i].author);
    }

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let testing = removeDuplicates(senders);
    console.log(testing);
    socket.emit("senders", testing);
  });

  socket.on("get-message", async (author, id) => {
    // const myMessages = await Messages.find({
    //   author: author,
    // });
    // const recievedMessages = await Messages.find({
    //   receiver: author,
    // });

    // let theMessages = myMessages.concat(recievedMessages);

    // let senders = [];

    // for (let i = 0; i < recievedMessages.length; i++) {
    //   senders.push(recievedMessages[i].author);
    // }

    // function removeDuplicates(arr) {
    //   return arr.filter((item, index) => arr.indexOf(item) === index);
    // }

    // let testing = removeDuplicates(senders);

    // console.log("getting your messages");
    // socket.emit("senders", testing);
    // socket.emit("messages", theMessages);

    const theMessages = await Messages.where("author")
      .equals(author)
      .where("receiver")
      .equals(id);

    let senders = [];

    for (let i = 0; i < theMessages.length; i++) {
      if (theMessages[i].author !== author) {
        senders.push(theMessages[i].author);
      }
      if (theMessages[i].author === author) {
        senders.push(theMessages[i].receiver);
      }
    }

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let testing = removeDuplicates(senders);

    socket.emit("senders", testing);
    socket.emit("messages", theMessages);
    // console.log(testing);
  });

  socket.on("show", (id, name) => {
    includes = false;
    index = 0;
    for (let i = 0; i < chats.length; i++) {
      if (chats[i].name === name) {
        index = i;
        includes = true;
      }
    }

    if (chats.length <= 0) {
      chats.push({ id, name });
    }

    if (includes === true) {
      chats[index].id = id;
    }

    if (chats[index].name !== name) {
      chats.push({ id, name });
    }

    console.log(chats);

    // sending online users to the clients
    socket.emit("online-users", chats);
    console.log("emiting online users");
  });

  socket.on("send-message", (message) => {
    let receiver;

    if (chats.length !== 0) {
      for (let i = 0; i < chats.length; i++) {
        if (chats[i].name === message.receiver) {
          receiver = chats[i].id;
        }
      }
    }

    const newMessage = new Messages({
      author: message.author,
      receiver: message.receiver,
      message: message.message,
      date: message.date,
      status: message.status,
    });

    if (message.receiver === "") {
      socket.broadcast.emit("receive-message", message);
      Messages.create(newMessage)
        .then(() => {
          console.log("your message was sent");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      socket.to(receiver).emit("receive-message", message, receiver);
      Messages.create(newMessage)
        .then(() => {
          console.log("your message was sent");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnencted: ${socket.id}`);
  });
});

//routes
//product routes
app.use("/add", require("./routes/addItems.js"));
app.use("/get", require("./routes/getAllItems.js"));
app.use("/get", require("./routes/getItem.js"));
app.use("/get", require("./routes/getItemQuery.js"));
app.use("/delete", require("./routes/deleteItem.js"));

//get senders
app.use("/get", require("./routes/getSenders.js"));

// app.use("/delete", require("./routes/deleteProduct"));

//user auth routes
app.use("/register", registerUser);
app.use("/login", login);
app.use("/get", require("./routes/getUser.js"));
app.use("/forgot", require("./routes/sendMail.js"));
app.use("/reset", require("./routes/ResetPassword.js"));

//store routs
app.use("/register", require("./routes/registerStore.js"));
// app.use("/login", require("./routes/StoreLogin.js"));

//bought items routs
app.use("/add", require("./routes/addOdder.js"));
app.use("/get", require("./routes/getAllOrders.js"));

//add review
app.use("/add", require("./routes/addReview.js"));
app.use("/get", require("./routes/getReviews.js"));

//404 not found
app.all("*", (req, res) => {
  res.json("404 Page not found");
});

app.listen(process.env.Port, () => {
  console.log(`running on port ${process.env.Port}`);
});
