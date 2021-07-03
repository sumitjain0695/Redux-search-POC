import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllUsers, searchFromUsers, selectAllUsers
} from "../Store/users";

const Homepage = (props) => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users) dispatch(fetchAllUsers());
    if (users) dispatch(searchFromUsers(users, null));
  }, [dispatch, users]);

  return (
    <div>
      <h3>Home Page</h3>
      <p>
        <Link to="user-details"> Details</Link>
      </p>
    </div>
  );
};

export default Homepage;
