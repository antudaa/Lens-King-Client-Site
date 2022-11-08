import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../images/favicon.png';
import { FaUser } from "react-icons/fa";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Sign Out Successful.")
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {/* <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li> */}
                        {
                        user?.uid ?

                            <>
                                <li><li><Link onClick={handleLogOut}>Log Out</Link></li></li>
                                <li><Link>{user?.displayName}</Link></li>

                            </>
                            :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                            </>
                    }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='w-10 h-10 mr-6' src={logo} alt="" /> LENS KING</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {/* <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li> */}
                    {
                        user?.uid ?

                            <>
                                <li><li><Link onClick={handleLogOut}>Log Out</Link></li></li>
                                <li><Link>{user?.displayName}</Link></li>

                            </>
                            :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full">
                    {
                        user?.photoURL ?
                            <img
                                className='mx-3'
                                title={user?.displayName}
                                style={{ height: '36px', borderRadius: '50%' }}
                                src={user?.photoURL}
                                alt=''>
                            </img>
                            :
                            <FaUser className='mx-3' />
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;