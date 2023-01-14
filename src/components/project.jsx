import React from 'react';
import { Link, Router } from 'react-router-dom'


const Project = ({ project }) => {
    console.log(project.repo)
    return (
        <div className='flex flex-col text-center items-center bg-white p-10 pt-2 pb-2 m-3 rounded-lg'>
            <h1 className='text-lg'>{project.title}</h1>
            <hr />
            <img className='h-16 my-5' src={project.image} alt="" />
            <p className='text-sm my-2 break-normal'>{project.stack}</p>
            <button className='bg-slate-700 text-white m-2 mb-0 px-5 py-2 rounded-lg'>Demo</button>
            <Link className='text-sm m-5' to={project.repo}>Github Repository</Link>
        </div>
    );
}

export default Project;
