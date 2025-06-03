import React, { Suspense } from 'react';
import useAuth from '../../hook/useAuth';
import JobsList from './JobsList';
import useJobApi from '../../api/usJobApi';


const MyPostedJobs = () => {
    const {user} = useAuth()
    const {jobsCreatedByPromise} =useJobApi()
    return (
        <div>
            <h1 className="text-4xl">My Job List</h1>
            <Suspense>
                <JobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
