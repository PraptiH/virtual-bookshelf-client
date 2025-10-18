import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import MyBookCard from './MyBookCard';

const MyBook = () => {

    const [books, setBooks] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])

    const myBooks = books.filter(book => book.email === user?.email)

    return (
        <div className='min-h-screen py-8 px-4 bg-base-200'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>My Books</h2>

                {myBooks.length === 0 ? (
                    <div className='flex flex-col items-center justify-center min-h-[400px] bg-white rounded-lg shadow-lg p-8'>
                        <p className='text-xl md:text-2xl text-gray-600 text-center mb-4'>
                            You don't have any books in your collection yet.
                        </p>
                        <Link to='/addbook'>
                            <button className='btn btn-primary btn-lg'>Add Your First Book</button>
                        </Link>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {myBooks.map(mybook => (
                            <MyBookCard key={mybook._id} mybook={mybook} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBook;