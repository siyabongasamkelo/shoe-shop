import styled from "styled-components";
import Header from "../Components/Header";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmallPieChart from "./SmallPieChart";
import SmallBarGraph from "./SmallBarGraph";
import SmallLineChart from "./SmallLineChart";
import s1 from "../Images/s1.png";
import Form from "react-bootstrap/Form";
import CartCard from "../Cart/CartCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Leftdiv from "./Leftdiv";

export const OneProdStyled = styled.section`
  height: 100vh;
  width: 100vw;
  @media (max-width: 480px) {
    height: auto;
  }
`;

export const OneProdCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  background: linear-gradient(to top, #0a2647, #0a2647);
  @media (max-width: 480px) {
    height: auto;
  }
`;
export const FinalLayer = styled.div`
  width: 90%;
  height: 95%;
  @media (max-width: 480px) {
    height: auto;
  }
`;
export const MainDiv = styled.div`
  height: 90%;
  width: 100%;

  .main-cover {
    height: 100%;
    width: 100%;

    .middle-div {
      width: 40%;
      height: 100%;
      .middle-upper {
        height: 50%;
        width: 100%;
        .upper-upper {
          height: 50%;
          width: 100%;
          .pie-g {
            width: 48%;
            height: 100%;
            border-radius: 10px;
            background-color: #212a3e;
            .pie-text {
              margin-left: 10%;
              margin-top: 5%;
              h5 {
                font-size: 28px;
                color: white;
              }
              p {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
              }
              span {
                font-size: 12px;
              }
            }
            .small-pie {
              width: 100%;
              height: 50%;
            }
            @media (max-width: 480px) {
              width: 100%;
              height: auto;
              /* background-color: red; */
              padding-bottom: 20px;
            }
          }
          .bar-g {
            width: 48%;
            height: 100%;
            background-color: #212a3e;
            border-radius: 10px;
            .pie-text {
              margin-left: 10%;
              margin-top: 5%;
              h5 {
                font-size: 28px;
                color: white;
              }
              p {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
              }
              span {
                font-size: 12px;
              }
            }
            .small-pie {
              width: 100%;
              height: 50%;
              margin-left: 8%;
            }
            @media (max-width: 480px) {
              width: 100%;
              margin-top: 20px;
              padding-bottom: 20px;
            }
          }
        }

        .upper-lower {
          height: 50%;
          width: 100%;
          .range {
            width: 48%;
            height: 98%;
            border-radius: 10px;
            margin-top: 3%;
            .pie-text {
              margin-left: 10%;
              margin-top: 5%;
              h5 {
                font-size: 28px;
                color: white;
              }
              p {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
              }
              span {
                font-size: 12px;
              }
            }
            .small-pie {
              width: 80%;
              height: 50%;
              margin-left: 8%;
            }
            background-color: #212a3e;
            @media (max-width: 480px) {
              width: 100%;
              margin-top: 20px;
              padding-bottom: 15px;
            }
          }
          .new-c {
            width: 48%;
            height: 97%;
            margin-top: 3%;
            border-radius: 10px;
            background-color: #212a3e;
            .pie-text {
              margin-left: 10%;
              margin-top: 5%;
              h5 {
                font-size: 28px;
                color: white;
              }
              p {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
              }
              span {
                font-size: 12px;
              }
            }
            .small-pie {
              width: 80%;
              height: 50%;
              margin-left: 8%;
              p {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
              }
              .pps {
                div {
                  width: 40px;
                  aspect-ratio: 1 / 1;
                  border-radius: 50%;
                  background-color: black;
                  margin-left: 2%;
                }
              }
            }
            @media (max-width: 480px) {
              width: 100%;
              margin-top: 20px;
              padding-bottom: 20px;
            }
          }
        }
      }
      .middle-lower {
        height: 48%;
        width: 100%;
        margin-top: 5%;
        border-radius: 10px;
        background-color: #212a3e;
        .coverr {
          width: 90%;
          height: 90%;
        }
        @media (max-width: 480px) {
        }
      }
      @media (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
        /* padding-bottom: 50px; */
        .middle-upper {
          width: 100%;
        }
      }
    }
    .right-div {
      width: 40%;
      height: 100%;
      .upper-right {
        height: 52%;
        width: 100%;
        border-radius: 10px;
        background-color: #212a3e;
        .pie-text {
          margin-left: 5%;
          padding-top: 3%;
          h5 {
            font-size: 18px;
            color: white;
          }
          h4 {
            color: white;
            font-size: 28px;
          }
          p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.4);
          }
          span {
            font-size: 12px;
          }
        }
        .line-c {
          width: 100%;
          height: 40%;
          /* background-color: red; */
        }
      }
      .lower-right {
        height: 48%;
        width: 100%;
        border-radius: 10px;
        margin-top: 3%;
        background-color: #212a3e;
        .pie-text {
          margin-left: 5%;
          padding-top: 3%;
          h5 {
            font-size: 18px;
            color: white;
          }
          h4 {
            color: white;
            font-size: 28px;
          }
          p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.4);
          }
          span {
            font-size: 12px;
          }
        }
        .line-c {
          width: 100%;
          height: 40%;
          /* background-color: red; */
        }
      }
      @media (max-width: 480px) {
        width: 100%;
        margin-top: 15px;
        padding-bottom: 50px;
        .pie-text {
          /* margin-top: 5px; */
          padding-bottom: 20px;
        }
        .line-c {
          margin-top: 25px;
          padding-bottom: 20px;
        }
      }
    }
  }
`;

const Admin = () => {
  const [senders, setSenders] = useState([]);
  const theStore = useSelector((state) => state?.store?.value?.store[0]);
  let author = theStore?._id;

  const showToastMessage = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/senders/${author}`)
      .then((res) => {
        setSenders(res.data);
      })
      .catch((err) => {
        showToastMessage(err.message);
      });
  }, []);

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover d-flex flex-column flex-md-row justify-content-around">
              <Leftdiv />

              <div className="middle-div">
                <div className="middle-upper">
                  <div className="upper-upper d-flex flex-column flex-md-row justify-content-between">
                    <div className="pie-g">
                      <div className="pie-text">
                        <h5>
                          <span>R</span>69,700
                        </h5>
                        <p>Expected Earnings</p>
                      </div>
                      <div className="small-pie">
                        <SmallPieChart />
                      </div>
                    </div>
                    <div className="bar-g">
                      <div className="pie-text">
                        <h5>
                          <span>R</span>6,700
                        </h5>
                        <p>Average Daily Earnings</p>
                      </div>
                      <div className="small-pie">
                        <SmallBarGraph />
                      </div>
                    </div>
                  </div>
                  <div className="upper-lower d-flex flex-column flex-md-row justify-content-between">
                    <div className="range">
                      <div className="pie-text">
                        <h5>
                          {/* <span>R</span>700 */}
                          700
                        </h5>
                        <p>Orders This Month</p>
                      </div>
                      <div className="small-pie text-white">
                        <br></br>
                        <div className=" d-flex justify-content-between">
                          <Form.Label>800 to goal</Form.Label>
                          <Form.Label>80%</Form.Label>
                        </div>
                        <Form.Range value={80} />
                      </div>
                    </div>
                    <div className="new-c">
                      <div className="pie-text">
                        <h5>
                          {/* <span>R</span>69,700 */}
                          100
                        </h5>
                        <p>New Customers</p>
                      </div>
                      <div className="small-pie">
                        <p>Today's Heroes</p>
                        <div className="pps d-flex">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="middle-lower text-white d-flex justify-content-center align-items-center">
                  <div className="coverr">
                    <div className=" d-flex justify-content-between ">
                      <p>
                        <b>Recent Order</b>
                        <p>1</p>
                      </p>
                    </div>
                    <div className="orders-t">
                      <Table className="text-white">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <CartCard name="Nike" image={s1} />
                            </td>
                            <td>5</td>
                            <td>R6 000</td>
                            <td>R6 000</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <CartCard name="Nike" image={s1} />
                            </td>
                            <td>5</td>
                            <td>R8 666</td>
                            <td>R8 666</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-div">
                <div className="upper-right">
                  <div className="pie-text">
                    <h5>Sales this month</h5>
                    <p>Users for this store</p>
                  </div>
                  <div className="pie-text">
                    <h4>14 000</h4>
                    <p>Users for this store</p>
                  </div>
                  <div className="line-c">
                    <SmallLineChart />
                  </div>
                </div>
                <div className="lower-right">
                  <div className="pie-text">
                    <h5>Sales this month</h5>
                    <p>Users for this store</p>
                  </div>
                  <div className="pie-text">
                    <h4>14 000</h4>
                    <p>Users for this store</p>
                  </div>
                  <div className="line-c">
                    <SmallLineChart />
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

export default Admin;
