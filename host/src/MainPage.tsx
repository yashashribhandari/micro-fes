import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

import Users from "onboarding/Users";
import Dashboard from "dashboard/Dashboard";
import Header from "./Header";
import HomeContent from "./HomeContent";

const MainPage = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Routes>
            <Route exact path="/" element={<HomeContent />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
);

export default MainPage;
