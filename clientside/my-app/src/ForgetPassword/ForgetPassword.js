import styled from "styled-components";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  PersonFill,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
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
    }
    .login-form {
      width: 350px;
      position: absolute;
      background-color: #212a3e;
      border-radius: 10px;
      padding-top: 30px;
      padding-bottom: 30px;
      margin-top: 150px;

      label {
        font-size: 12px;
        margin-top: 30px;
      }
      .user {
        width: 35%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: #212a3e;
        top: -15%;
        position: absolute;
        border: 5px solid #212a3e;
        svg {
          height: 70%;
          width: 70%;
          fill: white;
        }
      }
      .form {
        width: 80%;
        margin-top: 10%;
        button {
          margin-top: 10%;
          width: 100%;
        }
      }
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

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  let isValid = true;

  const navigate = useNavigate();
  const goTo = (address) => {
    navigate(`/${address}`);
  };

  //state for determining if it's a user or a seller

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

    if (valName === "email") {
      if (val.match(mailformat)) {
        succToastMessage("Valid email address!");
      } else {
        showToastMessage("You have entered an invalid email address!");
        isValid = false;
      }
    }
  };

  const regUserHandler = () => {
    emptyCheck(email, "email");

    //appending data to a form data
    let formData = new FormData();
    formData.append("email", email);

    //making sure that everything is valid before making the request
    if (isValid === true) {
      axios
        .post("http://localhost:3001/forgot/password", formData)
        .then((res) => {
          succToastMessage(res.data);
          //   goTo("/login");
        });
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
            <div className="main-cover">
              <div className="upper-div d-flex flex-column flex-sm-row">
                <div className="left-div d-flex flex-column justify-content-around align-items-start">
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
                    <h4>Login</h4>
                  </div>
                </div>

                <div className="middle-div d-flex justify-content-center">
                  <div className="middle-text">
                    <h1>LOGIN</h1>
                    <h1>REGISTER</h1>
                  </div>
                  <div className="login-form d-flex justify-content-center flex-column align-items-center">
                    <div className="user d-flex justify-content-center align-items-center">
                      <PersonFill />
                    </div>
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

                      <Button onClick={regUserHandler}>Reset Password</Button>
                    </div>
                    <div></div>
                  </div>
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
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default ForgetPassword;
