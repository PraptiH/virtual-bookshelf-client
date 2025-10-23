import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    console.log(books)

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
            .catch(err => {
                console.error('Failed to fetch books', err);
            });
    }, []);

    const myBooks = books.filter(book => book.email === user?.email);

    const mapBookCategory = new Map()
    myBooks.forEach(book => {
        const count = mapBookCategory.get(book.bookCategory) || 0
        mapBookCategory.set(book.bookCategory, count + 1)
    })
    const data = []
    for (const [name, value] of mapBookCategory) {
        data.push({ name, value })
    }

    const colors = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    return (
        <div className='mt-10 w-11/12 mx-auto '>
            <div>
                <div className='flex lg:flex-row sm:flex-col items-center  gap-10 sm:gap-5  bg-zinc-100 p-5 rounded-2xl shadow-2xl lg:w-1/2 sm:w-full h-50'>
                    <img className='rounded-full w-20 h-20' src={user.photoURL} alt='' />
                    <div className='text-center '>
                        <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl'>{user?.name || user?.displayName}</h2>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl break-all'>{user?.email}</p>
                    </div>
                </div>
            </div>

            <div className='mt-6 md:mt-10'>
                <h2 className='font-medium text-2xl sm:text-3xl mb-4'>Total Books {myBooks.length}</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6'>
                    {
                        data.map((category, index) => (
                            <p key={index} className='font-sans text-lg sm:text-xl md:text-2xl bg-zinc-100 p-3 rounded-lg shadow'>{category.name} : {category.value}</p>
                        ))
                    }
                </div>
                <div className='my-5  mx-auto flex items-center justify-center bg shadow-2xl px-10 rounded-4xl w-full'>
                    <PieChart style={{width : 600, height:400} }  >
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                        >
                            {data.map((entry, i) => (
                                <Cell key={i} fill={colors[i % colors.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default Profile;