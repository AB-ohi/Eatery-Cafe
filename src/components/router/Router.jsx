import { createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../layout/Main/Main';
import Login from '../in-out/Login';
import Blog from '../Pages/Blog/Blog';



const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:'/singUp',
        }
      ]
    },
  ]);


export default router;