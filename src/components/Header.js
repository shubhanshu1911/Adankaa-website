import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header >
            <nav style={{ padding: '2px 50px' }} className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="Images/logo2.svg" alt="Bootstrap" width="90" height="90" className="d-inline-block align-text-center" />
                        <div style={{ marginLeft: '10px', fontSize: '26px'}}>
                            <b>Adankaa Automation Systems Pvt. Ltd.</b>
                            <div style={{ fontSize: '20px', lineHeight: '1.0', marginTop: '4px'}}>
                                <i>(Powered by AI, IoT, and Robotics)</i>
                            </div>
                        </div>
                    </Link>

                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/acadProducts/ProductDetails">RoMo Kit Basic</Link></li>
                                    <li><Link className="dropdown-item" to="/acadProducts/ProductDetails">RoMo Kit Advance</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? (
                            <div className="d-flex">
                                <Link to="/signup" style={{ textDecoration: 'none', backgroundColor: '#FF5C36' }} className="signup mx-2 btn text-white">Sign Up</Link>
                                <Link to="/login" style={{ textDecoration: 'none', color: '#FF5C36', borderColor: '#FF5C36' }} className="login btn btn-light">Login</Link>
                            </div>
                        ) : (
                            <button onClick={handleLogout} className="mx-5 btn btn-light text-dark">Logout</button>
                        )}
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
