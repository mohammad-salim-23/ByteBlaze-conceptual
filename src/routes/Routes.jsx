
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Pages/Home/Blogs';
import Blog from '../Pages/Home/Blog';
import Bookmarks from '../Pages/Home/Bookmarks';
import Mainlayout from '../components/Mainlayout';
import Home from '../Pages/Home/Home';
import Content from '../components/Content';
import Author from '../components/Author';
export const router = createBrowserRouter([
    {
       path:'/',
       element:<Mainlayout></Mainlayout>,
       children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
    
        },
        {
           path:'/blog/:id',
           element:<Blog></Blog>,
           loader:({params})=>fetch(`http://localhost:5173/blog/${params.id}`),
           children:[
            {
                index:true,
                element:<Content></Content>
            },
            {
               path:'author',
               element:<Author></Author> ,
               
            }
           ]
  
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>
        }
      ]
    
    },
     
  ])