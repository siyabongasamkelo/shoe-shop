import styled from "styled-components";
import Header from "../Components/Header";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Bag,
  BarChartLine,
  Chat,
  ChatDots,
  PersonBadge,
  Tag,
} from "react-bootstrap-icons";
import s1 from "../Images/s1.png";
import propic3 from "../Images/propic3.jpg";
import propic5 from "../Images/propic5.jpg";
import CartCard from "../Cart/CartCard";
import { useNavigate } from "react-router-dom";
import Leftdiv from "./Leftdiv";
// import axios from "axios";
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
    .middle-div {
      width: 75%;
      height: 100%;
    }
  }
  @media (max-width: 480px) {
    .main-cover {
      width: 100%;
      .middle-div {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
`;

const Customers = () => {
  const navigation = useNavigate();

  const goTo = (link) => {
    navigation(`/${link}`);
  };

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

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover d-flex flex-column flex-md-row justify-content-around">
              <Leftdiv />

              <div className="middle-div text-white">
                <h6 className="mt-3 ">Customers</h6>
                <Table className="text-white">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Username</th>
                      <th>Gender</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Siyabonga</td>
                      <td>Male</td>
                      <td>
                        <div
                          style={{
                            height: "50px",
                            aspectRatio: "1 / 1",
                            borderRadius: "50%",
                            backgroundImage: `url(${propic3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Siyabonga</td>
                      <td>Male</td>
                      <td>
                        <div
                          style={{
                            height: "50px",
                            aspectRatio: "1 / 1",
                            borderRadius: "50%",
                            backgroundImage: `url(${propic5})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Customers;
