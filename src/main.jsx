import { StrictMode } from 'react'
import ReactDom, { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { router } from './components/Router/Routes.jsx'
import Root from './components/layout/Root.jsx'
import Home from './components/Home/Home.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import BookMarks from './components/bookmarks/BookMarks.jsx'


 const router = createBrowserRouter([
  {
   path : '/',
   element : <Root/>,
   children : [
       {
           index : true,
           element : <Home/>
       },
       {
           path : '/blogs',
           element : <Blogs/>
       },
       {
        path : '/bookmarks',
        element : <BookMarks/>
       }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
