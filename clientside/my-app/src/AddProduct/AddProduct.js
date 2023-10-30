import styled from "styled-components";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
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
      width: 700px;
      position: absolute;
      background-color: #212a3e;
      border-radius: 10px;
      padding-bottom: 30px;
      margin-top: 40px;

      button {
        width: 80%;
        margin-top: 5%;
      }
      textarea {
        width: 100%;
        height: 60px;
      }

      label {
        font-size: 12px;
        margin-top: 30px;
      }
      .form {
        width: 80%;
        margin-top: 5%;
        button {
          margin-top: 10%;
          width: 100%;
        }
        .form-cover {
          width: 100%;
          height: 100%;
          .forms {
            width: 45%;
            height: 100%;
          }
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

const AddProdct = () => {
  const theStore = useSelector((state) => state?.store?.value?.store[0]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [info, setInfo] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [cart, setCart] = useState("");
  const [image, setImage] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const showToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  }

  const validCheck = () => {
    const theArray = [
      name,
      description,
      price,
      quantity,
      info,
      brand,
      gender,
      color,
      image,
    ];

    for (let i = 0; i < theArray.length; i++) {
      if (isEmpty(theArray[i]) === true) {
        setIsValid(false);
      }
    }
  };

  const addItem = () => {
    validCheck();
    let formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("info", info);
    formData.append("brand", brand);
    formData.append("cartegory", cart);
    formData.append("gender", gender);
    formData.append("date", new Date());
    formData.append("ratings", 0);
    formData.append("color", color);
    formData.append("image", image);
    formData.append("store", theStore?._id);
    // formData.append("store", "h1f3gf2g3f2t32");

    console.log(isValid);

    if (isValid === true) {
      setLoading(true);
      axios
        .post("http://localhost:3001/add/item", formData)
        .then((res) => {
          showToastMessage(res.data);
          setLoading(false);
        })
        .catch((err) => {
          showErrorMessage(err.message);
          setLoading(false);
        });
    } else {
      showToastMessage("please make sure not field is empty");
    }
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
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
                      <h4>Add Item</h4>
                    </div>
                  </div>

                  <div className="middle-div d-flex justify-content-center">
                    <div className="middle-text">
                      <h1>LOGIN</h1>
                      <h1>REGISTER</h1>
                    </div>

                    <div className="login-form d-flex justify-content-center flex-column align-items-center">
                      <div className="form text-white">
                        <div className="form-cover d-flex justify-content-between">
                          <div className="forms">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                            <label>Description</label>
                            <br></br>
                            <textarea
                              className="form-control"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            ></textarea>
                            <br></br>
                            <label>Price</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Price"
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            />
                            <label>Quantity</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Quantity"
                              onChange={(e) => {
                                setQuantity(e.target.value);
                              }}
                            />
                            <label>Info</label>
                            <textarea
                              className="form-control"
                              onChange={(e) => {
                                setInfo(e.target.value);
                              }}
                            ></textarea>
                          </div>
                          <div className="forms">
                            <label>Brand</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Brand"
                              onChange={(e) => {
                                setBrand(e.target.value);
                              }}
                            />
                            <label>Gender</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            >
                              <option selected>Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Unisex">Unisex</option>
                            </select>

                            <label>Cartegory</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => {
                                setCart(e.target.value);
                              }}
                            >
                              <option selected>Cartegory</option>
                              <option value="Kids">Kids</option>
                              <option value="Adults">Adults</option>
                              <option value="Hot">Hot</option>
                              <option value="Couples">Couples</option>
                            </select>

                            <label>Color</label>
                            <input
                              type="color"
                              className="form-control"
                              placeholder="Color"
                              onChange={(e) => {
                                setColor(e.target.value);
                              }}
                            />
                            <label>Image</label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="Image"
                              onChange={(e) => {
                                setImage(e.target.files[0]);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <Button onClick={addItem}>Add item</Button>
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

export default AddProdct;
