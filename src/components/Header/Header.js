import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', position: 'fixed', top: 0, minHeight: '90px', width: '100%', backgroundColor: '#000000E6', color: '#fff', padding: '0 20px' }}>
      <h1>Synth Library Orlando</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '50px' }}>
        <a href="/home" className="white-link">Home</a>
        <p>|</p>
        <a href="/inventory" className="white-link">Inventory</a>
        <p>|</p>
        <a href="/membership" className="white-link">Apply for Membership</a>
        <div className="dropdown">
          <img src="empty-avatar.png" alt="Profile Picture" />
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