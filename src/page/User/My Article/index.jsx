import { Pagination } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMyArticle} from '../../../features/auth/authSlice'
import FeedItem from "../../Home/components/FeedItem"


export default function MyArticle() {

    const dispatch = useDispatch()
    const myArticle = useSelector(state => state.auth.myArticle)
    const totalFeed = useSelector(state => state.auth.totalFeed)
    const author = useSelector(state => state.auth.user)
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
        const params = {
            author:`${author.username}`,
            limit: 5,
            offset: (page - 1) * 10,
        } 
        dispatch(getMyArticle(params))
    }, [page, dispatch])

    return (
        <div>
        {
           myArticle && myArticle.length > 0 ? (
               myArticle && myArticle.length > 0 &&  myArticle.map((feed, idx) => (
                   <FeedItem key={idx} feed={feed} />
               ))
           ) : (<div >No articles are here... yet.</div>)
        }
       </div>
    )
}
