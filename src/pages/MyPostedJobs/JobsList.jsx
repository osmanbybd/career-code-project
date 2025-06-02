import React, { use } from "react";
import { Link } from "react-router";

const JobsList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  console.log(jobs)
  return (
    <div>
      <h1 className="text-4xl"> jobs created by You : {jobs.length}</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Deadline</th>
              <th>VewApplication</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map((job, index) =>     <tr key={job._id}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.deadline}</td>
              <td><Link className="btn" to={`/application/${job._id}`}>Vew Application</Link></td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
