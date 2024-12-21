import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Sidebar from '../Shared/Sidebar';

const LayOut = () => {
    return (
        <>
            <div className="w-full lg:w-[900px] xl:w-[1200px] 2xl:w-[1500px] mx-auto bg-white">
                <Header />
                <div className="flex">
                    {/* Main Content */}
                    <div className="w-[75%] p-4">
                        <Outlet />
                    </div>
                    {/* Sidebar */}
                    <div className="w-[25%] fixed right-0 top-44 bottom-40 p-4 bg-gray-100">
                        <Sidebar />
                    </div>
                </div>
                {/* Footer */}
                <div className="w-full p-4 bg-gray-50 fixed bottom-0 left-0">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LayOut;
