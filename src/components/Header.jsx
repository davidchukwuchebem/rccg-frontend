import "../index.css";

export default function Header() {
  return (
    <>
      {/* bg-[#2b3860] */}
      <header className="bg-white shadow-m p-4 px-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/rccg.png" alt="Logo" className="h-10 w-10" />
          <span className="text-3xl font-bold text-">RCCG Ota</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text- text-sm font-bold">
            <li>
              <a href="#" className="hover:text-gray-900 text-blue-800">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                MINISTRY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                SERMONS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                BOOKS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                COMMUNITY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                RESOURCES
              </a>
            </li>
            <li>
              <button className="bg-orange-500 p-2 rounded shadow-lg shadow-orange-500/50 text-white">
                DONATE
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
