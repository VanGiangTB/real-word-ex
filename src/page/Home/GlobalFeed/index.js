import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getYourFeed } from '../../../features/home/homeSlice'

export default function GlobalFeed() {

    const dispatch = useDispatch()
    // lấy dữ liệu trong store
    const yourFeed = useSelector(state => state.home.yourfeed)
    
    useEffect(() =>{
        dispatch(getYourFeed)
    },[])
    
    return (
        <div>
            
        </div>
    )
}
