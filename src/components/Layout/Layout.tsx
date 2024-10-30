import React , { FC } from    "react";

import { Outlet } from "react-router-dom";
const Layout: FC = () => (
  <>
    <Outlet />
  </>
);

export default Layout;
