import styled from "styled-components";
import Header from "../Components/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { TailSpin } from "react-loader-spinner";

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
  }
  .upper-div {
    height: 80%;
    width: 100%;
  }
  .left-div {
    width: 15%;
    .socials {
      .icons {
        height: 180px;
        width: 40px;
        border-radius: 30px;
        margin-bottom: 5%;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        svg {
          transform: scale(140%);
          fill: white;
          &:hover {
            fill: #ff6e31;
          }
        }
      }
    }
    .share {
      color: white;
      h4 {
        letter-spacing: 4px;
      }
    }
  }
  .middle-div {
    width: 70%;
    position: relative;

    .tabs {
      width: 350px;
      position: absolute;
      background-color: #212a3e;
      border-radius: 10px;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .middle-text {
      height: 100%;
      width: 100%;
      text-align: center;
      h1 {
        font-size: 180px;
        font-weight: 800;
        line-height: 150px;
        color: rgba(255, 255, 255, 0.3);
      }
      @media (max-width: 480px) {
        width: 100%;
        h1 {
          font-size: 60px;
        }
      }
    }
    .login-form {
      width: 350px;
      position: absolute;
      background-color: #212a3e;
      border-radius: 10px;
      padding-bottom: 30px;
      margin-top: 85px;
      left: 34.7%;
      label {
        font-size: 12px;
        margin-top: 30px;
      }
      .form {
        width: 80%;
        button {
          margin-top: 10%;
          width: 100%;
        }
      }
      @media (max-width: 480px) {
        left: 0;
      }
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .right-div {
    width: 15%;
    .recommended {
      .imgs {
        margin-top: 20px;
        h6 {
          margin-top: 60px;
        }
        img {
          height: 80px;
          width: 80px;
        }
      }
    }
  }

  .lower-div {
    height: 20%;
    .lower-left {
      width: 15%;
      height: 100%;
    }
    .lower-right {
      width: 20%;
      height: 100%;
      .color {
        width: 30%;
      }
      .price {
        h3 {
          font-size: 50px;
          font-weight: 700;
          color: #ff6e31;
        }
        button {
          width: 200px;
          height: 50px;
          border-radius: 30px;
          background-color: #ff6e31;
          border: none;
        }
      }
    }
  }
`;

const Register = () => {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let isValid = true;

  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const succToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  //fuction for validating the fields
  let emptyCheck = (val, valName) => {
    if (val.length === 0) {
      showToastMessage(`${valName} cannot be empty`);
      isValid = false;
    }

    if (val.length <= 3) {
      showToastMessage(`${valName} must be at least 4 characters`);
      isValid = false;
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordFormat = /^[A-Za-z]\w{7,14}$/;

    if (valName === "email") {
      if (val.match(mailformat)) {
        succToastMessage("Valid email address!");
      } else {
        showToastMessage("You have entered an invalid email address!");
        isValid = false;
      }
    }
    if (valName === "password") {
      if (val.match(passwordFormat)) {
        succToastMessage("Valid password!");
      } else {
        showToastMessage(
          "password must be between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter."
        );
        isValid = false;
      }
    }
  };

  const regUserHandler = (regAs) => {
    emptyCheck(email, "email");
    emptyCheck(password, "password");
    emptyCheck(conPassword, "confirm password");
    emptyCheck(username, "username");
    emptyCheck(image, "image");

    //this field must be validated only when registering as a seller
    if (regAs === "seller") {
      emptyCheck(description, "description");
    }

    //checking if confirm password & password are the same
    if (password !== conPassword) {
      showToastMessage("both passwords must be the same");
    }

    //appending data to a form data
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    if (regAs === "seller") {
      formData.append("description", description);
    }

    //making sure that everything is valid before making the request
    if (isValid === true) {
      if (regAs === "user") {
        setLoading(true);
        axios
          .post("http://localhost:3001/register/user", formData)
          .then((res) => {
            succToastMessage(res.data);
            setLoading(false);
            // goTo("/login");
          });
      } else {
        setLoading(true);
        axios
          .post("http://localhost:3001/register/store", formData)
          .then((res) => {
            succToastMessage(res.data);
            setLoading(false);
            // goTo("/login");
          });
      }
    } else {
      showToastMessage("please ensure that no field is empty");
    }
  };

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
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="main-cover">
                <div className="upper-div d-flex flex-column flex-sm-row">
                  <div className="left-div d-none d-md-flex flex-md-column justify-content-md-around align-items-md-start">
                    <div className="profile"></div>
                    <div className="socials">
                      <div className="icons d-flex justify-content-around align-items-center flex-column">
                        <Twitter />
                        <Facebook />
                        <Instagram />
                        <Whatsapp />
                      </div>
                    </div>
                    <div className="share">
                      <h4>REGISTER</h4>
                    </div>
                  </div>

                  <div className="middle-div d-flex justify-content-center">
                    <div className="middle-text">
                      <h1>LOGIN</h1>
                      <h1>REGISTER</h1>
                    </div>

                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="tabs mb-3"
                    >
                      <Tab eventKey="home" title="User">
                        <div className="login-form d-flex justify-content-center flex-column align-items-center">
                          <div className="form text-white">
                            <label>Email</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <label>Username</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                            />
                            <label>Password</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Passord"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            <label>Confirm password</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Confirm password"
                              onChange={(e) => {
                                setConPassword(e.target.value);
                              }}
                            />
                            <label>Image</label>
                            <input
                              type="file"
                              class="form-control"
                              placeholder="Username"
                              onChange={(e) => {
                                setImage(e.target.files[0]);
                              }}
                            />
                            <Button
                              onClick={() => {
                                regUserHandler("user");
                              }}
                            >
                              Register User
                            </Button>
                            <label>
                              Already have an account ? <Link>login</Link> now
                            </label>
                          </div>
                          <div></div>
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Seller">
                        <div className="login-form d-flex justify-content-center flex-column align-items-center">
                          <div className="form text-white">
                            <label>Email</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <label>Storename</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                            />
                            <label>description</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            />
                            <label>Password</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Passord"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            <label>Confirm password</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Confirm password"
                              onChange={(e) => {
                                setConPassword(e.target.value);
                              }}
                            />
                            <label>Image</label>
                            <input
                              type="file"
                              class="form-control"
                              placeholder="Username"
                              onChange={(e) => {
                                setImage(e.target.files[0]);
                              }}
                            />
                            <Button
                              onClick={() => {
                                regUserHandler("seller");
                              }}
                            >
                              Register Store
                            </Button>
                            <label>
                              Already have an account ? <Link>login</Link> now
                            </label>
                          </div>
                          <div></div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>

                  <div className="right-div d-flex flex-column justify-content-betwween align-items-end text-white">
                    <div className="recommended"></div>
                    <div className="sizes d-flex justify-content-around"></div>
                  </div>
                </div>
                <div className="lower-div d-flex flex-column flex-md-row justify-content-md-between ">
                  <div className="lower-left  d-flex justify-content-between align-items-center text-white"></div>
                  <div className="lower-right d-flex justify-content-between">
                    <div className="color d-flex justify-content-between align-items-end text-white"></div>
                    <div className="price d-flex flex-column justify-content-end  align-items-end">
                      <Button>Go Back</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Register;
