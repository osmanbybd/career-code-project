import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import Applications from './Applications';
import useAuth from '../../hook/useAuth';
import { myApplicationPromise } from '../../api/applicationApi';




const MyApplication = () => {

    const {user} = useAuth()
    // console.log(user.accessToken)


    return (
        <div>
            <ApplicationState></ApplicationState>
           <Suspense fallback={'loading .......'}>
             <Applications 
             myApplicationPromise={myApplicationPromise(user.email, user.accessToken)}
             ></Applications>
           </Suspense>
        </div>
    );
};

export default MyApplication;