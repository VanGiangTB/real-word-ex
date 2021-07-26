import React, {useState,useEffect} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux'
import { login, resetState } from '../../features/auth/authSlice';

const SignIn = () => {

    const dispatch = useDispatch()
    const history  = useHistory()
    const isMiss = useSelector(state => state.auth.isMiss)
    const [errorMessage, setErrorMessage] = useState('')
    const [prams, setPrams] = useState({
        email:'',
        password:'',
    })
    useEffect(() => {
        if(isMiss){
            history.push('/user')
        }
        dispatch(resetState())
    }, [isMiss])
 
   

    const handleSigIn = () => {
        dispatch(login({ user: prams }))
        if(isMiss === false){
            setErrorMessage('Account not registered')
        }else{
            setErrorMessage('')
        }
        
    }
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setPrams({ ...prams, [name]: value });
    }

    return (
        <div className='container sign-in'>
            <h1>Sign In</h1>
            <Link to='/signup' className='question'>Need an account?</Link>
            <h3 style={{color:'#b85c5c'}}>{errorMessage}</h3>
            <form className='form'>
                <input 
                className='form-control' 
                placeholder="Email"  
                name='email' 
                onChange={handleChange} 
                value={prams.email}
                />
                <input 
                type='password' 
                className='form-control'
                name='password'  
                placeholder="Password" 
                onChange={handleChange} 
                value={prams.password}
                />
                <div className='form-group'>
                <button type='button' onClick={handleSigIn}>Sign In</button>
                </div>
            </form>
            
        
    </div>
    )
}

export default SignIn;
