import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Register.css'
import auth from '../../firebase.init';
import Social from '../Social/Social';
import Loading from '../Loading/Loading';
// import { async } from '@firebase/util';
// import { updatePassword } from 'firebase/auth';
const Register = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [agree,setAgree]=useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    if(loading||updating){
        
            return <Loading></Loading>
       
    }
    if (user) {
        console.log('user',user)
    }
    const handleRegister = async(event) => {
        event.preventDefault();
        const name=event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name });

          navigate('/home')

    }
    return (
        <div className='register-from'>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' placeholder='Your name' /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' placeholder='Enter email' /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='Enter new password' name="password" id="" /><br />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree?'':'text-danger'} htmlFor="terms">Accept Genius Car Terms And Conditions</label><br />
                <input
                    disabled={!agree}
                    className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already have a account <Link className='text-decoration-none' to={'/login'}>Go to login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;