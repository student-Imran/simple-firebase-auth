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
