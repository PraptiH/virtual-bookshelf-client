import React from 'react';
import { Link } from 'react-router-dom';

const MyBookCard = ({ mybook }) => {
    return (
        <div className='bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 '>
            <div className='p-4 space-y-3'>
                <div className='w-full h-48 md:h-56 overflow-hidden rounded-lg bg-gray-100'>
                    <img
                        className='w-full h-full object-cover'
                        src={mybook?.cover}
                        alt={mybook?.title}
                    />
                </div>

                <div className='space-y-2'>
                    <div className='flex items-center justify-between gap-2'>
                        <h3 className='text-lg md:text-xl font-bold text-gray-800'>
                            {mybook?.title}
                        </h3>
                        <span className='badge badge-accent'>
                            {mybook?.bookCategory}
                        </span>
                    </div>

                    <p className='text-base font-semibold text-gray-600'>
                        by {mybook?.author}
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-2 pt-2'>
                    <Link to={`/update/${mybook._id}`} className='flex-1'>
                        <button className='btn btn-primary btn-sm md:btn-md w-full'>
                            Update
                        </button>
                    </Link>
                    <button className='btn btn-outline btn-error flex-1'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyBookCard;