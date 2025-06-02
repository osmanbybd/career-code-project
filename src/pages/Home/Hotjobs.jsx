import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const Hotjobs = ({jobPromise}) => {
    const jobs = use(jobPromise)
   
    return (
        <div className='container mx-auto'>
            <h1 className='text-6xl font-bold text-center py-15'>Hot Jobs in the Day</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;