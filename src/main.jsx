import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import Mainlayout from './components/Mainlayout.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}><Mainlayout></Mainlayout> </RouterProvider>
  </React.StrictMode>,
)
