import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Mobilenav = () => {
    return (
        <div className='flex flex-col text-center p-5'>
            <a className='m-5' href="">Contact</a>
            <a href='https://www.linkedin.com/in/kirran-kirpalani' target="_blank" className='m-5'>LinkedIn</a>
            <a href='https://www.github.com/kirran01' target="_blank" className='m-5'>Github</a>
            <a href='https://drive.google.com/file/d/1cfbmCxL4uEmCLGvDSO4de-I3Sv7qrMOu/view' target="_blank" className='m-5'>Resume</a>
        </div>
    );
}

export default Mobilenav;
