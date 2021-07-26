import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getYourFeed} from '../../../features/home/homeSlice'

export default function YourFeed() {

    const dispatch = useDispatch()
    // const yourFeed = useSelector

    useEffect(() => {
        const params ={
            limit: 10,
            offset: 0
        }
       dispatch(getYourFeed(params))
    }, [dispatch])

    return (
        <div>
         
        </div>
    )
}
