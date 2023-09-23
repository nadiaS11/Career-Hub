import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      this is the main layout
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
