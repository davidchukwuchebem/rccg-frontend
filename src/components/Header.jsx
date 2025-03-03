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
      <header className="bg-white shadow-md p-4 px-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
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

          {/* Dropdowns */}
          {["ministry", "community", "resources"].map((menu) => (
            <div
              key={menu}
              className="relative group"
              onMouseEnter={() => setDropdown(menu)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-gray-900">
                {menu.toUpperCase()} <FaChevronDown size={12} />
              </button>
              {dropdown === menu && (
                <div className="absolute left-0 mt-2 w-50 bg-white shadow-lg rounded-lg py-2">
                  {menu === "ministry" && (
                    <>
                      <Link
                        to="/global"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        RCCG NATIONAL HQ
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        RCCG OTA
                      </Link>
                    </>
                  )}
                  {menu === "community" && (
                    <>
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
                    </>
                  )}
                  {menu === "resources" && (
                    <>
                      <Link
                        to="/books"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        CONTACT US
                      </Link>
                      <Link
                        to="/blog"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        REGISTER FOR A PROGRAM
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-100 flex justify-end z-50">
            <div className="bg-white w-2/3 h-full p-5 shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-2xl text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
              <nav className="flex flex-col space-y-4 mt-10 text-blue-900 text-lg">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  HOME
                </Link>
                <Link to="/sermons" onClick={() => setIsOpen(false)}>
                  SERMONS
                </Link>

                {/* Dropdowns */}
                {["ministry", "community", "resources"].map((menu) => (
                  <div key={menu} className="relative">
                    <button
                      className="flex items-center justify-between w-full py-2 text-left"
                      onClick={() =>
                        setDropdown(dropdown === menu ? null : menu)
                      }
                    >
                      {menu.toUpperCase()} <FaChevronDown size={12} />
                    </button>
                    {dropdown === menu && (
                      <div className="pl-4">
                        {menu === "ministry" && (
                          <>
                            <Link
                              to="/global"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              RCCG NATIONAL HQ
                            </Link>
                            <Link
                              to="/about"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              RCCG OTA
                            </Link>
                          </>
                        )}
                        {menu === "community" && (
                          <>
                            <Link
                              to="/minister"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              RCCG GENERAL OVERSEER
                            </Link>
                            <Link
                              to="/pastors"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              PASTORS
                            </Link>
                            <Link
                              to="/volunteer"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              DEPARTMENTS
                            </Link>
                            <Link
                              to="/volunteer"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              PARTNER WITH US
                            </Link>
                          </>
                        )}
                        {menu === "resources" && (
                          <>
                            <Link
                              to="/books"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              CONTACT US
                            </Link>
                            <Link
                              to="/blog"
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              REGISTER FOR A PROGRAM
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <button className="bg-orange-500 p-2 rounded shadow-lg shadow-orange-500/50 text-white">
                  DONATE
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
