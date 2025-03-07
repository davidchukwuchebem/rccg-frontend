import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("token");
      const storedAdmin = JSON.parse(localStorage.getItem("email"));

      if (!token || !storedAdmin) {
        console.error("No token or admin data found");
        return;
      }

      try {
        const response = await fetch(
          `https://rccg-backend.vercel.app/getAdmins/`, // Assuming API supports fetching by email
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token in request headers
            },
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setAdmin(data.users);
        } else {
          console.error("Error fetching admin data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdmin();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">Dashboard</div>

      {/* Search Bar */}
      <div className="relative w-1/3 max-w-sm hidden md:block">
        <FontAwesomeIcon
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          icon={faSearch}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 hover:bg-white transition"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <FontAwesomeIcon className="text-gray-600" icon={faBell} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FontAwesomeIcon className="text-gray-600" icon={faUser} />
          <span className="hidden md:block text-gray-800 font-medium">
            {admin ? `${admin.firstName} ${admin.lastName}` : "Loading..."}
          </span>
        </div>
      </div>
    </header>
  );
}
