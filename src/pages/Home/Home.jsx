import React, { Suspense } from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const Home = () => {

    const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json()) 


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