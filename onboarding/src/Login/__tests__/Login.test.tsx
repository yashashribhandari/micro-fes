import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { useLoggedIn } from "../login.service";

jest.mock("../login.service");

describe("Login Component", () => {
  beforeEach(() => {
    (useLoggedIn as jest.Mock).mockReturnValue(false);
  });

  it("renders login form when not logged in", () => {
    render(<Login />);

    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("loginbtn")).toBeInTheDocument();
  });

  it("does not render login form when logged in", () => {
    (useLoggedIn as jest.Mock).mockReturnValue(true);
    render(<Login />);
    expect(screen.queryByTestId("username")).toBeNull();
    expect(screen.queryByTestId("password")).toBeNull();
    expect(screen.queryByTestId("loginbtn")).toBeNull();
  });

  it("allows user to input username and password", () => {
    render(<Login />);

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("password");
  });
});
