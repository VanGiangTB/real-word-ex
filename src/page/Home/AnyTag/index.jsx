import React, { useEffect,useState} from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux'
import { getGlobalFeed } from '../../../features/home/homeSlice'
import { Pagination } from '@material-ui/lab'
import FeedItem from "../components/FeedItem"

AnyTag.propTypes = {
    tag: PropTypes.string,
};


function AnyTag({tag}) {

    const dispatch = useDispatch()
    const totalFeed = useSelector(state => state.home.totalFeed)
    const globalFeed = useSelector(state => state.home.globalFeed)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
        
    useEffect(() =>{
        const params = {
            limit: 10,
            offset: 0,
            tag: tag
        } 
        dispatch(getGlobalFeed(params))
    },[dispatch])

    useEffect(() => {
        const total = Math.ceil(totalFeed / 10)
        setTotalPage(total)
     }, [totalFeed])

     const handleChange = (event, value) => {
        setPage(value)
    }
    return (
        <div>
            {
            totalFeed ? (
                <div>
                    {
                        globalFeed.map((feed, idx) => (
                            <FeedItem key={idx} feed={feed} />
                        ))
                    }
                    <Pagination count={totalPage} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
                </div>
            ) : (<div>No articles are here... yet.</div>)
         }
        </div>
    );
}

export default AnyTag;