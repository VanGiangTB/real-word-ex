import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAGS } from '../../constants';
import { getTags } from '../../features/home/homeSlice';
import AnyTag from './AnyTag';
import Global from './GlobalFeed';
import './style.css';
import YourFeed from './YourFeed';

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

    const handleAddTag = (tag) => {
        setCurrentTag(tag)

        const newListTag = [...listTag]
        const newTag = {
            name: `#${tag}`,
            value: tag
        }
        if (listTag.length === 2) {
            // push 
            newListTag.push(newTag)
        } else {
            // replace
            newListTag[2] = newTag
        }
        setListTag(newListTag)

    }



    return (
        <div className='home'>
            <div className="home-header mb-8 ">
                <h1>Conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            <div className = 'container mx-auto'>
                <div className="grid grid-cols-3 gap-x-8">
                    <div className="col-span-2">
                        <ul className="menu__list mb-6">
                            {
                                listTag.map((el, index) => (
                                    <li className={ `menu__item ${setActiveTag(el.value)}` } key={index} onClick={() => handleChangeTag(el.value)}>{el.name}</li>
                                ))
                            }
                        </ul>
                        {
                            // currentTag === TAGS.YOUR_FEED ? (<YourFeed />) : (<Global />)
                            currentTag === TAGS.YOUR_FEED && <YourFeed /> ||
                            currentTag === TAGS.GLOBAL_FEED && <Global /> ||
                            <AnyTag tag={currentTag} />
                        }
                    </div>
                    <div className="bg-gray-100 py-1 px-2 rounded-md">
                        <div className="mb-1">Popular Tags</div>
                        {
                            tags && tags.map((el, index) => (
                                <button key={index} className='bg-gray-500 text-white mr-1 px-2 py-1 mb-1 rounded-lg text-sm' onClick={() => handleAddTag(el)}>
                                    {el}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}
