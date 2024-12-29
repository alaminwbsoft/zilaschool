import React from "react";
import downloadImg from "../../assets/download.png";

const Downloads = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 p-3 shadow-sm rounded-sm w-full max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 mb-2 border">
        {/* Header Section */}
        <div className="flex items-center mb-4">
          <img
            src={downloadImg} // Replace this with the actual image URL for the notepad icon
            alt="Notepad"
            className="w-24 h-24 mr-8"
          />
          <h2 className="text-base font-bold text-gray-800">ডাউনলোডস</h2>
        </div>

        {/* Notice List */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-cText font-semibold">
          <li className="hover:text-blue-500 cursor-pointer">
            ২০২৫ শিক্ষাবর্ষের ৩য় শ্রেণিতে কোটা ভর্তি সংক্রান্ত নির্দেশনাবলী
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            ২০২৫ শিক্ষাবর্ষের ৩য় শ্রেণির ভর্তি সংক্রান্ত নির্দেশনাবলী
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            ২০২৫ শিক্ষাবর্ষের ৩য় শ্রেণির দিবা শিফটের লটারির ১ম ফলাফল তালিকা
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            ২০২৫ শিক্ষাবর্ষের ৩য় শ্রেণির প্রভাতি শিফটের লটারির ১ম ফলাফল তালিকা
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            নভেম্বর/ডিসেম্বর ২০২৪ এর শিক্ষার্থী বাকি বকেয়া নগদ এপসের মাধ্যমে
            প্রদান প্রসঙ্গে
          </li>
        </ul>

        {/* View All Button */}
        <div className="mt-4 text-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 text-cText font-semibold">
            সকল
          </button>
        </div>
      </div>
    </>
  );
};

export default Downloads;
