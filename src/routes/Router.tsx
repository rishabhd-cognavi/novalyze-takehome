import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/HomePage.tsx";
import Login from "../pages/LoginPage.tsx";
import PasswordPage from "../pages/PasswordPage.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<PasswordPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
