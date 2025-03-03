import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin, // Added this
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Intro */}
        <div>
          <img src="/rccg.png" alt="Logo" className="h-10 w-10" />

          <p className="text-sm mt-2 mb-4">
            Get the latest updates about our programs, blogs, and public
            activities.
          </p>
        </div>

        {/* Ministry Section */}
        <div>
          <h3 className="text-lg font-semibold">Ministry</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/ministries" className="text-gray-400 hover:text-white">
                Our Ministries
              </Link>
            </li>
            <li>
              <Link to="/sermons" className="text-gray-400 hover:text-white">
                Sermons
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="text-gray-400 hover:text-white">
                Leadership
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/minister" className="text-gray-400 hover:text-white">
                RCCG General Overseer
              </Link>
            </li>
            <li>
              <Link to="/pastors" className="text-gray-400 hover:text-white">
                Pastors
              </Link>
            </li>
            <li>
              <Link
                to="/departments"
                className="text-gray-400 hover:text-white"
              >
                Departments
              </Link>
            </li>
            <li>
              <Link to="/partner" className="text-gray-400 hover:text-white">
                Partner With Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Register for a Program
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-400 text-xl">
            <button className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </a>
          <a href="https://twitter.com" className="text-gray-400 text-xl">
            <button className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </a>
          <a href="https://instagram.com" className="text-gray-400 text-xl">
            <button className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </a>
          <a href="https://youtube.com" className="text-gray-400 text-xl">
            <button className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
          </a>
          <a href="https://linkedin.com" className="text-gray-400 text-xl">
            <button className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
        </div>
      </div>

      {/* Contact & Copyright Section */}
      <div className="mt-6 text-center">
        <p className="text-white font-semibold">Become a Partner</p>
        <p className="text-sm mt-2">
          31 - 33, Ewupe Road, Oju-ore, Ota, Ogun State, Nigeria
        </p>
        <p className="text-sm mt-1">
          <a href="tel:+2348186253251" className="hover:text-blue-400">
            +234 818 625 3251
          </a>{" "}
          |
          <a href="tel:+2349061767430" className="hover:text-blue-400">
            {" "}
            +234 803 800 7686
          </a>
        </p>
        <p className="text-sm mt-1">
          <a
            href="mailto:reg44hqyaya@gmail.com"
            className="hover:text-blue-400"
          >
            reg44hqyaya@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-4">
          © 2025 RCCG Ota. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
