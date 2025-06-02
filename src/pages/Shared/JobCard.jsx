import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {title, location ,_id, description,company_logo,company,requirements,salaryRange} = job
    return (
      <div className="card bg-base-100 shadow-sm">
        <div className='flex items-center gap-3'>
              <figure>
    <img
      src={company_logo}
      className='w-16'
      alt="Shoes" />
  </figure>
  <div>
    <h1>{company}</h1>
    <p className='flex items-center gap-2'><FaMapMarkerAlt />{location}</p>
  </div>
        </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions">
        {/* {
            requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
        }
       */}
      
    </div>
    <div>
        <h1 className='text-xl'>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</h1>
    </div>
     <div className="card-actions justify-end">
      <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Job Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;