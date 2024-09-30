import React, { useState, useEffect } from "react";
import { getUsers } from "./users.service";
import { login, useLoggedIn } from "../Login/login.service";
import "tailwindcss/tailwind.css";

const Users = () => {
  const loggedIn = useLoggedIn();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {users?.map((user) => (
        <div key={user.userId} className="p-4 border rounded shadow-sm">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg">{user.username}</div>
            <div
              className={`text-sm ${
                user.isActive ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </div>
          </div>
          <div className="text-sm mt-2">Email: {user.email}</div>
          <div className="text-sm">Age: {user.age}</div>
          <div className="text-sm mt-2">Roles: {user.roles.join(", ")}</div>
          <div className="text-sm mt-4">{user.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
