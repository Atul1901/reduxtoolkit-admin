// import React from 'react'
import styled from "styled-components";
import { deleteUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const clearUsers = () => {
    dispatch(deleteUser());
  };

  return (
    <Wrapper>
      <div>
        <button onClick={() => clearUsers()} className=" btn clear-btn">
          DeleteAllUsers
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUsers;
