import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ReviewCardStyled = styled.div`
  width: 350px;
  margin-top: 2%;
  .reviews-card {
    width: 90%;
    .pic {
      width: 15%;
      img {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }
    }
    .review-text {
      width: 80%;
      .name {
        margin-top: 5%;
      }
      div {
        padding: 5%;
        background-color: #ffe77d;
        border-radius: 10px;
      }
    }
  }
`;

const ReviewCard = ({ writerId, review }) => {
  const [user, setuser] = useState("");

  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    axios
      .get(`https://shoe-shop-jbik.onrender.com/get/user/${writerId}`)
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        showErrorMessage(err.message);
      });
  }, []);

  return (
    <ReviewCardStyled className=" d-flex justify-content-center align-items-center">
      <div className="reviews-card d-flex justify-content-between">
        <ToastContainer />
        <div className="pic">
          <img src={user[0]?.image} alt="profile pic" />
        </div>
        <div className="review-text">
          <p className="name">{user[0]?.username}</p>
          <div>
            <p>{review}</p>
          </div>
        </div>
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewCard;
