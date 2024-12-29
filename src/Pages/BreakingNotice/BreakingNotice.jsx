import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNotice = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 border-dotted border-blue-600 mb-2 py-1 text-cText">
        <div className="flex  mx-auto ">
          <button className=" text-black px-4 py-2  hover:bg-blue-600">
            খবর:
          </button>

          <Marquee>
            ২০২৫ শিক্ষাবর্ষে ৩য় শ্রেণিতে ভর্তির লটারির ফলাফল প্রকাশ ২০২৫
            শিক্ষাবর্ষে ৩য় শ্রেণিতে ভর্তি বিজ্ঞপ্তি নভেম্বর ডিসেম্বর /২০২৪
            শিক্ষার্থী বেতন ০৫/১১/২০২৪ থেকে ১৮/১১/২০২৪ এর মধ্যে প্রদান প্রসঙ্গে
            নভেম্বর ডিসেম্বর /২০২৪ শিক্ষার্থী বেতন নগদ এপসের মাধ্যমে ০৫/১১/২০২৪
            থেকে সমস্ত পাওনাদি ১৮/১১/২০২৪ এর অক্টোবর ' ২০২৪ শিক্ষার্থী বেতন নগদ
            এপসের মাধ্যমে ০৫/১০/২০২৪ থেকে প্রদান প্রসঙ্গে text.
          </Marquee>
          <button className="bg-blue-500 text-white px-4 py-2 text-end mr-4 rounded shadow hover:bg-blue-600 font-semibold">
            সকল
          </button>
        </div>
      </div>
    </>
  );
};

export default BreakingNotice;
