import React from 'react';
import golden_jubilee from '../../assets/golden_jubilee.png'

const Subornojoyonti = () => {
    return (
        <>
         <div className="bg-gray-100 p-4 shadow-sm rounded-sm w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 border">
                    {/* Header Section */}
                    <div className="flex  items-center mb-4">
                        <img
                            src={golden_jubilee} // Replace this with the actual image URL for the notepad icon
                            alt="Notepad"
                            className="w-48 h-32 mr-8"
                        />
                       <div>
                       <h2 className="text-xl font-bold text-gray-800">স্বাধীনতার সুবর্ণজয়ন্তী</h2>
                       <p className="text-md font-bold text-gray-800 mt-4 hover:text-blue-500 cursor-pointer"><a href="" >সুবর্ণজয়ন্তী ছবির গ্যালারী</a></p>
                       </div>
                        
                    </div>
                   
        
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

export default Subornojoyonti;