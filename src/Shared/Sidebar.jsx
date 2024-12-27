import React from "react";
import teacher from "../assets/teacher.jpg";

const Sidebar = () => {
  return (
    <div className="pl-5 bg-white">
      {/* Header */}
      <div className="text-center">
        <p className="text-lg font-bold border bg-blue-500 mb-2 text-white p-1">
          প্রধান শিক্ষক
        </p>
        <img
          src={teacher}
          alt="Principal"
          className="w-64 h-72 rounded-sm mx-auto border border-gray-300"
        />
        <p className="mt-2 text-gray-700 font-semibold">মোঃ আবুল কালাম আজাদ</p>
      </div>

      {/* Services Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold border bg-blue-500 mb-2 text-white p-1">
          অভ্যন্তরীণ ই-সেবা
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="hover:text-blue-500 text-red-700 cursor-pointer">
            <a href="http://eschool.sib.gov.bd/">ই-স্কুল</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="http://automation.sib.gov.bd/">পাঠশালা</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="http://pds.sib.gov.bd/">পিডিএস (সরকারি মাধ্যমিক)</a>
          </li>
          <li className="hover:text-blue-500 text-red-700 cursor-pointer">
            <a href="https://gsa.teletalk.com.bd/">ভর্তি পরীক্ষা আবেদন</a>
          </li>
        </ul>
      </div>

      {/* Important Links Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold border bg-blue-500 mb-2 text-white p-1">
          গুরুত্বপূর্ণ লিঙ্ক
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="http://www.moedu.gov.bd/">শিক্ষা মন্ত্রণালয়</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://dshe.gov.bd/"> মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://banbeis.gov.bd/">ব্যানবেইস</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">নায়েম</li>
          <li className="hover:text-blue-500 cursor-pointer">এনসিটিবি</li>
          <li className="hover:text-blue-500 cursor-pointer">শিক্ষক বাতায়ন</li>
          <li className="hover:text-blue-500 cursor-pointer">কিশোর বাতায়ন</li>
        </ul>
      </div>

      {/* Web Master Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold border bg-blue-500 mb-2 text-white p-1">
          ওয়েব মাস্টার
        </h3>
        <p className="text-gray-700 hover:text-blue-500 mb-20 cursor-pointer">
          ওয়েব মাস্টার লগইন
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
