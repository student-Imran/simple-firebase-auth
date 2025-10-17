import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';

import Register from './Components/Register/Register.jsx';
import Login from './Components/LogIn/Login.jsx';
import AuthProvider from './Context/AuthContext/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Profile from './Components/Profile/Profile.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Dashboard from './Components/DashBoard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'orders',
        element:<PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path:'dashboard',
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  
  </StrictMode>,
)
