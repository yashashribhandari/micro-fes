import React from "react";
import { useLoggedIn } from "onboarding/loginService";
import Login from "onboarding/Login";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export default function HomeContent() {
  const loggedIn = useLoggedIn();

  return (
    <ErrorBoundary>
      {loggedIn ? (
        <div className="flex flex-col items-center">
          <nav className="mt-6">
            <div>
              <Link
                to="/dashboard"
                className="text-blue-800 hover:text-blue-300 transition-colors duration-200"
              >
                <span className="font-semibold"> Go to Dashboard</span>
              </Link>
            </div>
            <div className="mt-20">
              <Link
                to="/users"
                className="text-blue-800 hover:text-blue-300 transition-colors duration-200"
              >
                <span className="font-semibold"> Go to Users</span>
              </Link>
            </div>
          </nav>
        </div>
      ) : (
        <Login />
      )}
    </ErrorBoundary>
  );
}
