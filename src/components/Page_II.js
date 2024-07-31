import React, { useEffect, useRef, useState } from 'react';
import './pageII.css'; // Make sure to import your CSS file

const Page_II = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pageIIRef = useRef(null);

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

        if (pageIIRef.current) {
            observer.observe(pageIIRef.current);
        }

        return () => {
            if (pageIIRef.current) {
                observer.unobserve(pageIIRef.current);
            }
        };
    }, []);

    return (
        <div className="page_II" ref={pageIIRef}>
            <h1 style={{ color: '#373A40' }}>What we offer !!</h1>
            <div className={`text ${isVisible ? 'slide-in' : ''}`}>
                <div className='left'>
                    <p>We provide cutting-edge solutions across various domains to enhance efficiency, innovation, and sustainability. Our offerings include robotic systems for both education and industry, fostering interactive learning and automating manufacturing processes. We integrate AI and vision technologies to empower machines with the ability to interpret visual data and perform tasks autonomously. Our expertise in computer programming and scientific R&D drives technological advancements and innovation. Additionally, we offer advanced material handling systems to optimize the movement, storage, and control of materials. To ensure a cleaner environment, we provide state-of-the-art air pollution control systems that reduce emissions and improve air quality.</p>
                </div>

                <div className='right'>
                    <h5>Robotic Systems for Education and Industry</h5>
                    <h5>AI & Vision Integrated Systems</h5>
                    <h5>Computer Programming and Scientific R&D</h5>
                    <h5>Material handling Systems</h5>
                    <h5>Air Pollution Control Systems</h5>
                </div>
            </div>
        </div>
    );
}

export default Page_II;
