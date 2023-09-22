import React from 'react';
import image from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex lg:justify-between flex-row items-center'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>One Step Closer To Your <br />
                         <span className='text-blue-500'>Dream Job</span></h1>
                         <p>Explore thousands of job opportunities with all <br /> the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                         <button className='btn btn btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='w-[816 px] h-[774 px]' src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;