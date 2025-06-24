import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import routerSetup from "@/Providers/router.provider"

import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      
        <RouterProvider router={routerSetup} />
        <App />
  </React.StrictMode>
)
