import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import { register,signup} from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {

    const [prams, setPrams] = useState({
        username:'',
        email:'',
        password:'',
    })

    const [errorMessage, setErrorMessage] = useState('')
    const [errorUsername, setErrorUsername]= useState('')


    const dispatch = useDispatch()

    const handleSigUp = (e) => {
        dispatch(register({ user: prams }))

        e.preventDefault();
        if(prams.password.trim().length < 8 ){
            setErrorMessage('Password is too short (minimum is 8 characters)')
        }else{
            setErrorMessage('')
        }

        if(prams.username.trim().length > 20){
            setErrorUsername('Username is too long (maximum is 20 characters)')
        }else{
            setErrorUsername('')
        }
        // // debugger
    }
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setPrams({ ...prams, [name]: value });
    }

    return (
        <div className='container sign-up'>
            <h1>Sign Up</h1>
            <Link to='/signin' className='question'>Have an account?</Link>
            <h4 className='errorMessage'>
                {errorMessage}<br/>
                {errorUsername}
                
            </h4>
            <form className='form' onSubmit ={handleSigUp}>
                <input 
                className='form-control' 
                name='username' 
                placeholder="Username" 
                onChange={handleChange} 
                value={prams.username} 
                />
                <input 
                type='email' 
                className='form-control' 
                name='email' 
                placeholder="Email" 
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
                    <button type="submit" >Sign up</button>
                </div>
            </form>
           
        </div>
    )
}
export default SignUp;
