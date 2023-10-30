import { FinalLayer } from "../Home/Home";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import about1 from "../Images/about1.jpg";

import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
export const HomeCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  /* background: linear-gradient(to top, #0a2647, #0a2647); */
  background-color: white;
`;

export const WomanStyled = styled.div`
  /* height: 100vh; */
  width: 100vw;
`;

export const Woman = styled.div`
  height: 85%;
  width: 100%;
  /* margin-left: 5%; */
  margin-top: 5%;

  .womens {
    height: 100%;
    width: 100%;
    .pic {
      height: 100%;
      width: 50%;
      .line-div {
        height: 100%;
        width: 100px;
        .circle {
          height: 4%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          /* background-color: #343a40; */
          background-color: #ff6e31;
        }
        .half-divs {
          height: 85%;
          width: 100%;
          .div1 {
            height: 100%;
            width: 50%;
          }
          .div2 {
            height: 100%;
            width: 50%;
            /* border-left: 5px solid #343a40; */
            border-left: 5px solid #e54d48;
          }
        }
      }
      .pic-div {
        width: 80%;
        height: 85%;
        img {
          height: 100%;
          width: 80%;
          margin-top: 7.5%;
        }
      }
    }
    .text {
      height: 100%;
      width: 50%;
      .text-cover {
        width: 55%;
        height: 100%;
        text-align: justify;
        h3 {
          margin: 10% 0 30px 0;
          color: #e54d48;
        }
        span {
          background-color: #ffe77d;
        }
        button {
          width: 140px;
          height: 40px;
          border-radius: 30px;
          margin-top: 10px;
          background-color: #ff6e31;
          border: none;
        }
      }
      .icons {
        width: 150px;
        height: 60px;
        /* margin-top: -15%; */
        margin-top: 34%;
        svg {
          transform: scale(150%);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            fill: #ff6e31;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    .womens {
      .pic {
        width: 100%;
        img {
          height: 100%;
          margin-left: 25%;
        }
      }
      .text {
        width: 100%;
        .text-cover {
          width: 100%;
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
          button {
            width: 100%;
          }
        }
        .icons {
          transform: scale(80%);
          margin-top: 10%;
        }
      }
    }
  }
`;

const Womans = () => {
  const navigation = useNavigate();

  const goToDisplay = (testagain) => {
    navigation("/kids");
  };

  return (
    <WomanStyled className=" d-flex justify-content-center align-items-center">
      <HomeCover className="d-flex align-items-center justify-content-center">
        <FinalLayer>
          <Woman>
            <div className="womens  d-md-flex ">
              <div className="pic d-flex">
                <div className="line-div d-none d-md-flex flex-column align-items-center justify-content-between ">
                  <div className="circle"></div>
                  <div className="half-divs d-flex">
                    <div className="div1"></div>
                    <div className="div2"></div>
                  </div>
                  <div className="circle"></div>
                </div>

                <div className="pic-div">
                  <img src={about1} alt="women in sneaker" />
                </div>
              </div>
              <div className="text">
                <div className="text-cover">
                  <h3>Kicks For Kids</h3>
                  <p>
                    Here at Supa sneakers <span>we take kids seriously</span>{" "}
                    every year we make sure to create new designs specifically
                    for them we always make sure to get the best designers
                    because we love and appreciate the ladies i mean how can we
                    not after all they pay us so it a win win situation for all
                  </p>
                  <p>
                    If you play sport as a woman we got you, you love fashion we
                    got you here we got everything you will ever need that is
                    why <span>you should trust us</span> im really running oot
                    of things to type here but hey why can i say it has to look
                    cool
                  </p>
                  <Button onClick={goToDisplay}>See all</Button>
                </div>
                <div className="icons d-flex justify-content-around">
                  <Facebook />
                  <Whatsapp />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
            </div>
          </Woman>
        </FinalLayer>
      </HomeCover>
    </WomanStyled>
  );
};

export default Womans;
