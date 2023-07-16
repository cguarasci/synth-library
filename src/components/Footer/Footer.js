import React from 'react';
import './Footer.css';

const Footer = ({ activePage }) => {
    const email = 'synthlibraryorlando@gmail.com';

    const handleEmailClick = (e) => {
        e.preventDefault();
        //?subject=${encodeURIComponent(subject)}
        window.location.href = `mailto:${email}`;
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', minHeight: '60px', width: '100%', backgroundColor: '#000000', color: '#fff', zIndex: '1'}}>
            {/* ?subject=${encodeURIComponent(subject)} */}
            <a className='white-link' style={{ padding: '20px' }} href={`mailto:${email}`} onClick={handleEmailClick}>{email}</a>
            <div style={{ paddingRight: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a href="https://www.instagram.com/synthlibraryorlando" target="_blank" rel="noopener noreferrer"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/instagram.png'} alt="Instagram Logo" /></a>
                {/* <a href="https://www.google.com"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/facebook.png'} alt="Facebook Logo" /></a>
                <a href="https://www.google.com"><img style={{ width: '30px' }} src={process.env.PUBLIC_URL + '/images/icons/twitter.png'} alt="Twitter Logo" /></a> */}
            </div>
        </div>
    );
};

export default Footer;