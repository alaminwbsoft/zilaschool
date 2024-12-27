import React from "react";

import NoticeBoard from "./Notice/Noticeboard";
import Subornojoyonti from "./Subornojoyonti/Subornojoyonti";
import Downloads from "./DownLoads/Downloads";
import BreakingNotice from "./BreakingNotice/BreakingNotice";

const Home = () => {
  return (
    <div>
      <Subornojoyonti />
      <NoticeBoard />
      <BreakingNotice />
      <Downloads />
    </div>
  );
};

export default Home;
