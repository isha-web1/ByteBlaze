import { StrictMode } from 'react'
import ReactDom, { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { router } from './components/Router/Routes.jsx'
import Root from './components/layout/Root.jsx'
import Home from './components/Home/Home.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import BookMarks from './components/bookmarks/BookMarks.jsx'
import BlogDetails from './components/blogDetails/BlogDetails.jsx'
import Content from './components/Content/Content.jsx'
import Author from './components/Author/Author.jsx'


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
           element : <Blogs/>,
           loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
       },
       {
           path : '/blog/:id',
           element : <BlogDetails/>,
           loader: ({ params }) =>
            fetch(`https://dev.to/api/articles/${params?.id}`),
           children: [
            {
              index: true,
              element: <Content />,
              loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params?.id}`),
            },
            {
              path: 'author',
              element: <Author />,
              loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params?.id}`),
            },
          ],
       },
       {
        path : '/bookmarks',
        element : <BookMarks/>
       }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
)
