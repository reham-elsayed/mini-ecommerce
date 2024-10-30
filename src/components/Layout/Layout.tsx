import React , { FC } from    "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Layout: FC = () => (
  <>
  <Navbar/>
    <Outlet />
  
  </>
);

export default Layout;
