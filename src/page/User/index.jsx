
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfoRequest } from '../../features/auth/authSlice';
import './style.css';

export default function User() {
    const dispatch = useDispatch()
    const { username, email } = useSelector(state => state.auth.user)
    useEffect(() => {
        const username = localStorage.getItem("username")
        dispatch(getUserInfoRequest({id: username}))
    }, [])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
   
    return (
        <div className='main'>
            <div className="profile">
                <h2>username: {username}</h2>
                <h2>gmail: {email}</h2>
            </div>
            <div className="click">
            <Link to='/setting' className=''><button className ='edit'>Edit Profile Settings</button></Link>  
            </div>


         

            
        </div>
    )
}
