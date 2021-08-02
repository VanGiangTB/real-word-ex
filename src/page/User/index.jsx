
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
   
    return (
        <div>
            <div className='main bg-gray-100 h-52 min-w-full '>
                <div className="profile items-center text-center flex flex-col  ">
                    <img src='' className='border-gray-700 img border pt-4 mb-4' />
                    <h2>{username}</h2>
                    {/* <h2>gmail: {email}</h2> */}
                </div>  
                <div className='text-right pr-10'>
                    <Link to='/setting' className=''>
                        <button 
                            type='submit' 
                            className =
                            'edit rounded-md border text-gray-500 border-gray-500 text-xs py-2 px-5'
                            >
                                Edit Profile Settings
                        </button>
                    </Link>  
                </div>
            </div>
            <div className="click">
                <h2>body</h2>
            </div> 
        </div>
        
    )
}
