import React from 'react'
import {useHistory} from "react-router-dom" 
import { useDispatch, useSelector } from "react-redux"
import {logout} from "../../features/auth/authSlice"

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
