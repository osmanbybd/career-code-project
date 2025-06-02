import React, { Suspense } from 'react';
import useAuth from '../../hook/useAuth';
import JobsList from './JobsList';
import { jobsCreatedByPromise } from '../../api/postedApi';

const MyPostedJobs = () => {
    const {user} = useAuth()
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