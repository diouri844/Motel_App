import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import routerSetup from "@/Providers/router.provider"
import { Provider } from 'react-redux';
import CrmStore from '@/stores/CRM/crm.store.ts'
import { AxiosProvider } from "@/context/axios.context.tsx"

import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AxiosProvider>
      <Provider store={CrmStore}>
        <RouterProvider router={routerSetup} />
        <App />
      </Provider>
    </AxiosProvider>
  </React.StrictMode>
)
