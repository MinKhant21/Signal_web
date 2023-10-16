import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login'
import VideoStream from "../components/VideoStream";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/video',
        element:<VideoStream/>
    }
])


export default router