import React from 'react';

const Top_Container = () => {
    return (
        <div className="top-container">
            <div className="content">
                <h1>Revolutionizing Indian <br/>
                <span style={{color: '#FF5C36' }}>Automation Industry</span>
                </h1>
                <p>
                    Shaping STEM education with accessible, sustainable 3D printing and robotics solutions, empowering future innovators through hands-on learning.
                </p>
                <button type="button" style={{ color : 'white' ,textDecoration: 'none', backgroundColor: '#FF5C36' }} class="btn btn-link">Know more</button>   

            </div>
            <div className='main-image'>
                <img src="Images/Robotic_arm.png" alt="Robotic Arm" />
            </div>

        </div>
    );
}

export default Top_Container;
