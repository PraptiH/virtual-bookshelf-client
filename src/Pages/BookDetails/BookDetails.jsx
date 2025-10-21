import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { FaHeart } from "react-icons/fa";
import Swal from 'sweetalert2';

const BookDetails = () => {
    const book = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, cover, title, bookCategory, author, overview, page, readingStatus, name, email } = book
    const [vote, setVote] = useState(false)
    const [count, setCount] = useState(book.upvote || 0)
    const [review, setReview] = useState('')
    const [reviews, setReviews] = useState([]);

    const handleUpVote = () => {
        if (user.email === email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can not like your added book",
            });
            return
        }

        setVote(true)
        const newCount = count + 1
        setCount(newCount)


        fetch(`http://localhost:3000/books/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ upvote: newCount })
        })
            .then(res => res.json())
            .then(() => {
                console.log("vote successfully")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleReview = () => {
        
        const newReview = {
            bookId: _id,
            bookTitle: title,
            reviewText: review,
            reviewerName: user.displayName || user.name,
            reviewerEmail: user.email,
            reviewerPhoto: user.photoURL,
            created_at: new Date()
        }

        fetch(`http://localhost:3000/books/${_id}/review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Review added successfully!",
                    timer: 1500,
                    showConfirmButton: false
                });
                setReviews([newReview, ...reviews])
                setReview("")
            })
            .catch(err => {
                console.log("Review Error", err)
            })

    }

    useEffect(() => {
        fetch(`http://localhost:3000/books/${_id}/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => {
                console.log(err)
            })
    }, [_id])

    const userHasReviewed = reviews.find(review => review.reviewerEmail === user.email)

    const handleDelete = (reviewId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/books/${_id}/review/${reviewId}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingReview = reviews.filter(review => review._id !== reviewId)
                            setReviews(remainingReview)
                        }
                    })
            }
        });
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

            {/* Review Section */}

            <div className='mt-10 bg-base-200 rounded-4xl p-5 shadow-xl'>
                <h2 className='font-semibold text-xl'>Check reviews about this book.</h2>
                {
                    reviews.length > 0 && reviews.map((review, i) => (
                        <div key={i} className="p-4 rounded-lg bg-zinc-50 shadow-2xl my-3">
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={review.reviewerPhoto}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold">{review.reviewerName}</h4>
                                    <p className="text-sm text-gray-500">
                                        {new Date(review.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-700">{review.reviewText}</p>
                                {
                                    user.email === review.reviewerEmail && (
                                        <div className='flex mt-2 gap-5'>
                                            <button className='btn btn-primary btn-outline text-black'>Edit</button>
                                            <button onClick={() => handleDelete(review._id)} className='btn btn-error btn-outline'>Delete</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    ))
                }

                {!userHasReviewed && user.email !== email && (
                    <div className='mt-8  rounded-xl bg-white p-6 shadow-lg'>
                        <h2 className='text-2xl font-semibold mb-4'>Leave a Review</h2>
                        <div className='flex items-center gap-4 mb-3'>
                            <img className='w-12 h-12 rounded-full border' src={user.photoURL} alt={user.displayName} />
                            <p className='font-medium'>{user.displayName || user.name}</p>
                        </div>

                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className='textarea textarea-bordered w-full'
                            placeholder='Write your review here...'
                        ></textarea>
                        <button onClick={handleReview} className='btn btn-primary mt-4'>Submit</button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default BookDetails;