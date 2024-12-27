import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Sidebar from "../Shared/Sidebar";

const LayOut = () => {
  return (
    <>
      <div className="w-full lg:w-[900px] xl:w-[1200px] 2xl:w-[1500px] mx-auto px-5 bg-white shadow-2xl relative">
        <Header />
        <div className="flex">
          {/* Main Content */}
          <div className="w-[79%]">
            <Outlet />
          </div>
          {/* Sidebar */}
          <div className="w-[20%] absolute right-0 top-[402px] bottom-40 mr-5 ml-5  ">
            <Sidebar />
          </div>
        </div>
        {/* Footer */}

        <Footer />
      </div>
    </>
  );
};

export default LayOut;
