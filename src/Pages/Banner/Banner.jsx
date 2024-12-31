import React, { useState, useEffect } from "react";
import banner1 from "../../assets/banner.gif";
import logo from "../../assets/logo.png";

const Banner = () => {
  const [zoomIn, setZoomIn] = useState(false);

  // Toggle zoom effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setZoomIn((prev) => !prev);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:h-[320px] overflow-hidden">
      {/* Banner Image */}
      <div className="w-full h-full">
        <img
          src={banner1}
          alt="banner"
          className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-in ${
            zoomIn ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Text Overlay */}
      <div className="text-white absolute bottom-8 left-10">
        <img src={logo} alt="logo" className="w-24 h-24 hidden md:block" />
        <p className="text-3xl font-extrabold mt-2">রংপুর সদর, রংপুর</p>
        <p className="text-2xl font-bold">রংপুর জিলা স্কুল</p>
      </div>
    </div>
  );
};

export default Banner;
