import React from 'react';
import Card from './Card';

const AcadProducts = () => {
    return (
        <div className="middle-container">
            <h1 > <span style={{ borderBottom: '5px dotted #23B5B3' }} >Our</span> Academics Products</h1>
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

export default AcadProducts;
