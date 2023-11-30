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


const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextoProvider><App /></ContextoProvider>,
  },
  {
    path: "/posts",
    element: <ContextoProvider><Posts /></ContextoProvider>,
  },
  {
    path: "/posts/nuevo",
    element: <ContextoProvider><NewPost /></ContextoProvider>,
  },
  {
    path: "/error",
    element: <ContextoProvider><Error /></ContextoProvider>,
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <NavBarra />
  </React.StrictMode>,
)
