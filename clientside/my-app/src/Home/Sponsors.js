import styled from "styled-components";
import sp1 from "../Images/sp1.png";
import sp2 from "../Images/sp2.png";
import sp3 from "../Images/sp3.png";
import sp4 from "../Images/sp4.png";
import sp5 from "../Images/sp5.png";
export const SponsorStyled = styled.div`
  /* height: 40vh; */
  width: 100vw;
`;
export const Main = styled.div`
  width: 60%;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  img {
    height: 30%;
    width: 10%;
  }
  @media (max-width: 480px) {
    img {
      width: 30%;
      height: 20%;
      margin-left: 35%;
    }
  }
`;

const Sponsors = () => {
  return (
    <SponsorStyled className=" d-flex justify-content-center align-items-center">
      <Main className=" d-flex flex-column flex-md-row justify-content-md-around align-items-md-center justify-content-sm-center align-items-sm-center">
        <img src={sp1} alt="sponsors" />
        <img src={sp2} alt="sponsors" />
        <img src={sp3} alt="sponsors" />
        <img src={sp4} alt="sponsors" />
        <img src={sp5} alt="sponsors" />
      </Main>
    </SponsorStyled>
  );
};

export default Sponsors;
