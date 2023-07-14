import React from 'react';
import './Footer.css';

const Footer = ({ activePage }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', inHeight: '90px', width: '100%', backgroundColor: '#000000', color: '#fff', zIndex: '1'}}>
        <p style={{ paddingLeft: '20px' }}>synthlibraryorlando@gmail.com</p>
        <div style={{ paddingRight: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="https://www.instagram.com/synthlibraryorlando"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/instagram.png'} alt="Instagram Logo" /></a>
            <a href="https://www.google.com"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/facebook.png'} alt="Facebook Logo" /></a>
            <a href="https://www.google.com"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/twitter.png'} alt="Twitter Logo" /></a>
        </div>
    </div>
  );
};

export default Footer;