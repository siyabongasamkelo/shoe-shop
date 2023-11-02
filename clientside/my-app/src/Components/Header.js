import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Bag,
  BarChartLine,
  DoorClosed,
  Heart,
  List,
  Person,
} from "react-bootstrap-icons";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Features/Users";
import { storeLogOut } from "../Features/StoreReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const HeaderDiv = styled.div`
  width: 100%;
  /* height: 40px; */
  color: white;
  /* background-color: red; */
  .links {
  }
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const Links = styled.div`
  svg {
    transform: scale(130%);
    cursor: pointer;
  }
  div {
    margin-left: 20px;
    display: flex;
  }
  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    margin-top: -5%;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #ff6e31;
    }
  }
  svg {
    margin-left: 10px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      fill: #ff6e31;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    a {
      margin-top: 3%;
    }

    div {
      height: 30px;
      width: 100px;
      margin-top: 3%;
      a {
        margin: 0;
      }
    }
  }
`;

export const Svgwhite = styled.div`
  svg {
    fill: white;
    transform: scale(150%);
  }
`;

function Header() {
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const theCart = useSelector((state) => state.cart.value);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isStoreLogged = useSelector((state) => state.store.value.isLogged);
  const isUserLogged = useSelector((state) => state.user.value.isLogged);

  useEffect(() => {
    let totalItem = 0;
    if (theCart.length !== 0) {
      for (let i = 0; i < theCart.length; i++) {
        totalItem = totalItem + theCart[i].quantity;
      }
      setCartTotal(totalItem);
    }
  }, [theCart, cartTotal]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-light text-white">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Logo</Link>
        </Navbar.Brand>
        <Svgwhite>
          <Navbar.Toggle aria-controls="navbarScroll">
            <List />
          </Navbar.Toggle>
        </Svgwhite>
        <Navbar.Collapse id="navbarScroll">
          <HeaderDiv className=" d-lg-flex justify-content-lg-between ">
            <div className="logo"></div>
            <div className="links">
              <Links
                // className=" d-sm-flex flex-sm-column"
                style={{ marginRight: "-50px" }}
              >
                <Link to="/men">Men</Link>
                <Link to="/woman">Woman</Link>
                <Link to="/kids">Kid</Link>
              </Links>
            </div>
            <Links className=" d-flex ">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Loging Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you Sure you want to log Out</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (isStoreLogged === true) {
                        dispatch(storeLogOut());
                      }
                      if (isUserLogged === true) {
                        dispatch(logOut());
                      }
                      handleClose();
                    }}
                  >
                    Logout
                  </Button>
                </Modal.Footer>
              </Modal>
              <div>
                {isStoreLogged || isUserLogged ? (
                  <DoorClosed
                    onClick={() => {
                      handleShow();
                    }}
                  />
                ) : (
                  <Link to="/login">
                    <Person />
                  </Link>
                )}
              </div>
              <div>
                <Link to="/favourite">
                  <Heart style={{ marginRight: "50px" }} />
                </Link>
              </div>
              <div>
                {isStoreLogged ? (
                  <Link to="/admin">
                    <BarChartLine />
                  </Link>
                ) : (
                  <Link to="/cart">
                    cart
                    <Bag />
                    {cartTotal ? (
                      <label
                        style={{
                          backgroundColor: "red",
                          marginLeft: "10px",
                          height: "20px",
                          aspectRatio: "1 / 1",
                          textAlign: "center",
                          borderRadius: "50%",
                          fontSize: "12px",
                        }}
                      >
                        {cartTotal}
                      </label>
                    ) : (
                      ""
                    )}
                  </Link>
                )}
              </div>
            </Links>
          </HeaderDiv>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
