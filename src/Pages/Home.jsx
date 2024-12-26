import React from 'react';

import NoticeBoard from './Notice/Noticeboard';
import Subornojoyonti from './Subornojoyonti/Subornojoyonti';
import Downloads from './DownLoads/Downloads';

const Home = () => {
    return (
        <div>
            <Subornojoyonti/>
           <NoticeBoard/>
           <Downloads/>
        </div>
    );
};

export default Home;