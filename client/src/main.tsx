import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import routerSetup from "@/Providers/router.provider"
import { AxiosProvider } from "@/context/axios.context.tsx"

import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AxiosProvider>
      
        <RouterProvider router={routerSetup} />
        <App />
    </AxiosProvider>
  </React.StrictMode>
)
