import React from 'react'
import { routes } from '../routes';
import {Link} from 'react-router-dom';
import './style.css'
export default function NavBar() {
    return (
        <header className='navbar container'>
           <a href="/home" className='navbar-title-link'> <h3 className= 'navbar-title' >Conduit</h3> </a>
            <div className='navbar-menu'>
                {
                    routes.map((route,index) => (
                        <Link key={index} to={route.path} className='navbar-link link' >{route.name}</Link>
                        ))
                }
            </div>
        </header>
    )
}
