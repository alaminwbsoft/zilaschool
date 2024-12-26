import React from 'react';
import NoticeBoardIMG from '../../assets/noticeboard.png'




const NoticeBoard = () => {
    return (
       <>
        <div className="bg-gray-100 p-4 shadow-sm rounded-sm w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 border">
            {/* Header Section */}
            <div className="flex items-center mb-4">
                <img
                    src={NoticeBoardIMG} // Replace this with the actual image URL for the notepad icon
                    alt="Notepad"
                    className="w-24 h-24 mr-8"
                />
                <h2 className="text-xl font-bold text-gray-800">নোটিশ বোর্ড</h2>
            </div>

            {/* Notice List */}
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
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
                    নভেম্বর/ডিসেম্বর ২০২৪ এর শিক্ষার্থী বাকি বকেয়া নগদ এপসের মাধ্যমে প্রদান প্রসঙ্গে
                </li>
            </ul>

            {/* View All Button */}
            <div className="mt-4 text-right">
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                    সকল
                </button>
            </div>
        </div>
       
       </>
    );
};

export default NoticeBoard;
