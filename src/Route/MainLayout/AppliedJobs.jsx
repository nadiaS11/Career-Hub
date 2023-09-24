import React, { useState } from "react";
import PropTypes from "prop-types";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const appliedJobs = JSON.parse(localStorage.getItem("applied"));
  const [displayJobs, setDisplayJobs] = useState(appliedJobs || []);
  console.log(displayJobs);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    }
  };

  return (
    <div>
      {displayJobs.length > 0 && (
        <div className="text-right pr-4  pt-4">
          <details className="dropdown  rounded mb-32">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1]   rounded-box w-52">
              <li onClick={() => handleJobFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobFilter("onsite")}>
                <a>Onsite</a>
              </li>
              <li onClick={() => handleJobFilter("remote")}>
                <a>Remote</a>
              </li>
            </ul>
          </details>
        </div>
      )}

      <div className="py-4 grid gap-5 w-2/3 mx-auto">
        {/* {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))} */}
        {displayJobs.length === 0 ? (
          <p className="text-center font-bold text-2xl pt-52">
            No jobs applied.
          </p>
        ) : (
          displayJobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))
        )}
      </div>
    </div>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
