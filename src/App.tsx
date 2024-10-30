import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Store/store";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },],},
]);
export default function App() {
  return(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>);
}