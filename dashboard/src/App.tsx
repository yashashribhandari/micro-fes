import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard/Dashboard";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1 className="text-center">Dashboard</h1>
    <Dashboard />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
