import React from 'react';
import "./contact.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Contact = () => {

    return (
        <div>
            <div className="contact1" >
                <div className="container-contact1" style={{margin : '100px'}}>
                    <div
                        className="contact1-pic js-tilt"
                        data-tilt=""
                        style={{ transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)', willChange: 'transform' }}
                    >
                        <img src="Images/contact.png" alt="IMG" />
                    </div>
                    <form className="contact1-form validate-form">
                        <span className="contact1-form-title">
                            Get In Touch
                        </span>
                        <div className="wrap-input1 validate-input" data-validate="Name is required">
                            <input className="input1" type="text" name="name" placeholder="Name" />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input1" type="text" name="email" placeholder="Email" />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="Subject is required">
                            <input className="input1" type="text" name="subject" placeholder="Subject" />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1" name="message" placeholder="Message"></textarea>
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn">
                                <span>
                                    Send Email
                                    <ArrowRightAltIcon/>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
