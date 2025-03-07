import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Home from "../pages/Home";
import Sermon from "../pages/Sermon";
import Global from "../pages/Global";
import About from "../pages/About";
import Ministers from "../pages/Ministers";
import AdminLogin from "../pages/dashboard/Login";
import DashboardHome from "../pages/dashboard/Home";
import Sermons from "../pages/dashboard/Sermons";
import Admin from "../pages/dashboard/Admin";
import Minister from "../pages/Minister";

// Authentication check function
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check auth status
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/dashboard/auth/login" replace />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sermons" element={<Sermon />} />
          <Route path="about" element={<About />} />
          <Route path="global" element={<Global />} />
          <Route path="pastors" element={<Ministers />} />
          <Route path="minister" element={<Minister />} />
        </Route>

        {/* Dashboard - Protected Routes */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* Login Route */}
        <Route path="/dashboard/auth/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
