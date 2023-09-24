import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    job_type,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    salary,
    experiences,
    educational_requirements,
  } = job;

  const handleApply = () => {
    const addToAppliedJob = [];
    const applied = JSON.parse(localStorage.getItem("applied"));
    if (!applied) {
      addToAppliedJob.push(job);
      localStorage.setItem("applied", JSON.stringify(addToAppliedJob));
    } else {
      const ifExists = applied.find((item) => item.id === idInt);
      if (!ifExists) {
        addToAppliedJob.push(...applied, job);
        localStorage.setItem("applied", JSON.stringify(addToAppliedJob));
      } else {
        alert("You have already applied to this job.");
      }
    }

    console.log(applied);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#c8cff3dc] from-0% font-bold  to-[#cec0f1] to-100%  flex items-center justify-center h-[60vh] ">
        <h1>job details of {id} </h1>
      </div>
      <div className="md:grid gap-4 md:grid-cols-4 mx-auto w-4/5 pt-10 h-screen">
        <div className="md:col-span-3  bg-red-300 p-4 space-y-4">
          <p>{job_description} </p>
          <p>{job_responsibility} </p>
        </div>
        <div className="md:col-span-1 border border-solid p-4 border-gray-400 h-80">
          <h2>Job details</h2>
          <NavLink
            onClick={handleApply}
            to={`/applied`}
            className={`btn btn-primary`}
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
