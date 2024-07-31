import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import './pageI.css'; // Make sure to import your CSS file

const Page_I = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pageIRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (pageIRef.current) {
            observer.observe(pageIRef.current);
        }

        return () => {
            if (pageIRef.current) {
                observer.unobserve(pageIRef.current);
            }
        };
    }, []);

    return (
        <div className="page_I" ref={pageIRef}>
            <h1 style={{ color: '#373A40' }}> What we do ?</h1>
            <div className="card-container" style={{ display: 'flex', alignItems: 'center' }}>
                <div className={isVisible ? 'slide-in-left' : ''}>
                    <Card
                        title="Academics"
                        imgURL="Images/Acad.png"
                        text="Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises."
                        link="/acadProducts"
                    />
                </div>
                <div className={isVisible ? 'slide-in-right' : ''}>
                    <Card
                        title="Industry"
                        imgURL="Images/Industry.png"
                        text="Cutting-edge kit with AI capabilities, empowering robots to learn, adapt, and perform complex tasks autonomously through machine learning technologies."
                        link="/acadProducts"
                    />
                </div>
            </div>
        </div>
    );
}

export default Page_I;
