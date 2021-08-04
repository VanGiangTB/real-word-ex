import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getDetail } from '../../features/home/homeSlice';
import './style.css'

PostDetail.propTypes = {
    
};


function PostDetail() {

    const dispatch = useDispatch()
    const match = useRouteMatch()
    const post = useSelector(state => state.home.titlePost)
    const user = useSelector(state => state.home.user)

    useEffect(() => {
        const title = match.params.id
        dispatch(getDetail({ title }))
    },[])



    return (
        <div>
           <div className='header w-full bg-gray-800 h-44 flex-col mb-8'>
               <div className='top'>
                    <h1 className='title text-white pt-8 text-4xl font-semibold'>{post?.title}</h1>
               </div>
               <div className='bot grid grid-cols-3 gap-x-3 py-5'>
                    <div className='left '>
                        <div>
                            <img src={user?.image} className='w-8 h-8 mx-2.5' />
                        </div>
                        <div className='flex-col'>
                            <div className='username text-white text-sm'>{user?.username}</div>
                            <div className='username text-white text-xs' >{user?.email}</div>
                        </div>
                        
                    </div>
                    <div className='right text-right col-span-2'>
                        <button 
                        type="submit" 
                        className='rounded-md border text-white hover:bg-gray-300 py-1 px-3 text-sm mx-0.5'
                        >
                            Edit Article
                        </button>
                        <button 
                        type="submit" 
                        className='border-primary border text-primary rounded-md text-sm py-1 px-3 hover:bg-primary-hover hover:text-white'
                        >
                            Delete Article
                        </button>
                    </div>
               </div>

           </div>
           <div className='body'>
               <h2>{post?.body}</h2>

           </div>
           <div className=" border-b-2 mt-5 "></div>
           <div className="  mt-5 text-center">
               <form className='w-3/5 '>
               <textarea
                id="bio"
                name="bio"
                rows="5"
                type="text"
                placeholder="Write a comment... "
                className="input-field"
                
                />
                <div className="text-right  ">
                <button
                    type="submit"
                    className="rounded-md border text-white border-secondary bg-secondary hover:bg-secondary-hover hover:border-secondary-hover text-sm py-1 px-3 "
                >
                    Post comment
                </button>
                </div>
               </form>
           
           </div>
        </div>
    );
}

export default PostDetail;