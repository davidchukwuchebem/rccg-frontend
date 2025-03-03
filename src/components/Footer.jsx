import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div>
            <img src="/rccg.png" alt="Logo" className="h-10 w-10" />

            <p className="text-sm mt-2 mb-4">
              Get the latest updates about our programs, blogs, and public
              activities.
            </p>
          </div>

          {/* Ministry Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Ministry</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  RCN Global
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  RCN Lagos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Adullam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Sermons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Community</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  RCN President
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pastors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Prayer Cells
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Prayer Request
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Give Testimony
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-gray-400  text-xl">
              <button className="bg-blue-800 me-2  hover:bg-blue-900  text-white font-bold py-1 px-3 rounded">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
            </a>
            <a href="https://twitter.com" className="text-gray-400  text-xl">
              <button className="bg-blue-800 me-2 hover:bg-blue-900   text-white font-bold py-1 px-3 rounded">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
            </a>
            <a href="https://instagram.com" className="text-gray-400  text-xl">
              <button className="bg-blue-800 me-2   hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </a>
            <a href="https://youtube.com" className="text-gray-400 text-xl">
              <button className="bg-blue-800 me-2 hover:bg-blue-900   text-white font-bold py-1 px-3 rounded">
                <FontAwesomeIcon icon={faYoutube} />
              </button>
            </a>
            <a href="https://linkedin.com" className="text-gray-400  text-xl">
              <button className="bg-blue-800 me-2  hover:bg-blue-900  text-white font-bold py-1 px-3 rounded">
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
      </div>
    </footer>
  );
};

export default Footer;
