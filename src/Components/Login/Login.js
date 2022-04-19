import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
const Login = () => {
    const navigate = useNavigate();
    const navigateRegister =()=>{
        navigate('/register')
    }
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
      let errorElement;
      if (error) {
        errorElement= <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      
      if(user){
        //   navigate('/home')
          navigate(from, { replace: true });
      }
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit =event=>{
        event.preventDefault();
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    if(loading||sending){
        return <Loading></Loading>
    }
    const resetPassword=async ()=>{
        const email =emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
          toast('Sent email');
        }else{
            toast('Plaese enter email address')
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {errorElement}
            </Form>
            <p>New to Cars <small className='pe-auto text-primary' onClick={navigateRegister}>Please Register</small></p>
            <p>Forget Password<button className='pe-auto btn btn-link text-primary' onClick={resetPassword}>Password Reset</button></p>
            {/* <Link to={'/register'}>Please Register here</Link> */}
            <Social></Social>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;