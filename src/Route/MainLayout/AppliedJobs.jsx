import React from "react";
import PropTypes from "prop-types";
import AppliedJob from "./AppliedJob";

const AppliedJobs = (props) => {
  const appliedJobs = JSON.parse(localStorage.getItem("applied"));
  console.log(appliedJobs);
  return (
    <div>
      applied job here
      <div className="py-5 grid gap-5 w-2/3 mx-auto">
        {appliedJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
