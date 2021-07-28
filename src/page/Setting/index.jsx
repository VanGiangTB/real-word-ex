import React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../features/auth/authSlice"

export default function Setting() {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        history.push("/")
    }
    return (
        <div>
            <h2>Your Setting</h2>
        
            <button onClick={handleLogout}>click here to logout</button>
        </div>
    )
}
