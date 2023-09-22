import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex gap-6 h-screen justify-center items-center '>
            <h2>OOOPS!</h2>
            <button className='btn btn btn-secondary'>
            <Link to="/">Go back to home...</Link>
            </button>
        </div>
    );
};

export default ErrorPage;