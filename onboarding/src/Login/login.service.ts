import { useEffect, useState, useRef } from "react";
import { BehaviorSubject } from "rxjs";

export const API_SERVER = "http://localhost:3030";

export const jwt = new BehaviorSubject<string | null>(null);

interface LoginResponse {
  access_token: string;
}

export const login = (username: string, password: string): Promise<string> =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data: LoginResponse) => {
      jwt.next(data.access_token);
      return data.access_token;
    });

export function useLoggedIn(): boolean {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  const isMounted = useRef(true);

  useEffect(() => {
    setLoggedIn(!!jwt.value);

    const subscription = jwt.subscribe(() => {
      if (isMounted.current) {
        setLoggedIn(!!jwt.value);
      }
    });

    return () => {
      isMounted.current = false;
      subscription.unsubscribe();
    };
  }, []);

  return loggedIn;
}
