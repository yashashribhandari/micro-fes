import { jwt, API_SERVER } from "../Login/login.service";

let currentToken = "";

jwt.subscribe((token) => {
  currentToken = token;
});

export const getUsers = () =>
  fetch(`${API_SERVER}/users`, {
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  }).then((res) => res.json());

export const getUserById = (id) =>
  fetch(`${API_SERVER}/user/${id}`).then((res) => res.json());
