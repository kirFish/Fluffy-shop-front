import React from 'react';
import logo from './logo.svg';
import { Provider as StoreProvider } from "react-redux";
import { Layout } from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Store from "./Store";

import Index from './pages/Index';
import GoodDetails from './pages/GoodDetails';
import Login from './pages/Login';
import Favs from './pages/Favs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/details/:id",
    element: <GoodDetails />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/favorites",
    element: <Favs />
  }
].map(
  (el)=> ({...el, element: <Layout>{el.element}</Layout> })
));

function App() {
  return (
    <StoreProvider store={Store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
