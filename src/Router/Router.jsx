import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home";
import ShortHistory from "../Pages/history/ShortHistory";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/short-history",
        element: <ShortHistory />,
      },
    ],
  },
]);

export default Router;
