import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login'
import Home from '../pages/Home'
import Layout from "../pages/Layout/Layout";
import VerifyOtp from "../components/VerifyOtp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Home/>
            }
        ]
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'verify',
        element:<VerifyOtp/>
    }
])


export default router