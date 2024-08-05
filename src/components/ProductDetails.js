import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./products.css";

function ProductDetails() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', padding: '20px' }}>
            <div className="row" style={{ margin: '150px' }}>
                <div className="col mb-5">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Images/basic.png" className="d-block w-100" alt="basic manipulator" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Images/image1.png" className="d-block w-100" alt="1" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Images/image2.png" className="d-block w-100" alt="2" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Images/image3.png" className="d-block w-100" alt="3" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Images/image4.png" className="d-block w-100" alt="4" />
                            </div>
                            <div className="carousel-item">
                                <img src="/Images/image5.png" className="d-block w-100" alt="5" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'black' }}></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: 'black' }}></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className={`col mb-5 col-lg ${isVisible ? 'slide-up' : 'initial-hidden'}`} style={{ paddingLeft: '40px', marginTop: '150px', textAlign: 'left' }}>
                    <h2>RoMo Kit Basic</h2>
                    <p>Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises.</p>
                    <Link type="button" to = "/contact" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#FF5C36' }} className="btn btn-link">Get in Touch</Link>
                </div>
            </div>

            {/* Timeline */}
            <div className="timeline">
                <div className="timeline-container left">
                    <div className="timeline-content">
                        <h2>CAD Model Design </h2>
                        <p>Users start by designing custom robotic components using an intuitive Graphical User Interface (GUI). This interface allows users to input specific mechanical details such as the length and diameter of parts, ensuring tailored customization of the robotic mechanism.</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="timeline-content">
                        <h2>Manufacturing (3D Printing)</h2>
                        <p>Once the design is finalized, the specifications are sent to a 3D printer. The printer fabricates the custom parts based on the user-defined dimensions, providing precise and efficient manufacturing of robotic components.</p>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div className="timeline-content">
                        <h2>Assembly of Parts</h2>
                        <p>3D printed parts are assembled with motors, sensors, drivers, connectors, and cables to create a functional robot. Motors provide movement, sensors detect obstacles, and drivers ensure precise control. An Arduino connects everything to operate the robot seamlessly.</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="timeline-content">
                        <h2>Challenges </h2>
                        <p>Finally, users can practice and experiment with the assembled robotic mechanism. This hands-on experience promotes practice-based learning, enabling users to understand and apply complex concepts in robotics and AI.
                            <ul>
                                <li>GUI controlled - General Motion</li>
                                <li>GUI controlled - Pick and Place</li>
                                <li>Sensor Controlled</li>
                                <li>Joystick - General Motion</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
