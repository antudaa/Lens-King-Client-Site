import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import DynamicTitle from '../../Hooks/DynamicTitle';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const { createUser, signInWithGoogle, githubSignUp } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(`Name : ${name} , Email : ${email}, Password : ${password}`);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast(`User logged In Successfully ${email}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                form.reset();
            })
            .catch(error => console.log(error.message));

    }

    DynamicTitle('Sign Up');


    const handleGithubSignUp = () => {
        githubSignUp(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("Error ", error);
            })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            })
    }


    return (
        <div className='my-10'>
            <h1 className='text-white text-5xl font-semibold text-center my-4'>Sign Up</h1>
            <div className="">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-cyan-400 text-black hover:text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <p className='text-center'>Or Sign Up With</p>
                            <div className='flex justify-evenly align-center mx-auto my-4'>
                                <FaGoogle onClick={handleGoogleSignIn} className='cursor-pointer text-cyan-300' style={{ width: "30px", height: "30px" }}></FaGoogle>
                                <FaGithub onClick={handleGithubSignUp} className='cursor-pointer text-white' style={{ width: "30px", height: "30px" }}></FaGithub>
                                <FaFacebook className='cursor-pointer text-sky-500' style={{ width: "30px", height: "30px" }}></FaFacebook>
                            </div>
                        </div>
                        <p className='text-center'>Already have an Account ? <Link className='text-orange-500 font-semibold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;