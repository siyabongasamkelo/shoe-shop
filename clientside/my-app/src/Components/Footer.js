import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterStyled = styled.div`
  /* height: 40vh; */
  width: 100vw;
`;
export const Main = styled.div`
  height: 90%;
  width: 80%;
  margin-bottom: 80px;
  border-top: 1px solid #6c757d;
  .links {
    width: 12%;
    height: 80%;
    margin-top: 4%;
    a {
      text-decoration: none;
      color: #343a40;
      margin-top: 2%;
    }
  }
  @media (max-width: 480px) {
    .links {
      width: 50%;
      margin-top: 25px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled className=" d-flex justify-content-center align-items-center">
      <Main className=" d-flex flex-column flex-md-row">
        <div className="links d-flex flex-column justify-content-start align-items-start">
          <p>
            <b>Products</b>
          </p>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Cart</Link>
          <Link>Kids</Link>
        </div>
        <div className="links d-flex flex-column justify-content-start align-items-start">
          <p>
            <b>Socials</b>
          </p>
          <Link>Facebook</Link>
          <Link>Twitter</Link>
          <Link>Instagram</Link>
          <Link>Whatsapp</Link>
        </div>
        <div className="links d-flex flex-column justify-content-start align-items-start">
          <p>
            <b>Legal</b>
          </p>
          <Link>Terms</Link>
          <Link>Privacy</Link>
          <Link>Cookies</Link>
          <Link>Contact</Link>
        </div>
      </Main>
    </FooterStyled>
  );
};

export default Footer;
