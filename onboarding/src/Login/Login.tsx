import React, { useState } from "react";
import { login, useLoggedIn } from "./login.service";
import "tailwindcss/tailwind.css";

export default function Login() {
  const loggedIn = useLoggedIn();

  const [username, setUsername] = useState("john.doe");
  const [password, setPassword] = useState("password123");
  if (loggedIn) return null;

  return (
    <>
      <div
        className="p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
        style={{
          width: 300,
          top: "2rem",
          left: -250,
        }}
      >
        <input
          type="text"
          placeholder="User Name"
          value={username}
          data-testid="username"
          onChange={(evt) => setUsername(evt.target.value)}
          className="border text-sm border-gray-400 p-2 rounded-md w-full"
        />
        <input
          type="password"
          data-testid="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
        />
        <button
          className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
          onClick={() => login(username, password)}
          data-testid="loginbtn"
        >
          Login
        </button>
      </div>
    </>
  );
}
