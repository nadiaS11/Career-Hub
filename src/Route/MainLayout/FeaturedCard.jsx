import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const FeaturedCard = ({ job }) => {
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
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src={logo} className="w-3/12 h-10 rounded" alt="" />

        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  ">
          {job_title}
        </h5>

        <p className="mb-3 font-normal text-[#757575] dark:text-gray-400">
          {company_name}
        </p>
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

        <NavLink
          to={`/job-details/${id}`}
          className=" rounded btn-gradient text-center py-1 px-2  "
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  job: PropTypes.object,
};

export default FeaturedCard;
