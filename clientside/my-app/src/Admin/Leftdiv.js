import styled from "styled-components";
import ManageItems from "./ManageItems";
import { Bag, BarChartLine, Chat, ChatDots, Tag } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LeftdivStyled = styled.div`
  width: 15%;
  height: 100%;
  @media (max-width: 480px) {
    width: 100%;
    height: 10%;
    margin-top: 20px;
    p {
      display: none;
    }
  }
`;

const Leftdiv = () => {
  const [senders, setSenders] = useState([]);
  const theStore = useSelector((state) => state?.store?.value?.store[0]);
  let author = theStore?._id;

  const showToastMessage = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    axios
      .get(`https://shoe-shop-jbik.onrender.com/get/senders/${author}`)
      .then((res) => {
        setSenders(res.data);
      })
      .catch((err) => {
        showToastMessage(err.message);
      });
  }, []);

  const link = `message/${senders[0]}`;

  return (
    <LeftdivStyled className="left-div d-flex flex-md-column flex-row text-white">
      <ToastContainer />
      <p>Manage Listings</p>
      <ManageItems name="Dashboard" Icon={<BarChartLine />} link="admin" />
      <ManageItems name="Products" Icon={<Tag />} link="products" />
      <ManageItems name="Orders" Icon={<Bag />} link="orders" />
      <ManageItems name="Customers" Icon={<Tag />} link="customers" />
      <ManageItems name="reviews" Icon={<Chat />} link="Reviews" />
      <ManageItems name="Messages" Icon={<ChatDots />} link={link} />
    </LeftdivStyled>
  );
};

export default Leftdiv;
