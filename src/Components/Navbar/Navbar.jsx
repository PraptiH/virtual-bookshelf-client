import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { MdClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className='mt-6 lg:mt-10 w-11/12 mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 lg:gap-5'>
                    <button
                        onClick={toggleMenu}
                        className='lg:hidden text-2xl p-2 hover:bg-base-200 rounded-lg transition-colors'
                        aria-label='Toggle menu'
                    >
                        {menuOpen ? <MdClose /> : <RxHamburgerMenu />}
                    </button>
                    <img className='rounded-full w-15 h-15 lg:w-30 lg:h-30' src={logo} alt="Digital Boipoka Logo" />
                    <h3 className='font-bold text-lg sm:text-xl lg:text-3xl'>Digital Boipoka</h3>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-5 items-center'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-base-content hover:text-primary transition-colors'}>
                        Home
                    </NavLink>
                    <NavLink to="/bookshelf" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-base-content hover:text-primary transition-colors'}>
                        Bookshelf
                    </NavLink>
                </div>

                {/* Auth Button */}
                <div>
                    {user ? (
                        <button
                            onClick={logOut}
                            className='btn btn-primary btn-sm lg:btn-md font-medium'
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link to='/signin'>
                            <button className='btn btn-primary btn-sm lg:btn-md font-medium'>
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='lg:hidden mt-4 pb-4 border-t w-50 border-base-300 bg-base-10 shadow-2xl rounded-lg'>
                    <div className='flex flex-col space-y-3 pt-4 px-4'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-base-content hover:text-primary transition-colors'}>
                            Home
                        </NavLink>
                        <NavLink to="/bookshelf" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-base-content hover:text-primary transition-colors'}>
                            Bookshelf
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;