import { useRoutes,Navigate } from "react-router-dom";
import Login from '../views/Login'
import Register from "../views/Register";
import ClassIndex from '../views/classIndex'
import UserInfo from '../views/UserInfo'
import Scanf from "../components/scanf";
import Video from '../views/Video'
import Massage from '../views/Massage'
export default function RouterView() {
  const routes = useRoutes([
    {
      path:'/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login', 
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/classIndex',
      element: <ClassIndex />
    },
    {
      path:'/userInfo',
      element:<UserInfo />
    },
    {
      path:'/scanf',
      element:<Scanf />
    },
    {
      path:'/video',
      element:<Video />
    },
    {
      path:'/massage',
      element:<Massage />
    }



  ])
  return <>
  {routes}
  </>
}