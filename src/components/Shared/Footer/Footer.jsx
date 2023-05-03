import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left-side'>
                <h1>Follow</h1>
                <div>
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </div>
                <h1>Address</h1>
                <p>1234 Street Name</p>
                <p>City, AA 99999</p>

                <h1>Contacts</h1>
                <p>Email: support@mobirise.com</p>
                <p>Phone: +1 (0) 000 0000 001</p>
                <p>Fax: +1 (0) 000 0000 002</p>
            </div>
            <div>
                <h1>Opening Hours</h1>
                <div className='set-time'>
                <div className='set-day'>
                    <h4>Sunday</h4>
                    <h4>Sunday</h4>
                    <h4>Monday</h4>
                    <h4>Tuesday</h4>
                    <h4>Wednesday</h4>
                    <h4>Thursday</h4>
                    <h4>Friday</h4>
                </div>
                <div>
                    <p>10:00 am-08:00 pm</p>
                    <p>10:00 am-08:00 pm</p>
                    <p>10:00 am-08:00 pm</p>
                    <p>10:00 am-08:00 pm</p>
                    <p>10:00 am-08:00 pm</p>
                    <p>10:00 am-08:00 pm</p>
                    <p>Closed</p>
                </div>
                </div>
                

            </div>
            <div>
            <h1>Contact Us</h1>
            <div className='input-filed'>
                        <label >Email</label>
                        <input style={{color:'black'}} type="email" name="email" id="" required />
                    </div>
                    <div className='input-filed'>
                        <label>Massage</label>
                        <input style={{color:'black'}} type="text" name="massage" id="" required />
                        
                    </div>
                    <button className='footer-btn'>send</button>
            </div>
        </div>
    );
};

export default Footer;