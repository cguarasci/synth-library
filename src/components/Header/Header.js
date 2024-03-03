import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import './Header.css';

const Header = ({ activePage }) => {
  
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showProfileNav, setShowProfileNav] = useState(false);

  const handleMobileNavClick = () => setShowMobileNav(!showMobileNav);
  const handleProfileNavClick = () => setShowProfileNav(!showProfileNav);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Libre Barcode 39 Text', 'Gothic A1']
      }
    });
  }, []);

  return (
    <header className='header-content'>
      <h1 className='slo-logo'>Synth Library Orlando</h1>
    </header>
  );
};

export default Header;