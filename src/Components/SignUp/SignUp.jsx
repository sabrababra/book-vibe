import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className='mt-5 bg-[rgb(35,190,10,5%)] px-5 py-20 rounded-xl'>
                    <div>
                        <h1 className='text-4xl font-bold text-center'>Sign up!</h1>
        
                        <form className='bg-white space-y-5 w-5/12 mx-auto py-10 rounded-xl mt-3 shadow'>
                            <div className='w-8/12 mx-auto'>
                                <p>Name:</p>
                                <input type="text" className='input' />
                            </div>
                            <div className='w-8/12 mx-auto'>
                                <p>Email:</p>
                                <input type="email" className='input' />
                            </div>
                            <div className='w-8/12 mx-auto' >
                            <p>Password:</p>
                                <input type="password" className='input' />
                            </div>
                            <button className='btn  text-white font-bold bg-[#23BE0A] w-8/12 mx-auto block'>Signup</button>
                            <div>
                                <p className='text-center'>Already have an account  <Link to='/sign-in'><span className='text-[#23BE0A]'>Please Login</span></Link> </p>
                                
                            </div>
                        </form>
                    </div>
                </div>
    );
};

export default SignUp;