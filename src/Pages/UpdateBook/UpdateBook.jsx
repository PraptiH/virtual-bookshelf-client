import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { useLoaderData } from 'react-router-dom';

const UpdateBook = () => {
    const {user} = useContext(AuthContext)
    const bookInfo = useLoaderData()
    const {title, cover, page, author, bookCategory, readingStatus, overview, name, email} = bookInfo
    const handleUpdateBook = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Update Book</h1>
                        <form onSubmit={handleUpdateBook} className="fieldset">

                            <label className="label">Book Title</label>
                            <input type="text" className="input" name='title' required defaultValue={title} placeholder="Book Title" />

                            <label className="label">Cover Photo</label>
                            <input type="url" name='cover' className="input" defaultValue={cover} placeholder="Cover Photo" />

                            <label className="label">Total Page</label>
                            <input type="number" className="input" name='page' required defaultValue={page} placeholder="Total Page" />

                            <label className="label">Book Author</label>
                            <input type="text" className="input" name='author' required defaultValue={author} placeholder="Book Author" />

                            <label className="label">Book Category</label>
                            <select defaultValue={bookCategory} name='bookCategory' required className="select">
                                <option>Book Category</option>
                                <option>Fiction</option>
                                <option>Non-Fiction</option>
                                <option>Fantasy</option>
                                <option>Thriller</option>
                            </select>

                            <label className="label">Reading status</label>
                            <select defaultValue={readingStatus} name='readingStatus' required className="select">
                                <option >Reading status</option>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>Want-to-Read</option>
                            </select>

                            <div className="tooltip" data-tip="Give a small overview of this book">
                                <label className="label ">Overview</label>
                                <textarea data-tooltip-id='Overview-tooltip' name='overview' className="textarea" defaultValue={overview} placeholder="Overview"></textarea>
                            </div>

                            <label className="label">Name</label>
                            {
                                user && <input type="text" defaultValue={name} className="input" name='name' readOnly />
                            }

                            <label className="label">Email</label>
                            {
                                user && <input type="email" defaultValue={email} className="input" name='email' readOnly />
                            }
                            <button className="btn btn-primary mt-4 font-semibold text-2xl">Update</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;