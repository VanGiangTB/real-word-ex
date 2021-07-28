import { Pagination } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getYourFeed } from '../../../features/home/homeSlice'
import FeedItem from "../components/FeedItem"


export default function YourFeed() {

    const dispatch = useDispatch()
    const yourFeed = useSelector(state => state.home.yourFeed)
    const totalFeed = useSelector(state => state.home.totalFeed)
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)

    // useEffect(() => {
    //     const params ={
    //         limit: 10,
    //         offset: 0
    //     }
    //    dispatch(getYourFeed(params))
    // }, [dispatch])

    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        console.log("page");
        const params = {
            limit: 10,
            offset: (page - 1) * 10,
        } 
        dispatch(getYourFeed(params))
    }, [page, dispatch])

    return (
        <div className = 'message'>
         {
            totalFeed ? (
                <div>
                    {
                       yourFeed.length > 0 && yourFeed.map((feed, idx) => (
                            <FeedItem key={idx} feed={feed} />
                        ))
                    }
                    <Pagination count={totalPage} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
                </div>
            ) : (<div >No articles are here... yet.</div>)
         }
        </div>
    )
}
