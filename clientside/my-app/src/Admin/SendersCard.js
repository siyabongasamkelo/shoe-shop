import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SendersCardStyled = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #212a3e;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #ffe77d;
    color: black;
  }
  svg {
    transform: scale(150%);
    margin-left: 20px;
  }
  label {
    margin-left: 20px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    width: 60px;
    background-color: transparent;
    label {
      display: none;
    }
    div {
      div {
        border: 2px solid white;
      }
    }
  }
`;

const SendersCard = ({ userId, clicked }) => {
  const navigate = useNavigate();

  const getStore = (id) => {
    navigate(`/message/${id}`);
  };

  const [senders, setSenders] = useState("");

  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    axios
      .get(`https://shoe-shop-jbik.onrender.com/get/user/${userId}`)
      .then((res) => {
        setSenders(res.data);
      })
      .catch((err) => {
        showErrorMessage(err.message);
      });
  }, []);

  return (
    <SendersCardStyled
      onClick={() => {
        clicked();
        getStore(userId);
      }}
    >
      <ToastContainer />
      <div className="manageItem d-flex align-items-center">
        <div
          style={{
            height: "40px",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            backgroundImage: `url(${senders[0]?.image})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
            marginLeft: "20px",
          }}
        ></div>
        <label>{senders[0]?.username || senders[0]?.storename}</label>
      </div>
    </SendersCardStyled>
  );
};

export default SendersCard;
