import { Pagination } from '@material-ui/lab'
import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalFeed } from '../../../features/home/homeSlice'
import FeedItem from "../components/FeedItem"

export default function GlobalFeed() {

    const dispatch = useDispatch()
    // lấy dữ liệu trong store
    const globalFeed = useSelector(state => state.home.globalFeed)
    const totalFeed = useSelector(state => state.home.totalFeed)
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    
    useEffect(() =>{
        const params = {
            limit: 10,
            offset: 0,
        } 
        dispatch(getGlobalFeed(params))
    },[dispatch])

    useEffect(() => {
       const total = Math.ceil(totalFeed / 10)
       setTotalPage(total)
    }, [totalFeed])

    useEffect(() => {
        const params = {
            limit: 10,
            offset: (page - 1) * 10,
        } 
        dispatch(getGlobalFeed(params))
    }, [page])

    const handleChange = (event, value) => {
        setPage(value)
    }
    
    return (
        <div>
         {
            totalFeed ? (
                <div>
                    {
                      globalFeed.length > 0 &&  globalFeed.map((feed, idx) => (
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
