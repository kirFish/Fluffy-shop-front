import React from 'react';
import logo from './logo.svg';
import './App.css';
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
  }
]);

function App() {

  return (
    <StoreProvider store={Store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StoreProvider>
  );
}

export default App;
