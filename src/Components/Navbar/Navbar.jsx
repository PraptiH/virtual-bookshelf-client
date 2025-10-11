import React from 'react';
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='mt-10 w-11/12 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <img className='rounded-full w-30' src={logo} alt="" />
                <h3 className='font-bold text-3xl '>Digital Boipoka</h3>
            </div>
            <div className='flex gap-5'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-base-content hover:text-primary'}>Home</NavLink>
                <NavLink to="/bookshelf" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>Bookshelf</NavLink>
            </div>

            <div>
                <button className='btn btn-primary font-medium text-lg p-5'><Link to='/signin'>Log In</Link></button>
            </div>
        </div>
    );
};

export default Navbar;