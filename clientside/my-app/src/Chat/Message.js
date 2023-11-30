import styled from "styled-components";
import Header from "../Components/Header";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  Bell,
  Camera,
  EmojiSmile,
  Heart,
  Paperclip,
  Search,
  Send,
} from "react-bootstrap-icons";
import propic5 from "../Images/propic5.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import io from "socket.io-client";
import SendersCard from "../Admin/SendersCard";

// const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://shoe-shop-jbik.onrender.com:3001");

export const OneProdStyled = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const OneProdCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  background: linear-gradient(to top, #0a2647, #0a2647);
`;
export const FinalLayer = styled.div`
  width: 90%;
  height: 95%;
`;
export const MainDiv = styled.div`
  height: 90%;
  width: 100%;

  .main-cover {
    height: 100%;
    width: 100%;
    .left-div {
      width: 15%;
      height: 100%;
      @media (max-width: 480px) {
        height: auto;
        width: 100%;
        margin-top: 10%;
      }
    }
    .middle-div {
      width: 55%;
      height: 100%;
      border-radius: 10px;
      background-color: #212a3e;
      .upper {
        .user {
          margin-left: 20px;
        }
        .icons {
          margin-right: 20px;
          svg {
            transform: scale(130%);
            margin-left: 15px;
          }
        }
      }
      .messages {
        height: 72%;
        width: 100%;
        margin-top: 3%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .sendmessage {
        .type {
          margin-left: 30px;
          input {
            width: 520px;
            height: 60px;
            border-radius: 30px;
            padding-left: 30px;
            border: none;
          }
        }
        .icons {
          margin-right: 30px;
          svg {
            transform: scale(180%);
            margin-left: 30px;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              fill: #ffe77d;
            }
          }
          div {
            height: 60px;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            margin-left: 20px;
            transform: rotate(40deg);
            background-color: #e54d48;
            svg {
              margin: 0;
              margin-left: -5px;
              transform: scale(180%);
            }
          }
        }
        @media (max-width: 480px) {
          width: 100%;
          .type {
            width: 100%;
            margin: 0;
            input {
              width: 105%;
            }
          }
          .icons {
            margin: 0;
          }
        }
      }
      @media (max-width: 480px) {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
  .right-div {
    width: 25%;
    height: 100%;
    border-radius: 10px;
    background-color: #212a3e;
  }
`;

export const Messagebox = styled.div`
  padding: 10px;
  margin-top: 20px;
  .message-cover {
    height: 100%;
    max-width: 35%;
    padding: 10px;
    background-color: #e54d48;
    border-radius: 10px;
    .pic {
      height: 40px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: black;
    }
    .text {
      margin-left: 10px;
    }
  }
`;

const Message = () => {
  const { id } = useParams();
  // const [author, setAuthor] = useState("");
  let author;
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [senders, setSenders] = useState([]);
  const [loading, setLoading] = useState(false);

  const theUser = useSelector((state) => state?.user?.value?.user[0]?._id);
  const theStore = useSelector((state) => state?.store?.value?.store[0]?._id);

  const storeLOgged = useSelector((state) => state?.store?.value?.isLogged);
  const userLOgged = useSelector((state) => state?.user?.value?.isLogged);

  if (storeLOgged === true) {
    author = theStore;
  }
  if (userLOgged === true) {
    author = theUser;
  }

  const showToastMessage = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const sendMessage = () => {
    // setTrigger("just for fun");
    socket.emit("send-message", {
      author: author,
      message: currentMessage,
      receiver: id,
      date: new Date(),
      status: "sent",
    });
    // setMessages((current) => [...current, currentMessage]);
    socket.emit("get-message", author, id);
    socket.emit("get-senders", author);
    setCurrentMessage("");
  };

  useEffect(() => {
    // setLoading(true);
    socket.on("connect", () => {
      showToastMessage(`you connected with id ${socket.id}`);
      socket.emit("show", socket.id, author);
      socket.on("online-users", (onlineUsers) => {});
      socket.emit("get-message", author, id);
      socket.emit("get-senders", author);
      setLoading(false);
    });
  }, [socket, id, author]);

  useEffect(() => {
    socket.on("senders", (senders) => {
      setSenders(senders);
    });
  }, [messageList]);

  useEffect(() => {
    socket.emit("get-message", author, id);
    socket.on("messages", (message) => {
      setMessageList(message);
    });
  }, [socket]);

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className=" d-flex justify-content-center align-items-center"
              >
                <TailSpin
                  height="80"
                  width="80"
                  color="#ff6e31"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="main-cover d-flex flex-column flex-md-row justify-content-around">
                <div className="left-div d-flex flex-sm-column flex-row text-white">
                  <div className=" d-none  d-md-flex align-items-md-center">
                    <div
                      style={{
                        height: "60px",
                        aspectRatio: "1 / 1",
                        borderRadius: "50%",
                        backgroundImage: `url(${propic5})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <p style={{ marginLeft: "20px" }}>Siya Samkelo</p>
                  </div>

                  {senders?.map((sender) => {
                    return <SendersCard userId={sender} />;
                  })}
                </div>

                <div className="middle-div text-white">
                  <div className="upper d-flex justify-content-between align-items-center mt-3">
                    <div className="user d-flex align-items-center">
                      <div
                        style={{
                          height: "40px",
                          aspectRatio: "1 / 1",
                          borderRadius: "50%",
                          backgroundImage: `url(${propic5})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <p style={{ marginLeft: "20px" }}>Siya Samkelo</p>
                    </div>
                    <div className="icons">
                      <Search />
                      <Heart />
                      <Bell />
                    </div>
                  </div>
                  <div className="messages text-white d-flex flex-column">
                    {messageList?.map((message) => {
                      return (
                        <Messagebox
                          style={{
                            display: "flex",
                            justifyContent:
                              author === message.author ? "flex-end" : "start",
                          }}
                        >
                          <div className="message-cover d-flex">
                            <div className="pic"></div>
                            <div className="text">
                              <p>{message.message}</p>
                            </div>
                          </div>
                        </Messagebox>
                      );
                    })}
                  </div>
                  <div className="sendmessage d-flex justify-content-between align-items-center">
                    <div className="type">
                      <input
                        type="text"
                        placeholder="type here..."
                        onChange={(e) => {
                          setCurrentMessage(e.target.value);
                        }}
                        value={currentMessage}
                      />
                    </div>
                    <div className="icons d-flex align-items-center">
                      <Paperclip className=" d-none d-md-block " />
                      <Camera className=" d-none d-md-block " />
                      <EmojiSmile className=" d-none d-md-block " />
                      <div className=" d-flex justify-content-center align-items-center">
                        <Send onClick={sendMessage} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-div d-none d-md-block"></div>
              </div>
            )}
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Message;
