import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_type,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    salary,
  } = job;

  return (
    <div>
      <div className="flex flex-col rounded py-2 px-2 md:flex-row justify-center items-center bg-base-100  border border-solid border-gray-500">
        <figure className="w-2/5">
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-2 mb-3">
            <p className="border-gradient px-2 py-1  font-medium">
              {remote_or_onsite}
            </p>
            <p className="border-gradient  px-2 py-1 font-medium">{job_type}</p>
          </div>
          <p className="mb-3 font-semibold text-xl text-[#757575] mx-auto">
            <small className="mr-4">{location}</small>
            <small>Salary: {salary} </small>
          </p>
        </div>
        <div className="card-actions px-2">
          <NavLink
            to={`/job-details/${id}`}
            className=" rounded btn-gradient text-center py-1 px-2  "
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {};

export default AppliedJob;
