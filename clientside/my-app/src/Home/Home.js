import styled from "styled-components";
import Header from "../Components/Header";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../Images/s1.png";
import sh5 from "../Images/sh5.png";
import sh10 from "../Images/sh10.png";
import Button from "react-bootstrap/Button";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const HomeStyled = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const HomeCover = styled.div`
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
  height: 80vh;
  width: 100%;
  .main-cover {
    width: 90%;
    height: 100%;
    .final-cover {
      height: 75%;
      width: 100%;
      .left-div {
        width: 20%;
        height: 100%;
        img {
          height: 90px;
        }
        .round-small {
          height: 3%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: white;
        }
        .line-cover {
          width: 60%;
          height: 50%;
          margin-top: 20px;
          .line-1 {
            width: 50%;
            height: 100%;
          }
          .line-2 {
            height: 100%;
            width: 50%;
            border-left: 1px solid white;
          }
        }
      }
      .middle-div {
        width: 60%;
        .middle-cover {
          height: 120%;
          width: 100%;
          position: relative;

          .carousel {
            height: 60vh;
            width: 100%;
            .carousel-item {
              height: 70vh;
            }
            .carousel-indicators {
              display: none;
            }
          }

          h1 {
            font-size: 300px;
            color: white;
            text-align: center;
          }
          img {
            position: absolute;
            /* height: 100%; */
            height: 700px;
            margin-top: 110px;
            margin-left: 130px;
          }
          .text-name {
            width: 70%;
            margin-left: 15%;
            h2 {
              letter-spacing: 5px;
            }
            .text-1 {
            }
            .text-2 {
              h2 {
                margin-left: 30%;
              }
            }
          }
        }
      }
    }
    .lower-div {
      height: 25%;
      width: 100%;
      .lower-left {
        height: 100%;
        width: 30%;
        h2 {
          letter-spacing: 5px;
        }
      }
      .lower-center {
        height: 100%;
        width: 40%;
        button {
          width: 150px;
          height: 40px;
          background-color: #ff6e31;
          border: none;
          margin-bottom: 5%;
        }
      }
      .lower-right {
        height: 100%;
        width: 30%;
        .icons {
          height: 40px;
          width: 40%;
          border-radius: 30px;
          margin-bottom: 5%;
          transition: 0.5s ease-in-out;
          cursor: pointer;
          svg {
            transform: scale(150%);
            &:hover {
              fill: #ff6e31;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .main-cover {
      .final-cover {
        .middle-div {
          width: 100%;

          .middle-cover {
            width: 100%;
            .carousel {
              width: 100%;

              .carousel-item {
                height: 70vh;
              }
              .carousel-indicators {
                display: none;
              }

              h1 {
                font-size: 80px;
                margin-top: 25%;
              }

              img {
                height: 53%;
                margin-left: 20px;
                margin-top: 200px;
              }
              .text-name {
                margin-top: 35%;
              }
            }
          }
        }
      }
      .lower-div {
        .lower-left {
          width: 100%;
          h2 {
            font-size: 15px;
          }
        }
        .lower-center {
          width: 100%;
        }
        .lower-right {
          width: 100%;
          .icons {
            position: absolute;
            width: 5%;
            height: 20%;
            left: 85%;
            top: 52%;
            svg {
              transform: scale(120%);
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [items, setItems] = useState([]);

  const showToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    showToastMessage("fetching items");
    axios
      .get("http://localhost:3001/get/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        showErrorMessage(err.message);
      });
  }, []);

  console.log(items);
  return (
    <HomeStyled className="d-flex justify-content-center align-items-center">
      <HomeCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <Header />
          <ToastContainer />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover">
              <div className="final-cover d-flex">
                <div className="left-div justify-content-center flex-column align-items-center d-none d-sm-flex d-md-flex d-xl-flex">
                  <img src={sh5} alt="main shoe" />
                  <div className="round-small"></div>
                  <div className="line-cover d-flex ">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                  </div>
                </div>

                <div className="middle-div">
                  <div className="middle-cover">
                    <Carousel>
                      <Carousel.Item>
                        <img src={s1} alt="main shoe" />
                        <h1>NIKE</h1>
                        <div className="text-name text-white">
                          <div className="text-1 d-flex">
                            <div style={{ width: "50%" }}>
                              <h2>Air Max</h2>
                            </div>
                            <div style={{ width: "50%" }}></div>
                          </div>
                          <div className="text-2 d-flex ">
                            <div style={{ width: "50%" }}></div>
                            <div style={{ width: "50%" }}>
                              <h2>Max 720</h2>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div className="left-div justify-content-center flex-column align-items-center d-none d-sm-flex d-md-flex d-xl-flex ">
                  <img src={sh10} alt="main shoe" />
                  <div className="round-small"></div>
                  <div className="line-cover d-flex ">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                  </div>
                </div>
              </div>
              <div className="lower-div d-flex flex-column justify-content-md-between flex-md-row text-white ">
                <div className="lower-left flex-column justify-content-center d-sm-flex d-md-flex d-xl-flex">
                  <h2>Nike</h2>
                  <h2> Air Max 270 Punch</h2>
                  <h2 style={{ color: "#ff6e31" }}>R2 800</h2>
                </div>
                <div className="lower-center d-flex justify-content-center align-items-end ">
                  <Link to="all">
                    <Button className="rounded-pill">See all</Button>
                  </Link>
                </div>
                <div className="lower-right align-items-end justify-content-end  d-sm-flex d-md-flex d-xl-flex">
                  <div className="icons d-flex flex-column flex-md-row justify-content-around align-items-md-center">
                    <Twitter />
                    <Facebook />
                    <Instagram />
                    <Whatsapp />
                  </div>
                </div>
              </div>
            </div>
          </MainDiv>
        </FinalLayer>
      </HomeCover>
    </HomeStyled>
  );
};

export default Home;
