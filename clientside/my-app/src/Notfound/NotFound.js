import styled from "styled-components";
import Header from "../Components/Header";
import about1 from "../Images/about1.jpg";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { getAllReviews } from "../Features/Review";
import { Chat, Person, X } from "react-bootstrap-icons";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    position: relative;
  }
  .upper-div {
    height: 80%;
    width: 100%;
  }
  .left-div {
    width: 15%;
    .profile {
      height: 80px;
      width: 80px;
      cursor: pointer;
      /* background-image: url(${about1}); */
      background-size: cover;
      background-position: center;
      svg {
        height: 100%;
        width: 100%;
        fill: white;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
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
    svg {
      cursor: pointer;
      transition: 0.5s ease-in-out;
      transform: scale(140%);
      fill: white;
      &:hover {
        fill: #ff6e31;
      }
    }
    @media (max-width: 480px) {
      position: absolute;
      /* background-color: red; */
      left: 90%;
      top: 40%;
      .profile {
        display: none;
      }
      .share {
        width: 100%;
        /* background-color: red; */
        text-align: center;
        svg {
          transform: scale(110%);
          margin-right: 20%;
        }
      }
    }
  }
  .middle-div {
    width: 70%;
    position: relative;
    img {
      height: 700px;
      margin-left: 15%;
      position: absolute;
      top: 10%;
      @media (max-width: 480px) {
        margin-left: 18%;
        height: 250px;
        margin-top: 35%;
      }
    }
    .middle-text {
      height: 100%;
      width: 100%;
      text-align: center;
      h1 {
        font-size: 180px;
        font-weight: 800;
        line-height: 150px;
        margin-top: 2%;
        color: rgba(255, 255, 255, 0.3);
        @media (max-width: 480px) {
          font-size: 60px;
          line-height: 60px;
        }
      }
      @media (max-width: 480px) {
        margin-top: 30%;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 60%;
      margin-top: 40px;
      /* background-color: red; */
      .middle-div {
      }
    }
  }

  .right-div {
    width: 15%;
    .recommended {
      .imgs {
        margin-top: 20px;
        cursor: pointer;
        h6 {
          margin-top: 60px;
        }
        img {
          height: 80px;
          width: 80px;
        }
      }
    }
    .sizes {
      width: 300px;
      height: 50px;
      margin-top: 80%;
      border-radius: 30px;
      background-color: red;
      background-color: #ff6e31;
      button {
        width: 40px;
        background-color: transparent;
        border: none;
      }
    }
  }

  .lower-div {
    height: 20%;
    .lower-left {
      width: 15%;
      height: 100%;
      p {
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          color: #ff6e31;
        }
      }
      @media (max-width: 480px) {
        width: 100%;
        p {
          font-size: 13px;
        }
      }
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
      @media (max-width: 480px) {
        width: 100%;
        .price {
          h3 {
            font-size: 20px;
          }
          button {
            width: 160px;
            height: 40px;
            font-size: 12px;
          }
        }
      }
    }
    @media (max-width: 480px) {
      /* margin-top: -20%; */
    }
  }

  .reviews {
    height: 100%;
    width: 65%;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 0;
    margin-left: 17.5%;
    z-index: 2;
    transition: opacity 0.25s ease-in-out;
    overflow-y: hidden;
    .reviews-cover {
      height: 90%;
      width: 90%;
      .closing {
        .svg {
          transform: scale(250%);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            fill: #ff6e31;
          }
        }
      }
      .thereviews {
        height: 92%;
        width: 100%;
        margin-top: 3%;
      }
    }
  }

  @media (max-width: 480px) {
    /* background-color: red; */
  }
`;

const NotFound = () => {
  const [loading, setLoading] = useState("");

  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  }

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
          <Header />
          <ToastContainer />
          <MainDiv className=" d-flex justify-content-center">
            <h1 className=" text-white mt-5 ">Page not Found...</h1>
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default NotFound;
