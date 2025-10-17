import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Books from './Books';

const BookShelf = () => {
    const books = useLoaderData()
    return (
        <div className='min-h-screen py-10'>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-8'>Virtual Bookshelf</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6'>
                    {
                        books.map(book => <Books key={book._id} book={book} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookShelf;