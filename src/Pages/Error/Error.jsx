import React from 'react';
import Lottie from 'lottie-react'
import errorLottie from '../../assets/404-Error Jackpot Machine.json'

const Error = () => {
    return (
        <div className='w-11/12 mx-auto my-50'>
            <Lottie  animationData={errorLottie} loop={true}></Lottie>
        </div>
    );
};

export default Error;