import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compontes/Home/Home';
import About from './compontes/About/About';
import Contact from './compontes/Contact/Contact';
import Users from './compontes/Users/Users';
import UserDetails from './compontes/UserDetails/UserDetails';
import Posts from './compontes/Posts/Posts';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children : [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
				//path: '/user/:userId ', // Wrong Piece of Code
				//loader: ({params}) => console.log(params), //Wrong Piece of Code
				path: '/user/:userId',
        loader: ({params}) => fetch(`https:jsonplaceholder.typicode.com/users/${params.userId}`),
				element: <UserDetails></UserDetails>
			},
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      }
    ]
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
