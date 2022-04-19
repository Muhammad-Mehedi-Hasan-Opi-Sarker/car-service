import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Social.css'
const Social = () => {
    const navigate =useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error||error1) {
        errorElement= <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
      }
      if (user||user1) {
        navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center '>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <div className='p-2'>or</div>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
        </div>
        {errorElement}
        <div className="right-items">
        <button onClick={()=>signInWithGoogle()} className='btn btn-primary'><small>Google Sing In</small></button><br />
        <button onClick={()=>signInWithGithub()} className='btn btn-primary'><small>GitHub Sing In</small></button><br />
        <button className='btn btn-primary'><small>Facebook Sing In</small></button>
        </div>
        </div>
    );
};

export default Social;