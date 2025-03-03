import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md p-4 px-5 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/rccg.png" alt="Logo" className="h-10 w-10" />
          <span className="text-[20px] font-bold text-gray-700">RCCG Ota</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-bold text-blue-900">
          <Link to="/" className="hover:text-gray-900">
            HOME
          </Link>
          <Link to="/sermons" className="hover:text-gray-900">
            SERMONS
          </Link>

          {/* Ministry Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("ministry")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-gray-900">
              MINISTRY <FaChevronDown size={12} />
            </button>
            {dropdown === "ministry" && (
              <div className="absolute left-0 mt-2 w-50 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/global"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  RCCG NATIONAL HQ
                </Link>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                  RCCG OTA
                </Link>
              </div>
            )}
          </div>

          {/* Community Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("community")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-gray-900">
              COMMUNITY <FaChevronDown size={12} />
            </button>
            {dropdown === "community" && (
              <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/minister"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  RCCG GENERAL OVERSEER
                </Link>
                <Link
                  to="/pastors"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PASTORS
                </Link>
                <Link
                  to="/volunteer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  DEPARTMENTS
                </Link>
                <Link
                  to="/volunteer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PARTNER WITH US
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("resources")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-gray-900">
              RESOURCES <FaChevronDown size={12} />
            </button>
            {dropdown === "resources" && (
              <div className="absolute left-0 mt-2 w-50 bg-white shadow-lg rounded-lg py-2">
                <Link to="/books" className="block px-4 py-2 hover:bg-gray-100">
                  CONTACT US
                </Link>
                <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                  REGISTER FOR A PROGRAM
                </Link>
              </div>
            )}
          </div>

          <button className="bg-orange-500 p-2 rounded shadow-lg shadow-orange-500/50 text-white">
            DONATE
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </header>
    </>
  );
}
