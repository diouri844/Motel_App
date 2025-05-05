import { createBrowserRouter } from "react-router-dom";

import HomePage from '@/pages/home.page.tsx'

const routerSetup = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    }
  ]
);



export default routerSetup;