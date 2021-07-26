import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getYourFeed} from '../../../features/home/homeSlice'
import FeedItem from "../components/FeedItem"

export default function YourFeed() {

    const dispatch = useDispatch()
    const yourFeed = useSelector(state => state.home.yourFeed)
    const totalFeed = useSelector(state => state.home.totalFeed)

    console.log(yourFeed);

    useEffect(() => {
        const params ={
            limit: 10,
            offset: 0
        }
       dispatch(getYourFeed(params))
    }, [dispatch])

    return (
        <div>
         {
            totalFeed ? (
                <div>
                    <FeedItem />
                </div>
            ) : (<div>No articles are here... yet.</div>)
         }
        </div>
    )
}
