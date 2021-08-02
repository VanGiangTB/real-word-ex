import React,{ useState,useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../features/auth/authSlice"
import './style.css'
import {getUserInfoRequest} from '../../features/auth/authSlice'

export default function Setting() {

    const history = useHistory()
    const dispatch = useDispatch()
    const { username, email, password } = useSelector(state => state.auth.user)
    useEffect(() => {
        const username = localStorage.getItem("username")
        dispatch(getUserInfoRequest({id: username}))
    }, [])


    const handleLogout = () => {
        dispatch(logout())
        history.push("/")
    }

    const handleUpdate = () => {
        
    }
    return (
        <div className="flex justify-center items-center">       
           <form className="w-1/2 mt-6">
           <h2 className='text-center mb-3 text-4xl'>Your Feed</h2> 
            <input
                type="text"
                className="input-field"
                placeholder="URL of profile picture"
            />
            <input
                type="text"
                className="input-field"
                placeholder="Username"
                value={username}
            />
             <textarea
                rows="6"
                type="text"
                placeholder="Short bio about you "
                className="input-field"
                />
            <input
                type="text"
                className="input-field"
                placeholder="gmail"
                value={email}
            />
             <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
            />
            <div className='text-right  '>
                <button 
                    onClick={handleUpdate} 
                    type="submit"
                    className="rounded-md border text-white border-secondary bg-secondary hover:bg-secondary-hover hover:border-secondary-hover text-lg py-2 px-5">
                    Update Setting
                </button>
            </div>
            <div className=' border-b-2 mt-5 '>

            </div>
              
            <div className='mt-6'>
            <button type="submit" 
                onClick={handleLogout} 
                className = 'border-primary border text-primary rounded-md text-lg py-2 px-5 hover:bg-primary-hover hover:text-white '>
                or click here to logout
            </button>
            </div>
           
            </form>
            
          
        </div>
    )
}
