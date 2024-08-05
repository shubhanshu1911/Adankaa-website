import React from 'react';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Top_Container = () => {
    return (
        <div className="top-container">
            <div className="content">
                <h1>Ignite <br/>
                    <span style={{ color: '#FF5C36' }}>Innovate</span> <br/>
                    Industrialize
                </h1>
                <p>Shaping STEM education with accessible, sustainable 3D printing and robotics solutions, empowering future innovators through hands-on learning and bridging academics to industry.
                </p>
                <ScrollLink type="button" to="about" smooth={true} duration={100} style={{ color : 'white' ,textDecoration: 'none', backgroundColor: '#FF5C36' }} class="btn btn-link">Know more</ScrollLink>   

            </div>
            <div className='main-image'>
                <img src="Images/Robotic_arm.png" alt="Robotic Arm" />
            </div>

        </div>
    );
}

export default Top_Container;
