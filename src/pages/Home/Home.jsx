import React, { Suspense } from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const Home = () => {

    const jobPromise = fetch('https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/jobs').then(res => res.json()) 


    return (
        <div>
            <Banner></Banner>
          <Suspense fallback='loading'>
              <Hotjobs jobPromise={jobPromise}></Hotjobs>
          </Suspense>
        </div>
    );
};

export default Home;