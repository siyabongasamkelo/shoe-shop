import styled from "styled-components";
import Header from "../Components/Header";
import ItemCompN from "../Components/ItemCompN";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllItems, clearItems } from "../Features/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .text {
  }
  .filter {
    button {
      margin-left: 20px;
      background-color: #e54d48;
      border: none;
    }
  }
  .store {
    height: 85%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Shop = ({ genders, carts, sizes, sorts }) => {
  const sorted = useSelector((state) => state?.item?.value[0]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [gender, setGender] = useState(genders);
  const [cart, setCart] = useState(carts);
  const [size, setSize] = useState(sizes);
  const [sort, setSort] = useState(sorts);

  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  let Url = "";
  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    Url = "http://localhost:3001";
  } else {
    Url = "https://shoe-shop-jbik.onrender.com";
  }
  const BaseUrl = Url;

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${BaseUrl}/get/itemquery`, {
        size,
        gender,
        cart,
        sort,
      })
      .then((res) => {
        dispatch(clearItems());
        dispatch(getAllItems(res.data));
        setLoading(false);
      })
      .catch((err) => {
        showToastMessage(err.message);
        console.log(err);
      });
  }, [sort, cart, size, gender, dispatch, BaseUrl]);

  const getItem = (id) => {
    navigate(`/get/item/${id}`);
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <Header />
          <ToastContainer />
          <MainDiv className=" d-flex flex-column text-white">
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
              <div>
                <div className="text mt-3">
                  <h5>All Items</h5>
                </div>
                <div className="filter mt-3 d-none d-md-block d-lg-block ">
                  <Button
                    onClick={() => {
                      setGender("all");
                      setCart("all");
                      setSize("all");
                      setSort("all");
                    }}
                  >
                    All
                  </Button>
                  <Button>New Arival</Button>
                  <Button>Hot</Button>
                  <Button
                    onClick={() => {
                      setGender("Male");
                    }}
                  >
                    Men
                  </Button>
                  <Button
                    onClick={() => {
                      setGender("Female");
                    }}
                  >
                    Woman
                  </Button>
                  <Button
                    onClick={() => {
                      setCart("Kids");
                    }}
                  >
                    Kids
                  </Button>
                  <Button>Couples</Button>
                </div>
                <div className="store d-flex flex-wrap">
                  {sorted?.map((val) => {
                    return (
                      <ItemCompN
                        image={val.image}
                        name={val.name}
                        price={val.price}
                        color={val.color}
                        brand={val.brand}
                        clicked={() => {
                          getItem(val._id);
                        }}
                        key={val._id}
                        item={{
                          name: val.name,
                          image: val.image,
                          price: val.price,
                          brand: val.brand,
                          color: val.color,
                          id: val._id,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Shop;
