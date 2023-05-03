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
                
            </div>
            <div>3</div>
        </div>
    );
};

export default Footer;