import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md p-4 px-5 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/rccg.png" alt="Logo" className="h-10 w-10" />
          <span className="text-[20px] font-bold text-gray-500">RCCG Ota</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-bold">
          <a href="#" className="hover:text-gray-900 text-blue-800">
            HOME
          </a>
          <a href="#" className="hover:text-gray-900">
            MINISTRY
          </a>
          <a href="#" className="hover:text-gray-900">
            SERMONS
          </a>
          <a href="#" className="hover:text-gray-900">
            BOOKS
          </a>
          <a href="#" className="hover:text-gray-900">
            BLOG
          </a>
          <a href="#" className="hover:text-gray-900">
            COMMUNITY
          </a>
          <a href="#" className="hover:text-gray-900">
            RESOURCES
          </a>
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

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Sidebar Links */}
          <nav className="flex flex-col items-center mt-16 space-y-6 text-lg font-bold">
            <a href="#" className="hover:text-gray-900">
              HOME
            </a>
            <a href="#" className="hover:text-gray-900">
              MINISTRY
            </a>
            <a href="#" className="hover:text-gray-900">
              SERMONS
            </a>
            <a href="#" className="hover:text-gray-900">
              BOOKS
            </a>
            <a href="#" className="hover:text-gray-900">
              BLOG
            </a>
            <a href="#" className="hover:text-gray-900">
              COMMUNITY
            </a>
            <a href="#" className="hover:text-gray-900">
              RESOURCES
            </a>
            <button className="bg-orange-500 p-2 rounded shadow-lg shadow-orange-500/50 text-white">
              DONATE
            </button>
          </nav>
        </div>

        {/* Background Overlay (closes menu when clicked) */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>
    </>
  );
}
