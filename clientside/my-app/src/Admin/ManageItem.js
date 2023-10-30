import styled from "styled-components";
export const ManageStyled = styled.div`
  .manageItem {
    height: 60px;
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #212a3e;
    svg {
      transform: scale(150%);
      margin-left: 20px;
    }
    label {
      margin-left: 20px;
    }
  }
`;

const ManageItem = (name, Icon) => {
  return (
    <ManageStyled>
      <div className="manageItem d-flex align-items-center">
        {Icon} <label>{name}</label>
      </div>
    </ManageStyled>
  );
};

export default ManageItem;
