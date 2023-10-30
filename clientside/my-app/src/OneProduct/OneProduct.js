import styled from "styled-components";
import Header from "../Components/Header";
import about1 from "../Images/about1.jpg";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/Cart";
import { ToastContainer, toast } from "react-toastify";
import { getAllReviews } from "../Features/Review";
import { Chat, Person, X } from "react-bootstrap-icons";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
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

const OneProduct = () => {
  const theCart = useSelector((state) => state.cart.value);
  const theUser = useSelector((state) => state?.user?.value?.user[0]);
  const [Propic, setPropic] = useState("");

  // const theReviewForm = useSelector((state) => state?.reviews?.value?.openForm);
  // const theReview = useSelector((state) => state.reviews.value.review);
  const theReview = useSelector((state) => state?.reviews?.value?.review);
  const [openForm, setOpenForm] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [item, setItem] = useState("");
  const [recomm, setRecomm] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getItem = (id) => {
    navigate(`/get/item/${id}`);
  };

  // const getStore = (id) => {
  //   navigate(`/message/${id}`);
  // };

  const getStore = (id) => {
    navigate(`/message/${id}`);
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

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/get/item/${id}`)
      .then((response) => {
        dispatch(getAllReviews(response.data.reviews));
        setItem(response.data.item);
        setRecomm(response.data.recommended.slice(0, 3));
        if (isEmpty(theUser) === true) {
          setPropic(Person);
        } else {
          setPropic(theUser?.image);
        }
        setLoading(false);
      })
      .catch((err) => {
        showErrorMessage(err.message);
      });
  }, [id, dispatch]);

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
                  color="#ff6e31"
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
                  <div className="left-div d-flex flex-column justify-content-around align-items-start ">
                    <div className="profile">
                      {isEmpty(theUser) === true ? (
                        <Person />
                      ) : (
                        <img src={about1} alt="profile pic" />
                      )}
                    </div>
                    <div className="socials">
                      <div className="icons d-flex justify-content-around align-items-center flex-column">
                        <Twitter />
                        <Facebook />
                        <Instagram />
                        <Whatsapp />
                      </div>
                    </div>
                    <div className="share">
                      <h4>
                        <a href={`/message/${item[0]?.store}`}>
                          <Chat
                          // onClick={() => {
                          //   getStore(item[0]?.store);
                          // }}
                          />
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="middle-div">
                    <div className="middle-text text-uppercase">
                      <h1 className=" text-uppercase">{item[0]?.brand}</h1>
                      <h1>{item[0]?.name}</h1>
                    </div>
                    <img src={item[0]?.image} alt="shoe" />
                  </div>
                  <div className="right-div d-md-flex d-none flex-md-column justify-content-md-betwween align-items-md-end flex-lg-column justify-content-lg-betwween align-items-lg-end text-white">
                    <div className="recommended">
                      <div className="imgs">
                        <h6>See Also</h6>
                      </div>
                      {recomm?.map((reco) => {
                        return (
                          <div
                            className="imgs"
                            onClick={() => {
                              getItem(reco._id);
                            }}
                          >
                            <img src={reco?.image} alt="shoes" />
                          </div>
                        );
                      })}
                    </div>
                    <div className="sizes d-flex justify-content-around">
                      <Button>Xs</Button>
                      <Button>S</Button>
                      <Button>M</Button>
                      <Button>L</Button>
                      <Button>Xl</Button>
                    </div>
                  </div>
                </div>
                <div className="lower-div d-flex flex-column flex-md-row justify-content-md-between ">
                  <div className="lower-left  d-flex justify-content-between align-items-center text-white">
                    <p
                      onClick={() => {
                        setOpenReviews(!openReviews);
                      }}
                      className="openR"
                    >
                      REVIEWS
                    </p>
                    <p>DELIVERY & RETURN</p>
                  </div>
                  <div className="lower-right d-flex justify-content-between">
                    <div className="color d-flex justify-content-between align-items-end text-white">
                      <div
                        style={{
                          height: "30px",
                          aspectRatio: "1 / 1",
                          borderRadius: "50%",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <p>COLOR</p>
                    </div>
                    <div className="price d-flex flex-column justify-content-between align-items-end">
                      <h3>R {item[0]?.price}</h3>
                      <Button
                        onClick={() => {
                          let exist = false;
                          for (let i = 0; i < theCart.length; i++) {
                            if (item[0]._id === theCart[i].id) {
                              exist = true;
                            }
                          }
                          if (exist) {
                            showToastMessage("item already in cart");
                          } else {
                            dispatch(
                              addToCart({
                                item: {
                                  id: item[0]._id,
                                  name: item[0].name,
                                  brand: item[0].brand,
                                  image: item[0].image,
                                  price: item[0].price,
                                  store: item[0].store,
                                  quantity: 1,
                                },
                              })
                            );
                            showToastMessage("item added to cart");
                          }
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </div>
                {openReviews ? (
                  <div className="reviews d-flex justify-content-center align-items-center">
                    <div className="reviews-cover">
                      <div className="closing d-flex  justify-content-between">
                        <div>
                          {openForm ? (
                            <ReviewForm
                              formOpener={() => {
                                setOpenForm(!openForm);
                              }}
                              productId={item[0]._id}
                            />
                          ) : (
                            <Button
                              onClick={() => {
                                setOpenForm(!openForm);
                              }}
                            >
                              Write a review
                            </Button>
                          )}
                        </div>
                        <X
                          className="svg"
                          onClick={() => {
                            setOpenReviews(!openReviews);
                          }}
                        />
                      </div>
                      <div className="thereviews">
                        {theReview.map((reviews) => {
                          return (
                            <ReviewCard
                              writerId={reviews.writerId}
                              review={reviews.review}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default OneProduct;
