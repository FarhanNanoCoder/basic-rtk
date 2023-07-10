import React, { useState } from "react";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: "" });

  const onCreateUser = () => {
    console.log(userList, user);
    let temp = userList;
    temp.push(user);
    setUser(null)
    setUserList(temp);
  };
  return (
    <div className="user-parent">
      <h2>Users</h2>
      <input
        required
        value={user?.name??""}
        onChange={(e) => setUser({ name: e.target.value })}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onCreateUser();
        }}
      >
        Create
      </button>

      <br />
      <div>
        {userList?.length !== 0 ? (
          userList?.map((item, index) => (
            <div key={index} style={{ color: "black" }}>
              {(index + 1).toString() + ". " + item?.name ?? "n/a"}
            </div>
          ))
        ) : (
          <strong>EMPTY!</strong>
        )}
      </div>
    </div>
  );
};

export default User;
