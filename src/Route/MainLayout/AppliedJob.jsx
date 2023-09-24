import PropTypes from "prop-types";

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
      <div className="card rounded py-2 px-2 md:flex-row justify-center items-center bg-base-100  border border-solid border-gray-500">
        <figure className="w-2/5">
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>{company_name}</p>
        </div>
        <div className="card-actions px-2">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {};

export default AppliedJob;
