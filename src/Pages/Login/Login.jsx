import React from 'react';
import { Link } from 'react-router';


const Login = () => {
    return (
        <div className='mt-5 bg-[rgb(35,190,10,5%)] px-5 py-20 rounded-xl'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Login now!</h1>

                <form className='bg-white space-y-5 w-5/12 mx-auto py-10 rounded-xl mt-3 shadow'>
                    <div className='w-8/12 mx-auto'>
                        <p>Email:</p>
                        <input type="email" className='input' />
                    </div>
                    <div className='w-8/12 mx-auto' >
                    <p>Password:</p>
                        <input type="password" className='input' />
                    </div>
                    <button className='btn  text-white font-bold bg-[#23BE0A] w-8/12 mx-auto block'>Login</button>
                    <div>
                        <p className='text-center'>New to Book vibe <Link to='/sign-up'><span className='text-[#23BE0A]'>Create new Account</span></Link> </p>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;