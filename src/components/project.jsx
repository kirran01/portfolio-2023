import React from 'react';
import { Link, Router } from 'react-router-dom'


const Project = ({ project }) => {
    return (
        <div className='flex flex-col text-center items-center bg-white p-10 pt-2 pb-2 m-3 rounded-lg'>
            <h1 className='text-lg'>{project.title}</h1>
            <hr />
            <img className='h-16 my-5' src={project.image} alt="" />
            <p className='text-sm my-2'>{project.stack}</p>
            <button className='bg-slate-700 text-white m-2 px-5 py-2 rounded-lg'>Demo</button>
            <Link className='text-sm m-5' to="www.google.com">Github Repository</Link>
        </div>
    );
}

export default Project;
