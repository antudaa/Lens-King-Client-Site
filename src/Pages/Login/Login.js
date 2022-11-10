import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import DynamicTitle from '../../Hooks/DynamicTitle';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { login, signInWithGoogle, githubSignUp } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    DynamicTitle('Login')

    const gitProvider = new GithubAuthProvider();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(userCredential => {
                const user = userCredential.user;

                toast(`User logged In Successfully ${email}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

                // const currentUser = {
                //     uid : user.uid
                // }

                // console.log(currentUser);

                // Getting jwt token
                // fetch(`https://lens-king-server.vercel.app/jwt`, {
                //     method : 'POST', 
                //     headers : {
                //         'content-type' : 'application/json'
                //     },
                //     body : JSON.stringify(currentUser)
                // })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    
                })

                // Navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                console.log(error.message, error.code);
            })
    };


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
            <h1 className='text-orange-500 text-5xl font-semibold text-center my-10'>Login</h1>
            <div className="">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/login" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-cyan-400 text-black hover:text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div>
                            <p className='text-center'>Or Continue With</p>
                            <div className='flex justify-evenly align-center mx-auto my-4'>
                                <FaGoogle onClick={handleGoogleSignIn} className='cursor-pointer text-cyan-300' style={{ width: "30px", height: "30px" }}></FaGoogle>
                                <FaGithub onClick={handleGithubSignUp} className='cursor-pointer text-white' style={{ width: "30px", height: "30px" }}></FaGithub>
                                <FaFacebook className='cursor-pointer text-sky-500' style={{ width: "30px", height: "30px" }}></FaFacebook>
                            </div>
                        </div>
                        <p className='text-center'>New to Genius Car ? <Link className='text-orange-500 font-semibold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;