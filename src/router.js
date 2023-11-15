import { createBrowserRouter } from "react-router-dom";
import UserSubmitPage from "./pages/UserSubmitPage";
import ChatPage from "./pages/ChatPage";

const router = createBrowserRouter([
     {
          path : '/',
          element: <UserSubmitPage/>
     },
     {
          path : '/chat',
          element: <ChatPage/>
     },

])

export default router;