import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export const ManageItemsStyled = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #212a3e;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #ffe77d;
    color: black;
  }
  svg {
    transform: scale(150%);
    margin-left: 20px;
  }
  label {
    margin-left: 20px;
  }
  @media (max-width: 480px) {
    width: 20%;

    label {
      display: none;
    }
  }
`;

const ManageItems = ({ name, Icon, link }) => {
  const navigation = useNavigate();
  const goTo = (link) => {
    navigation(`/${link}`);
  };
  return (
    <ManageItemsStyled
      className="d-flex align-items-center"
      onClick={() => {
        goTo(link);
      }}
    >
      {Icon} <label>{name}</label>
    </ManageItemsStyled>
  );
};

export default ManageItems;
