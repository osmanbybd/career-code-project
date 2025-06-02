import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    const {title , company,_id} = job;
    const location = useLocation()
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl'> {title}</h1>
            <h3>{company}</h3>
           <Link to={`/jobApply/${_id}`} state={location.pathname}> <button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;