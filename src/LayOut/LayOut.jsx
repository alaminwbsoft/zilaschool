import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Sidebar from '../Shared/Sidebar';

const LayOut = () => {
    return (
        <>
            <div className="w-full lg:w-[900px] xl:w-[1200px] 2xl:w-[1500px] mx-auto bg-white relative">
                <Header />
                <div className="flex">
                    {/* Main Content */}
                    <div className="w-[75%]">
                        <Outlet />
                    </div>
                    {/* Sidebar */}
                    <div className="w-[25%] absolute right-0 top-[365px] bottom-40 p-4 bg-gray-100">
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
