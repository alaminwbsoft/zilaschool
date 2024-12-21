import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut/>,
       children:[
        {
            path:'/',
            element:<Home/>
        }
       ]
    }
])

export default Router;