import React from 'react';
import { Link } from 'react-router-dom';
import "./products.css";

const AcadProducts = () => {
    return (
        <div className="product">
            <h1 style={{ color: '#373A40', marginTop: '120px', textAlign: 'center' }}>Our Academic Products</h1><br />

            <div className="card-container">

                <div className="card mb-3 w-50 p-3 custom-card" style={{ marginLeft: '300px', backgroundColor: '#FF5C36' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="Images/basic.png" className="img-fluid rounded-start custom-img" alt="..." width="300" height="300" />
                        </div>
                        <div className="col-md-8 text-end">
                            <div className="card-body">
                                <h5 className="card-title">RoMo Kit Basic</h5>
                                <p className="card-text text-light">
                                    Introductory kit for beginners, teaching fundamental robotics concepts through hands-on building and programming exercises with Arduino
                                </p>
                                <Link to="/acadProducts/ProductDetails" className="btn btn-light mt-auto" style={{ textAlign: 'center' }}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 w-50 p-3" style={{ marginLeft: '300px', backgroundColor: '#FF5C36' }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">RoMo Kit Advanced</h5>
                                <p className="card-text text-light">Integrates vision systems and AI capabilities, enabling robots to perceive their environment and autonomously learn, adapt, and perform complex tasks through image processing and machine learning technologies.</p>
                                <Link to="/acadProducts/ProductDetails" className="btn btn-light mt-auto" style={{ textAlign: 'center' }}>Buy Now</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="Images/advanced.png" className="img-fluid rounded-start custom-img2" alt="..." width="400" height="400" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AcadProducts;
