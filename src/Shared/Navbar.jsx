import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-100  border-t border-b border-dotted mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 md:hidden">
          {/* Logo (Only for mobile devices) */}
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/">
              <img src={logo} alt="" className="h-16 w-16 p-1" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white hover:text-red-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7 bg-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center text-center  font-bold ">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-gray-700  hover:text-white hover:bg-blue-500 py-3 px-4 border-r-2 border-t-0 border-b-0 border-l-0   "
              activeClassName="text-blue-500 font-bold"
            >
              প্রথম পাতা
            </NavLink>

            {/* পরিচিতি */}
            <div className="group relative">
              <button className="text-gray-700  hover:text-white hover:bg-blue-500 py-3 px-4 border-r-2 border-t-0 border-b-0 border-l-0 ">
                পরিচিতি
              </button>
              <div className="absolute w-[200px] left-0 hidden bg-white shadow-lg group-hover:block ">
                <NavLink
                  to="/"
                  className="block py-3 text-left pl-4 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2 "
                >
                  এক নজরে পরিচিতি
                </NavLink>
                <NavLink
                  to="/short-history"
                  className="block text-left  py-3 pl-4 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                >
                  সংক্ষিপ্ত ইতিহাস
                </NavLink>
              </div>
            </div>

            {/* জনবল */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-4 border-r-2 border-t-0 border-b-0 border-l-0">
                জনবল
              </button>
              <div className="absolute w-[200px] left-0 hidden  bg-gradient-to-b from-gray-100 shadow-lg group-hover:block z-10">
                <NavLink
                  to="/staff-1"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                >
                  শিক্ষক-শিক্ষিকা
                </NavLink>
              </div>
            </div>

            {/* শিক্ষার্থী */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-4 border-r-2 border-t-0 border-b-0 border-l-0">
                শিক্ষার্থী
              </button>
              <div className="absolute w-[272px] left-0 hidden  bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/student-1"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                >
                  অধ্যয়নরত শিক্ষার্থীর সংখ্যা
                </NavLink>
                <NavLink
                  to="/student-2"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                >
                  অধ্যয়নরত শিক্ষার্থীর তালিকা
                </NavLink>
                <NavLink
                  to="/student-2"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                >
                  ডিজিটাল হাজিরার তথ্য
                </NavLink>
                <NavLink
                  to="/student-2"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                >
                  বেতন ও অন্যান্য ফি প্রদানের তথ্য
                </NavLink>
              </div>
            </div>

            {/* পরীক্ষা ফলাফল */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-4 border-r-2 border-t-0 border-b-0 border-l-0">
                পরীক্ষা ফলাফল
              </button>
              <div className="absolute w-[250px] left-0 hidden bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/result-1"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                >
                  পাবলিক পরীক্ষা
                </NavLink>
                <NavLink
                  to="/result-2"
                  className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                >
                  বিদ্যালয়ের অভ্যন্তরীণ পরীক্ষা
                </NavLink>
              </div>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-6 border-r-2 border-t-0 border-b-0 border-l-0 "
                activeClassName="text-blue-500 font-bold"
              >
                ছবির গ্যালারী
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-6 border-r-2 border-t-0 border-b-0 border-l-0 "
                activeClassName="text-blue-500 font-bold"
              >
                যোগাযোগ
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-6 border-r-2 border-t-0 border-b-0 border-l-0 "
                activeClassName="text-blue-500 font-bold"
              >
                এপিএ
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-white hover:bg-blue-500 py-3 px-6 border-r-2 border-t-0 border-b-0 border-l-0 "
                activeClassName="text-blue-500 font-bold"
              >
                শুদ্ধাচার কৌশল
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden bg-white w-full shadow-md mt-1 transform transition-transform duration-500 ease-in-out opacity-0 ${
              isMobileMenuOpen
                ? "-translate-x-4 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="w-[180px] bg-slate-300 text-cText">
              <div className="border-b-2 py-3  hover:bg-blue-500 hover:text-white ">
                <NavLink
                  to="/"
                  className=" py-3 px-4 "
                  activeClassName="text-blue-500 font-bold"
                >
                  প্রথম পাতা
                </NavLink>
              </div>

              {/* পরিচিতি */}
              <div className="group relative border-b-2 hover:bg-blue-500 hover:text-white">
                <button className="hover:text-white hover:bg-blue-500 py-3 px-4  ">
                  পরিচিতি
                </button>
                <div className="absolute w-full left-[180px] top-0 hidden bg-white shadow-lg group-hover:block z-10 ">
                  <NavLink
                    to="/"
                    className="block py-3 text-left pl-4 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2 "
                  >
                    এক নজরে পরিচিতি
                  </NavLink>
                  <NavLink
                    to="/short-history"
                    className="block text-left  py-3 pl-4 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                  >
                    সংক্ষিপ্ত ইতিহাস
                  </NavLink>
                </div>
              </div>

              {/* জনবল */}
              <div className="group relative border-b-2 hover:text-white hover:bg-blue-500">
                <button className="py-3 px-4">জনবল</button>
                <div className="absolute w-full left-[180px] top-0 hidden  bg-white shadow-lg group-hover:block z-10">
                  <NavLink
                    to="/staff-1"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                  >
                    শিক্ষক-শিক্ষিকা
                  </NavLink>
                </div>
              </div>

              {/* শিক্ষার্থী */}
              <div className="group relative border-b-2 hover:text-white hover:bg-blue-500">
                <button className="py-3 px-4  ">শিক্ষার্থী</button>
                <div className="absolute w-full left-[180px] top-0 hidden  bg-white shadow-lg group-hover:block z-10">
                  <NavLink
                    to="/student-1"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                  >
                    অধ্যয়নরত শিক্ষার্থীর সংখ্যা
                  </NavLink>
                  <NavLink
                    to="/student-2"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                  >
                    অধ্যয়নরত শিক্ষার্থীর তালিকা
                  </NavLink>
                  <NavLink
                    to="/student-2"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                  >
                    ডিজিটাল হাজিরার তথ্য
                  </NavLink>
                  <NavLink
                    to="/student-2"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                  >
                    বেতন ও অন্যান্য ফি প্রদানের তথ্য
                  </NavLink>
                </div>
              </div>

              {/* পরীক্ষা ফলাফল */}
              <div className="group relative border-b-2 hover:text-white hover:bg-blue-500">
                <button className="py-3 px-4">পরীক্ষা ফলাফল</button>
                <div className="absolute w-full left-[180px] top-0 hidden bg-white shadow-lg group-hover:block z-10">
                  <NavLink
                    to="/result-1"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500 border-b-2"
                  >
                    পাবলিক পরীক্ষা
                  </NavLink>
                  <NavLink
                    to="/result-2"
                    className="block text-left pl-4 py-3 text-gray-600 hover:bg-gradient-to-b from-gray-100 hover:text-blue-500"
                  >
                    বিদ্যালয়ের অভ্যন্তরীণ পরীক্ষা
                  </NavLink>
                </div>
              </div>
              <div className="border-b-2 py-3 hover:bg-blue-500 hover:text-white">
                <NavLink
                  to="/"
                  className=" hover:text-white hover:bg-blue-500 py-3 px-4 "
                  activeClassName="text-blue-500 font-bold"
                >
                  ছবির গ্যালারী
                </NavLink>
              </div>
              <div className="border-b-2 py-3 hover:bg-blue-500 hover:text-white">
                <NavLink
                  to="/"
                  className=" hover:text-white hover:bg-blue-500 py-3 px-4 "
                  activeClassName="text-blue-500 font-bold"
                >
                  যোগাযোগ
                </NavLink>
              </div>
              <div className="border-b-2 py-3 hover:bg-blue-500 hover:text-white">
                <NavLink
                  to="/"
                  className=" hover:text-white hover:bg-blue-500 py-3 px-4 "
                  activeClassName="text-blue-500 font-bold"
                >
                  এপিএ
                </NavLink>
              </div>
              <div className="border-b-2 py-3 hover:bg-blue-500 hover:text-white">
                <NavLink
                  to="/"
                  className=" hover:text-white hover:bg-blue-500 py-3 px-4 "
                  activeClassName="text-blue-500 font-bold"
                >
                  শুদ্ধাচার কৌশল
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
