import React, { use } from 'react';
import JobApplication from './JobApplication';

const Applications = ({myApplicationPromise}) => {
    const applications = use(myApplicationPromise)
    return (
        <div>
           <h2 className="text-3xl">Application job : {applications.length}</h2>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
        {
            applications.map((application, index) => <JobApplication key={application._id} application={application} index={index}></JobApplication>)
        }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Applications;