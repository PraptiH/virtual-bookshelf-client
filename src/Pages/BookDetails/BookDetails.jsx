import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { FaHeart } from "react-icons/fa";

const BookDetails = () => {
    const book = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, cover, title, bookCategory, author, overview, page, readingStatus, name, email } = book
    const [vote, setVote] = useState(false)
    const [count, setCount] = useState(book.upvote || 0)

    const handleUpVote = () => {
        if (user.email === email) {
            alert("can not vote")
            return
        }

        setVote(true)
        const newCount = count+1
        setCount(newCount)


        fetch(`http://localhost:3000/books/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify ({upvote : newCount})
        })
        .then(res=>res.json())
        .then(()=>{
            console.log("vote successfully")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='min-h-screen py-8 px-4 max-w-6xl mx-auto'>
            <div className='mb-10'>
                <h2 className='font-semibold text-4xl'>Book Added By</h2>
                <div className='mt-2'>
                    <h3 className='font-medium text-lg'>{name}</h3>
                    <p className='font-medium text-lg'>Email : {email}</p>
                </div>
            </div>
            <div className=' bg-zinc-100 rounded-2xl shadow-xl overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-8 p-6 md:p-10'>
                    <div className='flex justify-center items-start'>
                        <div className='w-full max-w-md'>
                            <img
                                className='w-full h-auto shadow-2xl rounded-lg object-cover'
                                src={cover}
                                alt={cover}
                            />
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='space-y-3'>
                            <div className='flex flex-wrap items-center justify-between '>
                                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
                                    {title}
                                </h1>
                                <span className='badge badge-accent badge-lg px-4 py-3 text-sm font-semibold'>
                                    {bookCategory}
                                </span>
                            </div>

                            <p className='text-2xl font-semibold text-gray-600'>
                                {author}
                            </p>
                        </div>

                        <div className='space-y-2 '>
                            <p className='text-xl text-gray-600 font-medium'>
                                {overview}
                            </p>
                            <p className='text-lg font-semibold border-accent badge px-3 py-4'>{readingStatus}</p>
                        </div>

                        <div className='flex items-center justify-between '>
                            <button onClick={handleUpVote} className='text-2xl flex items-center gap-2'>{count} <FaHeart /> </button>
                            <p className='text-2xl font-semibold t '>{page}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;