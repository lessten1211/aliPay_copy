import React,{ useState, } from 'react'
import './assets/reset.css'
import RouterView from './router/index'
import { BrowserRouter ,Routes,Outlet,Link} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
        {/* <Navigate to='/login'></Navigate> */}
        <Link to="/"></Link>
          <RouterView />
          <Outlet />
        </BrowserRouter>
    </>
  )
}

export default App
