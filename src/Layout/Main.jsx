import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Home from "../Pages/Home";

const Main = () => {
    return <div>
        <Header></Header>
        <Home></Home>
        <Outlet></Outlet>
  </div>;
};

export default Main;
