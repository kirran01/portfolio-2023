import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';


const Mobilenav = () => {
    const [copiedM, setCopiedM] = useState(false);
    const copyContactM = () => {
        navigator.clipboard.writeText('Kirran-@live.com').then(() => {
            setCopiedM(true);
            setTimeout(() => {
                setCopiedM(false);
            }, 3000);
        });
    };
    return (
        <div className='flex flex-col text-center p-5'>
            <ul>
                <div className='flex flex-col'>
                    {!copiedM && <a onClick={copyContactM} className='m-5' target="_blank">Contact</a>}
                    {copiedM && <a className='m-5'>✉️ Email copied!</a>}
                    <a href='https://www.linkedin.com/in/kirran-kirpalani' target="_blank" className='m-5'>LinkedIn</a>
                    <a href='https://www.github.com/kirran01' target="_blank" className='m-5'>Github</a>
                    <a href='https://drive.google.com/file/d/1cfbmCxL4uEmCLGvDSO4de-I3Sv7qrMOu/view' target="_blank" className='m-5'>Resume</a>
                </div>
            </ul>
        </div>
    );
}

export default Mobilenav;
