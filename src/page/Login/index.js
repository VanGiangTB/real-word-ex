import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { login } from '../../features/auth/authSlice';

const SignIn = () => {

    const [prams, setPrams] = useState({
        email:'',
        password:'',
    })
 
    const dispatch = useDispatch()
    const history  = useHistory()

    const handleSigIn = () => {
        dispatch(login({ user: prams }))
        history.push('/user')
        
    }
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setPrams({ ...prams, [name]: value });
    }

    return (
        <div className='container sign-in'>
        <h1>Sign In</h1>
        <Link to='/signup' className='question'>Need an account?</Link>
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
