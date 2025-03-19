import React, { useState, useEffect } from 'react';


// Import the images
import ansatsu from '/assets/projects/ansatsu.jpg';
import bikes from '/assets/projects/bikes.jpeg';
import motor from '/assets/projects/motor.webp';
import solo from '/assets/projects/Solo Leveling.jpeg';
import dadJokes from '/assets/projects/DadJokes.jpeg';
import study from '/assets/projects/study.jpeg';

// Sample project data
const projects = [
    {
        id: '1',
        name: 'Ansatsu',
        description: 'Application Overview: ANSATSU KYOSHITSU SCHOOL (AKS) is a comprehensive school management application designed primarily for teachers. Its core objective is to empower teachers by providing them with robust tools to manage classrooms, students, and subjects efficiently.',
        github: 'https://github.com/adammwaniki/ansatsu-kyoshitsu-project',
        image: ansatsu,
    },
    {
        id: '2',
        name: 'Bikes for Beginners',
        description: 'An interactive platform for beginner motorcycle riders that provides tips, guides, and resources to start riding safely.',
        github: 'https://github.com/Alistairs01/Bikes-for-beginners.aim',
        image: bikes,
    },
    {
        id: '3',
        name: 'Autocars',
        description: 'A gallery of cars and their prices and reviews.',
        github: 'https://github.com/Alistairs01/Autocars',
        image: motor,
    },
    {
        id: '4',
        name: 'Hunters Association',
        description: 'This is an application based on the game Solo Leveling arise. Players can buy equipment for their characters giving them a fighting chance against the monsters they fight.',
        github: 'https://github.com/Alistairs01/Phase-1-codeproject-HUNTERS-ASSOCIATION',
        image: solo,
    },
    {
        id: '5',
        name: 'Dad Jokes',
        description: 'A command-line interface (CLI) application for managing users and their jokes. This application allows you to create, update, delete, and list users and jokes, with data persistence in a SQLite database.',
        github: 'https://github.com/Alistairs01/Dad_jokes_project',
        image: dadJokes,
    },
    {
        id: '6',
        name: 'Tech Study',
        description: 'A productivity tool designed to help students manage their study schedules and track their progress.',
        github: 'https://github.com/casey829/TeckStudy',
        image: study,
    },
];

const ProjectPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Log when the component mounts and when project changes
    useEffect(() => {
        console.log('ProjectPage component mounted.');
        console.log(`Current project: ${projects[currentIndex].name}`);
    }, [currentIndex]);

    // Handle next project
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    // Handle previous project
    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const project = projects[currentIndex];

    return (
        <div className="project-container">
            <div className="project-content">
                <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-image"
                    onLoad={() => console.log(`Image loaded: ${project.name}`)}
                />
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                >
                    View on GitHub
                </a>

                {/* Navigation Buttons */}
                <div className="button-container">
                    <button onClick={prevProject} className="nav-button">Previous</button>
                    <button onClick={nextProject} className="nav-button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
