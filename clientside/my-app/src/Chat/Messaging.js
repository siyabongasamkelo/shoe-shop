import styled from "styled-components";
import Header from "../Components/Header";
import io from "socket.io-client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./Chat";
// const socket = io.connect("http://localhost:3002");

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
`;

const Messaging = () => {
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

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      // socket.emit("join_room", room);
    }
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover text-white">
              <h3>Join A Chat</h3>

              <input
                type="text"
                placeholder="john..."
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Room Id..."
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              />
              <button onClick={joinRoom}>Join Room</button>

              {/* <Chat socket={socket} username={username} room={room} /> */}
            </div>
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Messaging;
