import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './style.css';
export default function NavBar() {

    const useInfo = useSelector(state => state.auth.userInfo)

    const checkLogin = () => {
        const token = localStorage.getItem("jwt");
        if (!token) return false;
        return true;
      };

    useEffect(() => {
        checkLogin()
    }, [useInfo])


    return (
        <header className='navbar container mx-auto py-2'>
           <a href="/home" className='text-2xl text-green-600 font-bold'> <h3 className= 'navbar-title' >conduit</h3> </a>
            <div className='navbar-menu'>
            <Link  to='/' className='navbar-link' >Home</Link>
            {

                !checkLogin() ? (
                    <>
                        <Link  to='/signin' className='navbar-link' >Sig In</Link>
                        <Link  to='/signup' className='navbar-link' >Sign Up</Link>
                    </>
                ) : (
                    <>
                        <Link  to='/newpost' className='navbar-link' >New Post</Link>
                        <Link  to='/setting' className='navbar-link' >Setting</Link>
                        <Link  to='/user' className='navbar-link' >User</Link>
                    </>
                )
            }
            </div>
        </header>
    )
}
