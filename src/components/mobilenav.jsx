import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Mobilenav = () => {
    return (
        <div className='flex flex-col text-center'>
            <a className='m-5' href="">Contact</a>
            <a className='m-5' href="">LinkedIn</a>
            <a className='m-5' href="">Github</a>
            <a className='m-5' href="">Resume</a>
        </div>
    );
}

export default Mobilenav;
