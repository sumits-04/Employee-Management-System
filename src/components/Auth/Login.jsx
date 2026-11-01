import React, { useState } from 'react';

const Login= ({handleLogin})=> {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return ( 
        <>
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col justify-center items-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='border-2 text-xl outline-none bg-transparent font-medium border-emerald-600 py-6 px-4 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your email' />
                    <input
                     value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='mt-3 border-2 text-xl outline-none font-medium bg-transparent border-emerald-600 py-6 px-4 rounded-full placeholder:text-grey-400' type="password" placeholder='Enter your password' />
                    <button className='mt-7 border-none text-lg text-white hover:bg-emerald-700 font-semibold outline-none bg-emerald-600 w-full py-2 px-8 rounded-full placeholder:text-white'>Login</button>
                </form>
            </div>
            <div></div>
        </div>
        </>
     );
}

export default Login;