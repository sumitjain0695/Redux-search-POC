import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchFromUsers,
  selectAllUsers,
  selectSearchedUsers,
} from "../Store/users";

const Userdetails = (props) => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState(null);
  const users = useSelector(selectAllUsers);
  const searchedUsers = useSelector(selectSearchedUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(null);
    if (localStorage.getItem("searched")) {
      console.log("searched users", searchedUsers);
      setUserList(searchedUsers);
    }
    if (!searchedUsers) setUserList(users);
    else setUserList(searchedUsers);
  }, [searchedUsers]);

  const onChange = (e) => {
    localStorage.setItem("searched", e.target.value.trim());
    dispatch(searchFromUsers(users, e.target.value.trim()));
  };

  const onClick = (id) => {
    console.log(
      "show details of",
      searchedUsers.filter((item) => item.id === id)[0]
    );
    setUser(searchedUsers.filter((item) => item.id === id)[0]);
  };
  return (
    <div>
      <h3>Details Page</h3>
      <Link to="blank">Blank page</Link>
      <div style={{ display: "flex" }}>
        <div class="left" style={{ width: "30%" }}>
          <input
            onChange={onChange}
            defaultValue={localStorage.getItem("searched")}
          ></input>
          {userList && (
            <div>
              <ul>
                {userList.map((item) => (
                  <li onClick={() => onClick(item.id)}>
                    {item.name.title} {item.name.first} {item.name.last}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {user && (
          <div class="right" style={{ width: "70%", textAlign: "center" }}>
            <img src={user.picture.medium} alt=""></img>
            <p>
              {user.name.title + " " + user.name.first + " " + user.name.last}
            </p>
            <p>{user.gender}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userdetails;
