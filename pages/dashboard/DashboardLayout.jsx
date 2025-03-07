import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../src/components/dashbaord/Sidebar";
import Header from "../../src/components/dashbaord/Header";
import Message from "../../src/components/Message";
import Pastors from "../../src/components/Pastors";

export default function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [navigate]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Fixed Header */}
        <div className="fixed top-0 left-64 right-0 z-10 bg-white shadow-md">
          <Header />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto mt-[8%] px-6 pb-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
