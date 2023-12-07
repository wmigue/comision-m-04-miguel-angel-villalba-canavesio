import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBarra from './components/navbar/navbar'
import NewPost from '../views/new-post.jsx'
import Posts from '../views/posts.jsx'
import Error from '../views/error.jsx'
import { ContextoProvider } from './context/contexto.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registro from '../views/registro.jsx'
import LoginForm from './components/loginForm.jsx'
import LayOut from './layouts/layout.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut><LoginForm /></LayOut>,
  },
  {
    path: "/posts",
    element: <LayOut><Posts /></LayOut>,
  },
  {
    path: "/posts/nuevo",
    element: <LayOut><NewPost /></LayOut>,
  },
  {
    path: "/error",
    element: <LayOut><Error /></LayOut>,
  },
  {
    path: "users/registro",
    element: <LayOut><Registro /></LayOut>,
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
