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
            borderRadius:'10px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <nav>
            <ul className='flex bg-slate-900 text-white lg:justify-center md:justify-center'>
                <li className='m-5 cursor-pointer hidden lg:block md:block'>
                    Contact
                </li>
                <li className='m-5 cursor-pointer hidden lg:block md:block'>
                    Github
                </li>
                <li className='m-5 cursor-pointer hidden lg:block md:block'>
                    LinkedIn
                </li>
                <li className='m-5 cursor-pointer hidden lg:block md:block'>
                    Reusme
                </li>
                <li onClick={openModal} className='m-5 lg:hidden md:hidden'>
                    <MenuIcon />
                </li>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <Mobilenav />
                </Modal>
            </ul>
        </nav>
    );
}

export default Nav;
