import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider as StoreProvider } from "react-redux";
import { Layout } from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Index } from './pages/Index';

import Store from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
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
