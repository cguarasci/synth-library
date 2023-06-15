import React from 'react';
import './Header.css';

const Header = ({ activePage }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', position: 'fixed', top: 0, minHeight: '90px', width: '100%', backgroundColor: '#000000E6', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)', color: '#fff', zIndex: '1', padding: '0 20px' }}>
      <h1 style={{ fontFamily: 'Kaushan Script', margin: 0, padding: '10px 0' }}><a className='white-link' href="/home">Synth Library Orlando</a></h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '50px', position: 'relative' }}>
        <a href="/about" className={`white-link ${activePage === 'About' ? 'active' : ''}`}>About</a>
        <p>|</p>
        <a href="/library" className={`white-link ${activePage === 'Library' ? 'active' : ''}`}>Library</a>
        <p>|</p>
        <a href="/calendar" className={`white-link ${activePage === 'Calendar' ? 'active' : ''}`}>Calendar</a>
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