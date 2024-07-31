import React, { useEffect, useRef, useState } from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import "./about.css"

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div id="about" className="container-fluid" ref={aboutRef}>
            <div className="row">
                <div className="col-sm-8">
                    <h1 style={{ color: '#373A40' }}>About Company</h1><br />
                    <h5>We are at the forefront of technological innovation, dedicated to developing advanced solutions in AI and Vision Integrated Systems, Robotic Systems for Education and Industry, Computer Programming and Scientific R&D, Material Handling Systems, and Air Pollution Control Systems. Our commitment to excellence and innovation drives us to deliver cutting-edge products that empower users across various sectors. With a focus on quality, sustainability, and practical learning, we strive to make a significant impact in the world of technology and education.</h5><br />
                    <br />
                    <button type="button" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#FF5C36' }} className="btn btn-link">Get in Touch</button>
                </div>
                <div className="col-sm-4">
                    <span style={{ height: '300px', width: '300px', display: 'inline-block' }} className={isVisible ? 'slide-in' : ''}>
                        <BarChartIcon style={{ height: '100%', width: '100%', color: '#FF5C36' }} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;
