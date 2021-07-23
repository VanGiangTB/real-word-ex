import React, { useEffect } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../../features/home/homeSlice';
import {Link, BrowserRouter,Switch,Route } from 'react-router-dom';

export default function Home() {


    const dispatch = useDispatch()
    const tags = useSelector(state => state.home.tags)

    useEffect(() => {
        console.log(111);
        dispatch(getTags())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



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
                <BrowserRouter>
                    <Link to='/home/article' style={{ marginRight: 10, color: 'black'}} className='header-link link'> My Article</Link>
                    <Link to='/home/favorites' className='header-link link'> My favorites</Link>
                    <Switch>
                        <Route path='/home/article'>
                            My Article
                        </Route>
                        <Route path='/home/favorites'>
                            favorites
                        </Route>
                    </Switch>
                </BrowserRouter>
                </div>
            </div>
            
        </div>
    )
}
