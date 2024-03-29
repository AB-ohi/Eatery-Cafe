import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main/Main";
import Login from "../in-out/Login";
import Blog from "../Pages/Blog/Blog";
import SingUp from "../SingUp/SingUp";
import ViewDetails from "../viewDetails/ViewDetails";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/view",
        element: 
          <PriveteRoute>
            <ViewDetails></ViewDetails>
          </PriveteRoute>,
        // loader:({params}) => fetch(`http://localhost:1000/chef/${params.id}`)
      },
    ],
  },
  // {
  //   path:""
  // }
]);

export default router;
