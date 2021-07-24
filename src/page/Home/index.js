import React, { useEffect, useState } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../../features/home/homeSlice';
import {Link, BrowserRouter,Switch,Route } from 'react-router-dom';
import Global from './GlobalFeed/index'
import YourFeed from './YourFeed/index'
import { TAGS } from '../../constants';

export default function Home() {


    const dispatch = useDispatch()
    const tags = useSelector(state => state.home.tags)
    const [currentTag, setCurrentTag] = useState(TAGS.YOUR_FEED)
    const [listTag, setListTag] = useState([
        {
            name: "Your feed",
            value: TAGS.YOUR_FEED
        },
        {
            name: "Global feed",
            value: TAGS.GLOBAL_FEED
        },
    ])

    useEffect(() => {
        console.log(111);
        dispatch(getTags())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setActiveTag = (value) => {
        if (currentTag === value) {
            return "active"
        }
        return null
    }

    const handleChangeTag = (value) => {
        setCurrentTag(value)
    }



    return (
        <div className='home'>
            <div className="home-header">
                <h1>Conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            <div className = 'home-body'>
                <div className = 'home-body-right'>
                    {
                        tags && tags.map((el, index) => (
                            <button key={index} className = 'porpular-tags'>
                                {el}
                            </button>
                        ))
                    }
                </div>
                <div className = 'home-body-center'>
                    <ul className="menu__list">
                        {
                            listTag.map((el, index) => (
                                <li className={ `menu__item ${setActiveTag(el.value)}` } key={index} onClick={() => handleChangeTag(el.value)}>{el.name}</li>
                            ))
                        }
                    </ul>
                    {
                        currentTag === TAGS.YOUR_FEED ? (<YourFeed />) : (<Global />)
                    }
                </div>
            </div>
            
        </div>
    )
}
