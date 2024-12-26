
// import  { useState, useEffect } from "react";
// import banner1 from "../../assets/banner.gif"; 
// import banner2 from "../../assets/banner2.png";
// import logo from "../../assets/logo.png";

// const Banner = () => {
//     const banners = [banner1, banner2]; // Array of banner images
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Automatically change the banner every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//         }, 4000); // Change image every 4 seconds
//         return () => clearInterval(interval);
//     }, [banners.length]);

//     return (
//         <div className="relative">
//             {/* Banner Image */}
//             <div className="w-full h-64 overflow-hidden">
//                 <img
//                     src={banners[currentIndex]}
//                     alt={`banner-${currentIndex + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
//                 />
//             </div>

//             {/* Text Overlay */}
//             <div className="text-white absolute bottom-8 left-10">
//                 <img src={logo} alt="logo" className="w-24 h-24" />
//                 <p className="text-3xl font-extrabold mt-2">রংপুর সদর, রংপুর</p>
//                 <p className="text-2xl font-bold">রংপুর জিলা স্কুল</p>
//             </div>
//         </div>
//     );
// };

// export default Banner;
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
        <div className="relative w-full h-[300px] overflow-hidden">
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
                <img src={logo} alt="logo" className="w-24 h-24" />
                <p className="text-3xl font-extrabold mt-2">রংপুর সদর, রংপুর</p>
                <p className="text-2xl font-bold">রংপুর জিলা স্কুল</p>
            </div>
        </div>
    );
};

export default Banner;
