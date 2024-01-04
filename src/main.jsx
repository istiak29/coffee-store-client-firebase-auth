import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddCoffee from './Components/CRUD/AddCoffee';
import UpdateCoffee from './Components/CRUD/UpdateCoffee';
import SingIn from './Components/UserSignin/Singin';
import SignUp from './Components/UserSignin/SignUp';
import AuthProvider from './Providers/AuthProvider';
import User from './Components/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/coffeelist')
  },

  {
    path: "coffee",
    element: <AddCoffee></AddCoffee>
  },

  {
    path: "updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffeelist/${params.id}`)
  },

  {
    path: "/signin",
    element: <SingIn></SingIn>
  },

  {
    path: "/signup",
    element: <SignUp></SignUp>
  },

  {
    path: "/users",
    element: <User></User>,
    loader: () => fetch('https://coffee-store-server-jozswvh6c-triistiak-gmailcom.vercel.app/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

