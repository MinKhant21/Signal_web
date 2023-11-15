import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserSubmitPage from "./pages/UserSubmitPage";
import ChatPage from "./pages/ChatPage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export default function Routes() {
     let {user,authReady} = useContext(AuthContext)
     let isAuthenticated= Boolean(user)
     const router = createBrowserRouter([
          {
               path : '/',
               element: !isAuthenticated ? <UserSubmitPage/> : <Navigate to='/chat' />
          },
          {
               path : '/chat',
               element: isAuthenticated ? <ChatPage/> : <Navigate to="/"/>
          },
     
     ])
     return (
          authReady &&  <RouterProvider router={router} />
     )
}


