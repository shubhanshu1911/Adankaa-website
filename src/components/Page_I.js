import React from 'react';
import Card from './Card';


const Page_I = () => {
    return (
        <div className="page_I">
            <h1 style={{ color: '#373A40' }}> What we do ?</h1>
            <div className="card-container" style={{ display: 'flex', alignItems: 'center' }}>
                <Card
                    title="Academics"
                    imgURL = "Images/Acad.png"
                    text="Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises."
                    link= "/acadProducts"    
                />
                {/* <img
                    src="Images/arrow.png"
                    alt="Arrow"
                    width="200"
                    height="200"
                    style={{ margin: '0 20px' }}
                /> */}
                <Card
                    title="Industry"
                    imgURL="Images/Industry.png"
                    text="Cutting-edge kit with AI capabilities, empowering robots to learn, adapt, and perform complex tasks autonomously through machine learning technologies."
                    link="/acadProducts" 
                />


            </div>

        </div>
    );
}

export default Page_I;
