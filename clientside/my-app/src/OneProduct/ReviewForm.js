import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const ReviewStyled = styled.div`
  width: 300px;
  margin-top: 20px;
  p {
    font-size: 13px;
  }

  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 80px;
    margin-top: 5%;
  }
  label {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ReviewForm = ({ productId, formOpener, storeId }) => {
  const theUser = useSelector((state) => state?.user?.value?.user[0]?._id);

  const [review, setReview] = useState();
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

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

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const sendReview = () => {
    if (isEmpty(review)) {
      showErrorMessage("review fieild cannnot be empty");
    } else {
      axios
        .post("https://shoe-shop-jbik.onrender.com/add/review", {
          review,
          rating,
          productId,
          storeId: storeId,
          writerId: theUser,
        })
        .then(() => {
          showToastMessage("review added successfully");
          formOpener();
        })
        .catch((err) => {
          showErrorMessage(err.message);
        });
    }
  };

  return (
    <ReviewStyled>
      <div className="reviewform">
        <div className="formcover">
          <ToastContainer />
          <div className="form">
            <p>Please Leave your review here</p>

            <label>review</label>
            <textarea
              onChange={(e) => {
                setReview(e.target.value);
              }}
              className="form-control"
            ></textarea>
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              /* Available Props */
            />
            <br></br>
            <br></br>
            <Button onClick={sendReview}>Submit</Button>
            <Button
              onClick={() => {
                formOpener();
              }}
              style={{ marginLeft: "20px" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ReviewStyled>
  );
};

export default ReviewForm;
