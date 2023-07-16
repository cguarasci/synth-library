import React, { useState } from 'react';
import './Header.css';

const Header = ({ activePage }) => {
  
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showProfileNav, setShowProfileNav] = useState(false);

  const handleMobileNavClick = () => setShowMobileNav(!showMobileNav);
  const handleProfileNavClick = () => setShowProfileNav(!showProfileNav);

  return (
    <header className='header-content'>
      <h1 className='slo-logo'><a className='white-link' href="/home">Synth Library Orlando</a></h1>
      <div className='header-links'>
        <div className='right-header-links'>
          <a href="/about" className={`white-link ${activePage === 'About' ? 'active' : ''}`}>About</a>
          <p>|</p>
          <a href="/apply" className={`white-link ${activePage === 'Apply' ? 'active' : ''}`}>Apply</a>
          <p>|</p>
          <a href="/library" className={`white-link ${activePage === 'Library' ? 'active' : ''}`}>Library</a>
          <p>|</p>
          <a href="/calendar" className={`white-link ${activePage === 'Calendar' ? 'active' : ''}`}>Calendar</a>
          <p>|</p>
          <a href="/merch" className={`white-link ${activePage === 'Merch' ? 'active' : ''}`}>Merch</a>
          <p>|</p>
          <a href="/donate" className={`white-link ${activePage === 'Donate' ? 'active' : ''}`}>Donate</a>
        </div>

        <div className='mobile-nav'>
          <span className='mobile-nav-icon' onClick={handleMobileNavClick}><img style={{ width: '24px', top: 0, left: 0 }} src={process.env.PUBLIC_URL + '/images/icons/dropdown-icon.png'} alt="Dropdown Icon" /></span>
          {showMobileNav &&
            <div className="mobile-dropdown-content visible">
              <a href="/about" className={`black-link ${activePage === 'About' ? 'active' : ''}`}>About</a>
              <a href="/apply" className={`black-link ${activePage === 'Apply' ? 'active' : ''}`}>Apply</a>
              <a href="/library" className={`black-link ${activePage === 'Library' ? 'active' : ''}`}>Library</a>
              <a href="/calendar" className={`black-link ${activePage === 'Calendar' ? 'active' : ''}`}>Calendar</a>
              <a href="/merch" className={`black-link ${activePage === 'Merch' ? 'active' : ''}`}>Merch</a>
              <a href="/donate" className={`black-link ${activePage === 'Donate' ? 'active' : ''}`}>Donate</a>
            </div>
          }
        </div>

        <div className='profile-nav'>
          <span className='profile-nav-icon' onClick={handleProfileNavClick}><img style={{ width: '32px', top: 0, left: 0 }} src={process.env.PUBLIC_URL + '/images/icons/empty-avatar.png'} alt="Profile Avatar" /></span>
          {showProfileNav &&
            <div className="mobile-dropdown-content visible">
              <a href="/one" className="black-link">Dropdown Item 1</a>
              <a href="/two" className="black-link">Dropdown Item 2</a>
              <a href="/three" className="black-link">Dropdown Item 3</a>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;