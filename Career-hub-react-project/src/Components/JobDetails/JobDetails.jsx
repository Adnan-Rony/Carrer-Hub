import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savjob } from '../Utility/localStrorage';


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);



    const handleAppyJob =()=>{
        savjob(id)
        toast("You have applied successfully");
    }

    return (
        <div className='container mx-auto mt-10 mb-10'>
           <div className='mb-5'>
           <h2 className='text-4xl font-bold text-center'>Job Details</h2>
           </div>
            <div className='grid gap-4 grid-cols-4'>
                <div className='border col-span-3 p-5 rounded-xl'>
                    <h1><span className='text-xl font-semibold'>Job Description:</span> {job.job_description}</h1>

                    <h1><span className='text-xl font-semibold'>Job Responsibility:</span>
                       {job.job_responsibility}</h1>
                        <h1 className='text-xl font-semibold'>Job Responsibility:</h1>
                        <p>
                       {job.educational_requirements}
                        </p>
                        <h1 className='text-xl font-semibold'>Experiences:</h1>
                        <h1>{job.experiences}</h1>

                </div>
                <div className='border space-y-4 p-3 rounded-xl bg-blue-200'>
                    <h1 className='text-xl font-semibold'>Job Details </h1>
                    <hr className='' />
                    <div>
                        <h1><span className='text-xl font-semibold'>Salary :</span>{job.salary} </h1>
                        <h1><span className='text-xl font-semibold'>Job Title  :</span> {job.job_title}</h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Contact Information</h1>
                    </div>
                    <hr />
                    <div>
                        <h1><span className='text-xl font-semibold'>Phone :</span>{job.contact_information.phone}</h1>
                        <h1><span className='text-xl font-semibold'>email :</span>{job.contact_information.email}</h1>
                        <h1><span className='text-xl font-semibold'>Address :</span>{job.contact_information.address}</h1>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleAppyJob} className='btn btn btn-primary'>Apply Now</button>
                    </div>
                </div>

            </div>







            <ToastContainer />
        </div>
    );
};

export default JobDetails;