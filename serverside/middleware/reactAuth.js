const jwt = require("jsonwebtoken");

const reactAuth = (req, res, next) => {
  const token = req.headers["jwt"];
  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodedToken) => {
      if (err) {
        console.log(err);
        console.log("you're not logged in");
        res.redirect("/");
      } else {
        req.user = decodedToken;
        console.log("you're logged in");
        next();
      }
    });
  } else {
    console.log("you're not logged in");
    res.redirect("/");
  }
};

module.exports = { reactAuth };
