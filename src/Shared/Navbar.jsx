import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100  border mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 md:hidden">
          {/* Logo (Only for mobile devices) */}
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/">Logo</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 bg-red-700"
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
        <div className="hidden md:flex justify-between items-center text-center h-16">
          <div className="flex gap-12  items-center">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 "
              activeClassName="text-blue-500 font-bold"
            >
              প্রথম পাতা
            </NavLink>

            {/* পরিচিতি */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                পরিচিতি
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/introduction-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  পরিচিতি ১
                </NavLink>
                <NavLink
                  to="/introduction-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  পরিচিতি ২
                </NavLink>
              </div>
            </div>

            {/* জনবল */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                জনবল
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/staff-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  জনবল ১
                </NavLink>
                <NavLink
                  to="/staff-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  জনবল ২
                </NavLink>
              </div>
            </div>

            {/* শিক্ষার্থী */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                শিক্ষার্থী
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/student-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  শিক্ষার্থী ১
                </NavLink>
                <NavLink
                  to="/student-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  শিক্ষার্থী ২
                </NavLink>
              </div>
            </div>

            {/* পরীক্ষা ফলাফল */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                পরীক্ষা ফলাফল
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/result-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ১
                </NavLink>
                <NavLink
                  to="/result-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ২
                </NavLink>
              </div>
            </div>
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                ছবির গ্যালারী
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/result-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ছবির গ্যালারী ১
                </NavLink>
                <NavLink
                  to="/result-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ছবির গ্যালারী ২
                </NavLink>
              </div>
            </div>
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                যোগাযোগ
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/result-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ১
                </NavLink>
                <NavLink
                  to="/result-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ২
                </NavLink>
              </div>
            </div>
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-500">
                এপিএ
              </button>
              <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-10">
                <NavLink
                  to="/result-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ১
                </NavLink>
                <NavLink
                  to="/result-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  ফলাফল ২
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 "
              activeClassName="text-blue-500 font-bold"
            >
              শুদ্ধাচার কৌশল
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              প্রথম পাতা
            </NavLink>
            <div className="relative">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                পরিচিতি
              </button>
              <div className="px-6">
                <NavLink
                  to="/introduction-1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  পরিচিতি ১
                </NavLink>
                <NavLink
                  to="/introduction-2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                >
                  পরিচিতি ২
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/staff-1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জনবল
            </NavLink>
            <NavLink
              to="/student-1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              শিক্ষার্থী
            </NavLink>
            <NavLink
              to="/result-1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              পরীক্ষা ফলাফল
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
