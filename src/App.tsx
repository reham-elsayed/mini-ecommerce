import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Store/store";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ErrorFallback from "./components/ErrorBoundry/ErrorBoundry";
import { ErrorBoundary } from 'react-error-boundary';
import Notfound from "./components/Notfound/Notfound";
const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,

      },
      {
        path: "*", // Catch-all route for non-existent paths
        element: <Notfound />,
      },
    
    ],},
]);
export default function App() {
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </ErrorBoundary>
);}