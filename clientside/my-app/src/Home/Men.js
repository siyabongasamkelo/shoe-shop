import { FinalLayer } from "../Home/Home";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";

import n1 from "../Images/n1.jpg";
import n2 from "../Images/n2.jpg";
import n3 from "../Images/n3.jpg";

import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
export const HomeCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  /* background: linear-gradient(to top, #0a2647, #0a2647); */
  background-color: white;
`;

export const ManStyled = styled.div`
  /* height: 100vh; */
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100vw;
`;

export const Men = styled.div`
  height: 85%;
  width: 100%;
  margin-top: 5%;

  .mans {
    height: 100%;
    width: 100%;
    .left-div {
      width: 5%;
      height: 100%;
      .icons {
        width: 60px;
        height: 150px;
        margin-top: -15%;
        background-color: #ffe77d;
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
    .right-div {
      width: 95%;
      height: 100%;
      .pic {
        height: 50%;
        width: 100%;
        .pic-cover {
          height: 100%;
          width: 80%;
          margin-left: 10%;
          img {
            height: 100%;
            width: 32%;
          }
        }
      }
      .text {
        height: 50%;
        width: 100%;
        position: relative;
        .text-cover {
          width: 30%;
          height: 100%;
          /* background-color: red; */
          margin-left: 10%;
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
        .line-div {
          height: 80%;
          width: 100px;
          position: absolute;
          left: 96%;
          top: 20%;
          .circle {
            height: 5%;
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
      }
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    .right-div {
      width: 100%;
      .pic {
        width: 100%;
        .pic-cover {
          width: 100%;
          margin-left: 0;
          img {
            flex-grow: 1;
            margin-left: -6%;
          }
        }
      }
      .text {
        margin-left: -8%;
        flex-grow: 1;
        .text-cover {
          flex-grow: 1;
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

const Mens = () => {
  const navigation = useNavigate();

  const goToDisplay = (testagain) => {
    navigation("/men");
  };
  return (
    <ManStyled className=" d-flex justify-content-center align-items-center">
      <HomeCover className="d-flex align-items-center justify-content-center">
        <FinalLayer>
          <Men>
            <div className="mans d-flex">
              <div className="left-div">
                <div className="icons d-none d-md-flex flex-column justify-content-around align-items-center">
                  <Facebook />
                  <Whatsapp />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
              <div className="right-div">
                <div className="pic">
                  <div className="pic-cover d-flex justify-content-md-around">
                    <img
                      src={n1}
                      alt="fashion pictures"
                      className=" d-none d-md-block"
                    />
                    <img src={n2} alt="fashion pictures" />
                    <img
                      src={n3}
                      alt="fashion pictures"
                      className=" d-none d-md-block"
                    />
                  </div>
                </div>
                <div className="text d-flex">
                  <div className="text-cover">
                    <h3>Kicks For Men</h3>
                    <p>
                      Here at Supa sneakers
                      <span> we take men seriously</span> every year we make
                      sure to create new designs specifically for them we always
                      make sure to get the best designers because we love and
                      appreciate the ladies i mean how can we not after all they
                      pay us so it a win win situation for all
                    </p>
                    <p>
                      If you play sport as a woman we got you, you love fashion
                      we got you here we got everything you will ever need that
                      is why <span>you should trust us</span> im really running
                      oot of things to type here but hey why can i say it has to
                      look cool
                    </p>
                    <Button onClick={goToDisplay}>See all</Button>
                  </div>
                  <div className="line-div d-none d-md-flex  flex-column align-items-center justify-content-between ">
                    <div className="circle"></div>
                    <div className="half-divs d-flex">
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </Men>
        </FinalLayer>
      </HomeCover>
    </ManStyled>
  );
};

export default Mens;
