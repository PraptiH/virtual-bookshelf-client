import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {

    const { createUser, createUser2 } = useContext(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        createUser(email, password)
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignUp = () => {
        createUser2(provider)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass)
        if (pass.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (!/[A-Z]/.test(pass)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(pass)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        else {
            setError("");
            return;
        }

    }

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" className="input" name='name' placeholder="Name" />

                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" name='photoURL' placeholder="Photo URL" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' value={password} onChange={handlePasswordChange} placeholder="Password" />
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                            <button className="btn btn-primary text-base-content mt-4">Sign Up</button>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignUp} className="btn btn-primary text-base-content">Sign Up with Google</button>
                            <p className='font-medium text-sm flex justify-between'>Already have an account? <Link className='text-blue-600' to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;