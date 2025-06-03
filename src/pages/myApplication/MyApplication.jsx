import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import Applications from './Applications';
import useAuth from '../../hook/useAuth';
import useApplicationApi from '../../api/usApplicationApi';





const MyApplication = () => {

    const {user} = useAuth()
    const {myApplicationPromise} = useApplicationApi()
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