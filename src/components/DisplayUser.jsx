// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();

  //use to fetch the data from redux
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  // console.log(data);
  return (
    <Wrapper>
      <div className="user-table">
        {data.map((item, id) => {
          return (
            <li key={id} className="user-name">
              {item}
              <button onClick={() => deleteUser(id)} className="delete-icon">
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .user-table {
  }
  .user-name {
    display: flex;
    justify-content: space-between;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

export default DisplayUser;
