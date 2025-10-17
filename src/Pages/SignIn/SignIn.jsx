import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {

    const { signInUser, createUser2 } = useContext(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        createUser2(provider)
            .then(result => {
                const user = result.user
                const userProfile = {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    creationTime: user?.metadata.creationTime,
                    lastSignInTime: user?.metadata.lastSignInTime
                };
                fetch(`http://localhost:3000/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                navigate('/')

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content card bg-base-100  shadow-2xl w-full max-w-sm shrink-0 flex-col ">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary text-base-content mt-4">Login</button>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary text-base-content">Sign In with google</button>
                            <p className='font-medium text-sm flex justify-between'>Do not have an account? <Link className='text-blue-600' to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;