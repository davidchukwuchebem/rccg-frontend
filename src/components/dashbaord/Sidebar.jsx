import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faUser,
  faHome,
  faChartBar,
  faCog,
  faSignOutAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-6">
      <div className="text-2xl font-bold">Dashboard</div>

      <nav className="flex flex-col space-y-4">
        {/* Home with Dropdown */}
        <div className="relative mt-5">
          <button
            onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-700"
          >
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform ${
                isHomeDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isHomeDropdownOpen && (
            <div className="mt-2 ml-4 space-y-2">
              <Link
                to="/dashboard/admin"
                className="block p-2 rounded-lg hover:bg-gray-700"
              >
                Admin
              </Link>
              <Link
                to="/dashboard/sermons"
                className="block p-2 rounded-lg hover:bg-gray-700"
              >
                Sermons
              </Link>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <Link
          to="/analytics"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faChartBar} />
          <span>Analytics</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </Link>

        {/* Logout */}
        <Link
          to="/logout"
          className="flex items-center space-x-2 p-2 rounded-lg text-red-400 hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
}
