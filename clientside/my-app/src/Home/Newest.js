// import { HomeCover } from "./Home";
import { FinalLayer } from "./Home";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import s1 from "../Images/s1.png";
import sh4 from "../Images/sh4.png";
import sh5 from "../Images/sh5.png";
import sh10 from "../Images/sh10.png";
import styled from "styled-components";
import ItemComp from "../Components/ItemComp";

export const NewestStyled = styled.div`
  /* height: 100vh; */
  width: 100vw;
`;

export const HomeCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  /* background: linear-gradient(to top, #0a2647, #0a2647); */
  background-color: white;
  margin-bottom: 150px;
`;

export const Newest = styled.div`
  height: 85%;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  .upper {
    height: 15%;
    margin-bottom: 100px;
    margin-top: 100px;
    /* background-color: red; */
    h3 {
      letter-spacing: 3px;
    }
  }
  .mens {
    height: 75%;
    width: 100%;
  }
  .mens-cover {
    height: 100%;
    width: 90%;
    margin-left: 5%;
  }
  .icons {
    width: 140px;
    height: 40px;
    margin-left: 5%;
    svg {
      fill: white;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      &:hover {
        fill: #f29200;
      }
    }
  }

  @media (max-width: 480px) {
    .upper {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .mens-cover {
      margin-left: -2%;
    }
  }
`;

const Men = () => {
  return (
    <NewestStyled className=" d-flex justify-content-center align-items-center">
      <HomeCover className="d-flex align-items-center justify-content-center">
        <FinalLayer>
          <Newest>
            <div className="upper text-center">
              <h1>Newest Sneakers</h1>
              <p>We got all the best kicks for man get ready to up your game</p>
            </div>
            <div className="mens">
              <div className="mens-cover d-sm-flex justify-content-between align-items-center flex-column flex-md-row">
                <ItemComp pic={s1} color="#f29200" />
                <ItemComp pic={sh4} color="#FFE77D" />
                <ItemComp pic={sh5} color="#E54D48" />
                <ItemComp pic={sh10} color="#FFBEC2" />
              </div>
              <div className="icons d-none d-sm-flex justify-content-around align-items-center ">
                <Twitter />
                <Facebook />
                <Instagram />
                <Whatsapp />
              </div>
            </div>
          </Newest>
        </FinalLayer>
      </HomeCover>
    </NewestStyled>
  );
};

export default Men;
