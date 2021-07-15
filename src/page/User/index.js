import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoRequest } from '../../features/auth/authSlice'

export default function User() {
    const dispatch = useDispatch()
    const { username, email } = useSelector(state => state.auth.user)
    useEffect(() => {
        const username = localStorage.getItem("username")
        dispatch(getUserInfoRequest({id: username}))
    }, [])
   
    return (
        <div>
            <h2>{username}</h2>
            <h2>{email}</h2>
        </div>
    )
}
