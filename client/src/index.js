import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import UpdatePlant from './views/UpdatePlant/UpdatePlant';
import AddPlant from './views/AddPlant/AddPlant';
import Home from "./views/Home/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add",
    element: <AddPlant/>
  },
  {
    path: "/update/:id",
    element: <UpdatePlant/>
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])

root.render((<div>
  <RouterProvider router={router}/>
</div>));
