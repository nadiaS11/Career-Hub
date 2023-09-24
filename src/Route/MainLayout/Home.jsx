import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import JobsList from "./JobsList";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <div className="bg-indigo-500 h-[60vh] ">
        <Outlet></Outlet>
      </div>
      <JobsList></JobsList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

Home.propTypes = {};

export default Home;
