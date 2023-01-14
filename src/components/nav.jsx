import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Modal from 'react-modal';
import Mobilenav from './mobilenav';
import { useState } from 'react';
import { Link, Router } from 'react-router-dom'

const Nav = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            borderRadius: '10px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <nav className='fixed w-full'>
            <ul className='flex bg-slate-900 text-white justify-between'>
                <li onClick={openModal} className='m-5 md:mr-20 lg:invisible md:invisible'>
                    <MenuIcon />
                </li>
                <div className='flex'>
                    <Link className='m-5 cursor-pointer hidden lg:block md:block'>
                        Contact
                    </Link>
                    <Link className='m-5 cursor-pointer hidden lg:block md:block'>
                        Github
                    </Link>
                    <Link className='m-5 cursor-pointer hidden lg:block md:block'>
                        LinkedIn
                    </Link>
                    <Link className='m-5 cursor-pointer hidden lg:block md:block'>
                        Resume
                    </Link>
                </div>
                <li className='m-5'>
                    Kirran Kirpalani
                </li>

            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Mobilenav />
            </Modal>

        </nav>
    );
}

export default Nav;
