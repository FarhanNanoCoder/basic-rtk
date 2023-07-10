import {
  useGetUserListQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} from "@/redux/api/user";
import React, { useState } from "react";

const User = () => {
  const { data: userList } = useGetUserListQuery({});
  const [createUser] = useCreateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [user, setUser] = useState({ name: "" });

  const onCreateUser = () => {
    console.log(userList, user);
    createUser(user);
    setUser(null);
  };

  const onDeleteUser = (id) => {
    console.log(id);
    deleteUser(id);
  };
  return (
    <div className="user-parent">
      <h2>Users</h2>
      <input
        required
        value={user?.name ?? ""}
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
            <div key={index} style={{ color: "black", display: "flex" }}>
              <p> {(index + 1).toString() + ". " + item?.name ?? "n/a"}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDeleteUser(item?.id);
                }}
              >
                Delete
              </button>
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
