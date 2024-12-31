import React from "react";
import teacher from "../assets/teacher.jpg";

const Sidebar = () => {
  return (
    <div className="pl-5 bg-white hidden md:block">
      {/* Header */}
      <div className="text-center">
        <p className="text-lg font-bold border bg-blue-500 mb-2 text-white p-1">
          প্রধান শিক্ষক
        </p>
        <img
          src={teacher}
          alt="Principal"
          className="w-52 h-56 rounded-sm mx-auto border border-gray-300"
        />
        <p className="mt-2 text-gray-700 font-semibold text-cText">
          মোঃ আবুল কালাম আজাদ
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-6">
        <p className="text-base font-bold border bg-blue-500 mb-2 text-white p-1">
          অভ্যন্তরীণ ই-সেবা
        </p>
        <ul className="list-disc list-inside text-gray-700 text-cText font-semibold">
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
        <p className="text-base font-bold border bg-blue-500 mb-2 text-white p-1">
          গুরুত্বপূর্ণ লিঙ্ক
        </p>
        <ul className="list-disc list-inside text-gray-700 text-cText font-semibold">
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="http://www.moedu.gov.bd/">শিক্ষা মন্ত্রণালয়</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://dshe.gov.bd/"> মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://banbeis.gov.bd/">ব্যানবেইস</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://naem.gov.bd/">নায়েম</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://nctb.gov.bd/">এনসিটিবি</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://www.teachers.gov.bd/">শিক্ষক বাতায়ন</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="https://www.konnect.edu.bd/">কিশোর বাতায়ন</a>
          </li>
        </ul>
      </div>

      {/* Web Master Section */}
      <div className="mt-6">
        <p className="text-base font-bold border bg-blue-500 mb-3 text-white p-1">
          ওয়েব মাস্টার
        </p>
        <p className="text-gray-700 hover:text-blue-500 mb-20 cursor-pointer">
          <a href="http://sib.gov.bd/webmaster/default.aspx">
            ওয়েব মাস্টার লগইন
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
