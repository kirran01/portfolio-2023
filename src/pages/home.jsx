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
            stack: 'HTML5, CSS3, Javascript, NodeJS, Handlebars, Express, MongoDB',
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
        <div className='bg-slate-200'>
            <h1>home</h1>
            <div className='flex justify-center'>
                {
                    projs.map(proj => {
                        return (
                            <>
                            <Project key={proj.title} project={proj}/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
