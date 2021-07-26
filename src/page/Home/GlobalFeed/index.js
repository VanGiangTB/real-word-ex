import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGlobalFeed } from '../../../features/home/homeSlice'

export default function GlobalFeed() {

    const dispatch = useDispatch()
    // lấy dữ liệu trong store
    // const globalFeed = useSelector(state => state.home.globalFeed)
    
    useEffect(() =>{
        const params = {
            limit: 10,
            offset: 0,
        } 
        dispatch(getGlobalFeed(params))
    },[dispatch])
    
    return (
        <div>
            
        </div>
    )
}
