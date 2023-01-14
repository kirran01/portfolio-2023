import React from 'react';
import Project from '../components/project';


const Home = () => {
    const projs = [
        {
            title: 'JS Brickbreaker',
            stack: 'HTML5, CSS3, Javascript',
            image: '../../public/CONTROLLER.png',
            repo: 'https://github.com/kirran01/Brickbreaker',
            site: 'https://kirran01.github.io/Brickbreaker/'
        },
        {
            title: 'Studio Ghibli Archive',
            stack: 'HTML5, CSS3, NodeJS, HBS, Express, MongoDB',
            image: '../../public/TOTORO.png',
            repo: 'https://github.com/kirran01/Studio-Ghibli-Archive',
            site: 'https://ghibliarchive.fly.dev/'
        },
        {
            title: 'Task Manager',
            stack: 'ReactJS, CSS3, NodeJs, Express, MongoDB',
            image: '../../public/TASKS.png',
            repo: 'https://github.com/kirran01/planner-frontend',
            site: 'https://task-manager-kk.netlify.app/'
        }
    ]
    return (
        <div className='bg-slate-200 p-5 pt-24 text-center'>
            <h1 className='text-6xl mb-5 ml-5'>Hello! I'm Kirran :)</h1>
            <h5>- Web Developer</h5>
            <p className='m-5'>I'm a Full-stack developer, based in Miami-Florida and I'm looking to grow and join a new team! My development stack includes: MongoDb, Express, React, Javascript and Express</p>
            <h1 className='text-xl m-5'>Recent Work</h1>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center bg-slate-300 rounded'>
                {
                    projs.map(proj => {
                        return (
                            <>
                                <Project key={proj.title} project={proj} />
                            </>
                        )
                    })
                }
            </div>
            <div className='m-10'>
                <h1 className='text-4xl m-5'>Education</h1>
                <div className='m-5'>
                    <p className='text-xl'>Masters Degree</p>
                    <div className='flex justify-center items-center'>
                        <img className='h-9 rounded m-5' src="../../public/birkbeck.png" alt="" />
                        <p className='text-lg'>University of Birkbeck London</p>
                    </div>
                    <p>Health and Clinical Psychological Sciences</p>
                </div>
                <div className='m-5'>
                    <p className='text-xl'>Bachelors Degree</p>
                    <div className='flex justify-center items-center'>
                        <img className='h-10 m-5' src="../../public/DU.png" alt="" />
                        <p className='text-lg'>University of Denver</p>
                    </div>
                    <p>Psychology & Emerging Digital Practices</p>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl m-5'>Certifications</h1>
                <div className='flex flex-col justify-center m-5'>
                    <div className='flex justify-center items-center'>
                        <img className='h-10 m-5' src="../../public/ih.png" alt="" />
                        <p className='text-xl'>Ironhack Web Development Immersive</p>
                    </div>
                    <p className='m-5'>Intensive web development bootcamp focusing on MERN stack</p>
                </div>
                <div className='m-5'>
                    <div className='flex justify-center items-center'>
                        <img className='h-10 m-5' src="../../public/gA2.png" alt="" />
                        <p className='text-xl'>General Assembly Software Engineering Immersive</p>
                    </div>
                    <p className='m-5'>Intensive software engineering bootcamp focusing on MERN stack</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
