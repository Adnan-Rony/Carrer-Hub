import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs,setjob]=useState([]);


    const [datalength,setdatalength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setjob(data))
    },[])







    return (
        <div className='mt-10 container mx-auto'>
            <div className='text-center space-y-3'>
            <h1 className='text-5xl font-semibold'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-9 mx-auto container'>
                {
                    jobs.slice(0,datalength).map((job,index)=><Job key={index} job={job}></Job>)
                }

            </div>
            <div className={ datalength===jobs.length && 'hidden'}>
               <div className='flex justify-center'>
               <button onClick={()=>setdatalength(jobs.length)}
                className='btn  btn-primary  mt-10 mb-10'>See All Jobs 
                </button>
               </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;