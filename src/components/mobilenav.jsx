import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Mobilenav = () => {
    return (
        <div className='flex flex-col text-center p-5'>
            <Link className='m-5' href="">Contact</Link>
            <Link className='m-5' href="">LinkedIn</Link>
            <Link className='m-5' href="">Github</Link>
            <Link className='m-5' href="">Resume</Link>
        </div>
    );
}

export default Mobilenav;
