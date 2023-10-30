import styled from "styled-components";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getLoggedUser } from "../Features/Users";
import { getLoggedStore } from "../Features/StoreReducer";
import { useDispatch } from "react-redux";
import {
  Facebook,
  Instagram,
  PersonFill,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
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
    @media (max-width: 480px) {
      display: none;
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
          @media (max-width: 480px) {
            width: 100px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const goToDisplay = (testagain) => {
    navigation("/");
  };

  const succToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //     jwt: localStorage.getItem("token"),
  //   },
  // };

  axios.defaults.withCredentials = true;
  const loginhandle = () => {
    succToastMessage("sending request please wait");
    setLoading(true);
    axios
      .post("http://localhost:3001/login/user", { email, password } /*config*/)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        succToastMessage("you're now logged in");
        if (response.data.auther === "user") {
          dispatch(
            getLoggedUser({
              jwt: response.data.token,
              user: response.data.result,
            })
          );
        }
        if (response.data.auther === "store") {
          dispatch(
            getLoggedStore({
              jwt: response.data.token,
              store: response.data.result,
            })
          );
        }
        setLoading(false);
        goToDisplay();
      })
      .catch((err) => {
        showToastMessage(err.message);
      });
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <Header />
          <ToastContainer />
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
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label>Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <Button onClick={loginhandle}>Login</Button>
                        <label>
                          Don't have an account ?
                          <Link to="/register">register</Link> now
                        </label>
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
            )}
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Login;
