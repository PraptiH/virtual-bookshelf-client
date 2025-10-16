import React from 'react';
import Lottie from 'lottie-react'
import errorLottie from '../../assets/404-Error Jackpot Machine.json'

const Error = () => {
    return (
        <div className='w-11/12 mx-auto my-50'>
            <div className='w-9/12 mx-auto bg- text-center shadow-blue-900 shadow-2xl rounded-2xl p-4'>
                <h2 className='font-semibold text-8xl'>Opps</h2>
                <p className='font-medium text-5xl mt-5'>Page not Found!!!</p>
            </div>
            <Lottie animationData={errorLottie} loop={true}></Lottie>
        </div>
    );
};

export default Error;