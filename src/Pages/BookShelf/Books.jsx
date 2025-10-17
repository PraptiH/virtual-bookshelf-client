import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ book }) => {
    return (
        <div className='border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-110 p-5 bg-zinc-100 '>
            <div className='space-y-3'>
                <img className='w-full shadow-xl h-70 object-cover rounded-lg' src={book.cover} alt={book.cover} />
                <div className=' flex  items-center justify-between'>
                    <h3 className='text-xl font-bold text-gray-800 line-clamp-2'>{book.title}</h3>
                    <span className='badge badge-accent'>{book.bookCategory}</span>
                </div>
                <p className='text-base font-semibold text-gray-600'> {book.author}</p>


                <Link to={`/books/${book._id}`} className='block'>
                    <button className='btn btn-primary w-full'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Books;