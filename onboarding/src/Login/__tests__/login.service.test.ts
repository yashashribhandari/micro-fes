import { login, useLoggedIn, jwt, API_SERVER } from "../login.service";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ access_token: "fake_token" }),
  })
) as jest.Mock;

describe("login.service", () => {
  beforeEach(() => {
    jwt.next(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("should fetch the access token and update jwt", async () => {
      const username = "testuser";
      const password = "password";

      const token = await login(username, password);

      expect(fetch).toHaveBeenCalledWith(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      expect(token).toBe("fake_token");
      expect(jwt.value).toBe("fake_token");
    });
  });

  describe("useLoggedIn", () => {
    it("should return false when not logged in", () => {
      const { result } = renderHook(() => useLoggedIn());
      expect(result.current).toBe(false);
    });

    it("should return true when logged in", () => {
      act(() => {
        jwt.next("fake_token");
      });

      const { result } = renderHook(() => useLoggedIn());
      expect(result.current).toBe(true);
    });

    it("should update loggedIn state when jwt changes", () => {
      const { result } = renderHook(() => useLoggedIn());

      act(() => {
        jwt.next("fake_token");
      });

      expect(result.current).toBe(true);

      act(() => {
        jwt.next(null);
      });

      expect(result.current).toBe(false);
    });
  });
});
