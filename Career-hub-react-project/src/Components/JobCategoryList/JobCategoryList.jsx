import React from 'react';
import accountsImage from '../../assets/icons/accounts.png';
import calendarImage from '../../assets/icons/calendar.png';
import creativeImage from '../../assets/icons/creative.png'; 
import chipImage from '../../assets/icons/chip.png'; 


const JobCategoryList = () => {
    return (
        <div>
            <div className='text-center space-y-4'>
            <h1 className='text-center text-5xl font-semibold'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-5'>

                <div className='space-y-3 bg-blue-200 rounded-xl p-5 '>
                    <img className='' src={accountsImage} alt="" />
                    <h1 className='2xl font-medium'>Account & Finance</h1>
                    <p>300 Jobs Available</p>

                </div>
                <div className='space-y-3 bg-blue-200 rounded-xl p-5 '>
                    <img className='text-blue-300' src={calendarImage}alt="" />
                    <h1 className='2xl font-medium'>Account & Finance</h1>
                    <p>100+ Jobs Available</p>

                </div>
                <div className='space-y-3 bg-blue-200 rounded-xl p-5'>
                    <img className='text-blue-300' src={creativeImage} alt="" />
                    <h1 className='2xl font-medium'>Account & Finance</h1>
                    <p>100+ Jobs Available</p>

                </div>
                <div className='space-y-3 bg-blue-200 rounded-xl p-5'>
                    <img className='text-blue-300' src={chipImage}alt="" />
                    <h1 className='2xl font-medium'>Account & Finance</h1>
                    <p>224 Jobs Available</p>

                </div>

            </div>
        </div>
    );
};

export default JobCategoryList;