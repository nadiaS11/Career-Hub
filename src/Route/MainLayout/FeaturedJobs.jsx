import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FeaturedCard from "./FeaturedCard";

const FeaturedJobs = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => setShowAll(!showAll);
  let slicedFeatured = "";
  if (!showAll) {
    slicedFeatured = featured.slice(0, 4);
  } else {
    slicedFeatured = featured;
  }
  return (
    <div>
      <h2 className="text-center my-6 font-bold text-lg">Featured Jobs </h2>
      <p className="text-center text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid mt-10 px-4 md:grid-cols-2 w-4/5 gap-4 mx-auto">
        {slicedFeatured?.map((job) => (
          <FeaturedCard key={job.id} job={job}></FeaturedCard>
        ))}
      </div>
      <div className="text-center my-2">
        <button
          onClick={handleShowAll}
          className="px-4 py-1 rounded btn-gradient"
        >
          {showAll ? "See less" : "Show all jobs"}
        </button>
      </div>
    </div>
  );
};

FeaturedJobs.propTypes = {};

export default FeaturedJobs;
