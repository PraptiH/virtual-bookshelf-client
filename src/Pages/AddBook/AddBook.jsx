import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const { user } = useContext(AuthContext)
    // const [emailUser, setEmailUser] = useState(null)
    const navigate = useNavigate()

    const handleAddBook = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value
        const author = form.author.value
        const cover = form.cover.value
        const page = form.page.value
        const bookCategory = form.bookCategory.value
        const readingStatus = form.readingStatus.value
        console.log(title, author, cover, page, bookCategory, readingStatus)
        navigate('/')
    }
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Looking for a Roommate</h1>
                        <form onSubmit={handleAddBook} className="fieldset">

                            <label className="label">Book Title</label>
                            <input type="text" className="input" name='title' required placeholder="Book Title" />

                            <label className="label">Cover Photo</label>
                            <input type="url" name='cover' className="input" placeholder="Cover Photo" />

                            <label className="label">Total Page</label>
                            <input type="text" className="input" name='page' required placeholder="Total Page" />

                            <label className="label">Book Author</label>
                            <input type="text" className="input" name='author' required placeholder="Book Author" />

                            <label className="label">Book Category</label>
                            <select name='bookCategory' required className="select">
                                <option value="">Book Category</option>
                                <option>Fiction</option>
                                <option>Non-Fiction</option>
                                <option>Fantasy</option>
                                <option>Thriller</option>
                            </select>

                            <label className="label">Reading status</label>
                            <select name='readingStatus' required className="select">
                                <option value="">Reading status</option>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>Want-to-Read</option>
                            </select>

                            <div className="tooltip" data-tip="Give a small overview of this book">
                                <label className="label ">Overview</label>
                                <textarea data-tooltip-id='Overview-tooltip' name='overview' className="textarea" placeholder="Overview"></textarea>
                            </div>

                            <label className="label">Name</label>
                            {
                                user && <input type="text" defaultValue={user.displayName} className="input" name='name' readOnly />
                            }

                            <label className="label">Email</label>
                            {
                                user && <input type="email" defaultValue={user.email} className="input" name='email' readOnly />
                            }
                            <button className="btn btn-primary mt-4 font-semibold text-2xl">Post</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;