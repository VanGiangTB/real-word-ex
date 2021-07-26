import React,{useState, useEffect} from 'react'
import { routes } from '../routes';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux"
import './style.css'
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
        <header className='navbar container'>
           <a href="/home" className='navbar-title-link'> <h3 className= 'navbar-title' >Conduit</h3> </a>
            <div className='navbar-menu'>
            <Link  to='/' className='navbar-link link' >Home</Link>
            {

                !checkLogin() ? (
                    <>
                        <Link  to='/signin' className='navbar-link link' >Sig In</Link>
                        <Link  to='/signup' className='navbar-link link' >Sign Up</Link>
                    </>
                ) : (
                    <>
                        <Link  to='/setting' className='navbar-link link' >Setting</Link>
                        <Link  to='/newpost' className='navbar-link link' >New Post</Link>
                        <Link  to='/user' className='navbar-link link' >User</Link>
                    </>
                )
            }
            </div>
        </header>
    )
}
