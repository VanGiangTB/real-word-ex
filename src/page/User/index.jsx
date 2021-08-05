
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TAGUSER } from '../../constants';
import { getUserInfoRequest } from '../../features/auth/authSlice';
import FavoriteArticles from './Favorited Article';
import MyArticles from './My Article';
import './style.css';


export default function User() {
    const dispatch = useDispatch()
    const [currentTag, setCurrentTag] = useState(TAGUSER.MY_ARTICLE)
    const { username, email } = useSelector(state => state.auth.user)
    useEffect(() => {
        const username = localStorage.getItem("username")
        dispatch(getUserInfoRequest({id: username}))
    }, [])

   
    const [listTag, setListTag] = useState([
        {
            name: "My Article",
            value: TAGUSER.MY_ARTICLE
        },
        {
            name: "Favorite Article",
            value: TAGUSER.FAVORITE_ARTICLE
        },
    ])
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
        <div>
            <div className='main bg-gray-100 h-52 min-w-full '>
                <div className="profile items-center flex-col text-center flex">
                    <img src='https://upanh123.com/wp-content/uploads/2020/09/7f486b37775ac9235749f52a341e8768.jpg' className='img border mt-4 mb-4' />
                    <h2>{username}</h2>
                    {/* <h2>gmail: {email}</h2> */}
                </div>  
                <div className='text-right pr-10'>
                    <Link to='/setting' className=''>
                        <button 
                            type='submit' 
                            className =
                            'edit rounded-md border text-gray-500 border-gray-500 text-xs py-2 px-5'
                            >
                                Edit Profile Settings
                        </button>
                    </Link>  
                </div>
            </div>
            <div className="click">
                    <div className=''>
                        <ul className="menu__list mb-6">
                            {
                                listTag.map((el, index) => (
                                    <li className={ `menu__item ${setActiveTag(el.value)}` } key={index} onClick={() => handleChangeTag(el.value)}>{el.name}</li>
                                ))
                            }
                            
                        </ul>
                            {
                            // currentTag === TAGS.YOUR_FEED ? (<YourFeed />) : (<Global />)
                            currentTag === TAGUSER.MY_ARTICLE && < MyArticles/> ||
                            currentTag === TAGUSER.FAVORITE_ARTICLE && < FavoriteArticles/> 
                        
                        }
                    </div>
            </div> 
        </div>
        
    )
}
