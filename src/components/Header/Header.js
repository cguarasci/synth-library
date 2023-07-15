import React from 'react';
import './Header.css';

const Header = ({ activePage }) => {
  return (
    <header className='header-content'>
      <h1 className='slo-logo'><a className='white-link' href="/home">Synth Library Orlando</a></h1>
      <div className='header-links'>
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
        <div className="dropdown">
          <img style={{ width: '32px', top: 0, left: 0 }} src={process.env.PUBLIC_URL + '/images/empty-avatar.png'} alt="Profile Avatar" />
          <div className="dropdown-content">
            <a href="/one" className="black-link">Dropdown Item 1</a>
            <a href="/two" className="black-link">Dropdown Item 2</a>
            <a href="/three" className="black-link">Dropdown Item 3</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;