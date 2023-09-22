import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className=''>

        <div className=' mx-10 lg:flex flex-row justify-between items-center shadow-xl p-3'>
            <div>
                <h1 className='text-3xl font-bold'>CareerHub</h1>
            </div>
            <div>
                <ul className='lg:flex flex-row gap-5 text-2xl font-bold text-blue-500 '>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/applied">Applied Job</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                </ul>
            </div>
            <div>
                <button className='btn btn btn-secondary'>Star Applying</button>
            </div>

        </div>

       </div>
    );
};

export default Header;