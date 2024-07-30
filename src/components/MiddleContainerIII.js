import React from 'react';
import Card from './Card';

const Middle_ContainerIII = () => {
    return (
        <div className="middle-container">
            <h1 > <span style={{ borderBottom: '5px dotted #23B5B3' }} >Our</span>  Products</h1>
                <h2>Academics Vertical</h2>
            <div className="card-container">
                <Card
                    title="RoMo Kit Basic"
                    text="Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises with arudio "
                />
                <Card
                    title="RoMo Kit Advanced"
                    text="Integrates vision systems and AI capabilities, enabling robots to perceive their environment and autonomously learn, adapt, and perform complex tasks through image processing and machine learning technologies."
                />
            </div>
                <h2>Industry Vertical</h2>
            <div className="card-container">
                <Card
                    title="RoMo Kit Basic"
                    text="Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises with arudio "
                />
                <Card
                    title="RoMo Kit Advanced"
                    text="Integrates vision systems and AI capabilities, enabling robots to perceive their environment and autonomously learn, adapt, and perform complex tasks through image processing and machine learning technologies."
                />
            </div>
        </div>
    );
}

export default Middle_ContainerIII;
