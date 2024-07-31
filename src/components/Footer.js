import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.css"

function Footer() {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top" style={{padding: '0'}}>
                <div className="col mb-6 col-lg-5">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src="Images/logo2.svg" alt="Bootstrap" width="90" height="90" className="d-inline-block align-text-center" />
                        <div style={{ marginLeft: '10px', fontSize: '26px' }}>
                            <b>Adankaa Automation Systems Pvt. Ltd.</b>
                            <div style={{ fontSize: '20px', lineHeight: '1.0', marginTop: '4px' }}>
                                <i>(Powered by AI, IoT, and Robotics)</i>
                            </div>
                        </div>
                    </a>
                    
                    {/* <p className="text-body-secondary">3rd Floor, New Academic Block Iiitdm Kancheepuram, Kanchipuram, Tamil Nadu 600127</p> */}
                    <div className="col mb-3 col-lg">
                        {/* <h5>Contact us</h5> */}
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-body-secondary">
                                    <LocationOnIcon />
                                    <span>3rd Floor, Academic Block IIITDM Kancheepuram, Tamil Nadu 600127</span>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-body-secondary">
                                    <PhoneIphoneIcon />
                                    +91 94447 24955
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-body-secondary">
                                    <EmailIcon />
                                    msk@adankaa.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="col mb-2">
                    {/* Additional content or links can go here */}
                </div>

                <div className="col mb-3 col-lg">
                    <h5>Our Products</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Basic RoMo Kit
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Advanced RoMo Kit
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Industry Products  
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Industry Products
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Industry Products
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Industry Products
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="/" className="nav-link p-0 text-body-secondary">
                                Industry Products
                            </a>
                        </li>
                    </ul>
                </div>

            </footer>
                <div className="col mb-3 d-flex justify-content-center align-items-center ">
                    <div className="social-media-icons">
                    <img src="Images/digitalindia.png" alt="digital india" width="100" height="100" />
                    <img src="Images/makeInIndia.png" alt="digital india" width="100" height="100" />
                    <img src="Images/skillIndia.png" alt="digital india" width="100" height="100"  />

                    </div>
                </div>

                <div className="col mb-3 d-flex justify-content-center align-items-center ">
                    <div className="social-media-icons">
                        <a href="/" className="social-icon"><XIcon /></a>
                        <a href="/" className="social-icon"><YouTubeIcon /></a>
                        <a href="/" className="social-icon"><InstagramIcon /></a>
                        <a href="/" className="social-icon"><LinkedInIcon /></a>
                    </div>
                </div>
        </div>
    );
}

export default Footer;
