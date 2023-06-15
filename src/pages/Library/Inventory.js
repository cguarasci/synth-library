import React, { useState, useEffect, useRef } from 'react';
import './Inventory.css';
import pickupInfo from '../../utils/pickup-info.json';
import inventoryInfo from '../../utils/inventory.json';

const Inventory = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [pickupData, setPickupData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const popupRef = useRef(null);

  document.documentElement.style.setProperty('--body-background-color', '#E4D3FF');

  useEffect(() => {
    setPickupData(pickupInfo);
    setInventoryData(inventoryInfo);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSquareClick = (index) => {
    setSelectedItemIndex(index);
    setPopupVisible(true);
  };
  
  const handleClosePopup = () => {
    setSelectedItemIndex(null);
    setPopupVisible(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredInventory = inventoryData?.inventory.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  return (
    <div style={{ marginTop: '150px' }}>
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <img style={{ position: 'absolute', marginTop: '10px' }} className="mono-cable" src={process.env.PUBLIC_URL + '/images/mono-cable.png'} alt="Mono Cable" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search..."
          style={{
            position: 'relative',
            background: 'black',
            color: 'white',
            width: '300px',
            height: '30px',
            marginLeft: '80px',
            borderRadius: '10px',
            padding: '10px',
            fontSize: '16px',
            border: 'none',
            outline: 'none',
            zIndex: '0'
          }}
          placeholderStyle={{
            color: 'white',
            fontSize: '18px'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-30px',
            width: 'calc(100% - 350px)',
            height: '100%',
            zIndex: '-1',
            transform: 'translateY(-50%)'
          }}
        >
          <svg viewBox="0 -10 2000 300">
            <path
              d="M0,50 C250,100 250,0 500,0 S750,100 1000,100 1250,0 1500,0 S1750,100 2000,100"
              fill="none"
              stroke="black"
              strokeWidth="10"
            />
          </svg>
        </div>
      </div>
      <div className="panel-array">
        {filteredInventory.map((item, index) => (
            <div
              key={index}
              className="panel"
              onClick={() => handleSquareClick(index)}
            >
              <div className="more-info-button">More Info +</div>
              <img className="panel-image" src={process.env.PUBLIC_URL + '/images/inventory/' + item.image} alt="Sample Synth 1" />
              <div className="item-info">
                <p style={{ fontStyle: 'italic', fontSize: 18, margin: 0, marginBottom: '10px' }}>{item.brand} {item.name}</p>
                <p style={{ margin: 0 }}>$20 Deposit</p>
              </div>
            </div>
        ))}
      </div>
      {popupVisible && selectedItemIndex !== null &&  (
        <div className="popup-background">
          <div className="popup-content" ref={popupRef}>
            <div className="popup-left-panel">
              <img className="popup-image" src={process.env.PUBLIC_URL + '/images/inventory/' + inventoryData?.inventory[selectedItemIndex].image} alt="Sample Synth 2" />
              <div style={{ width: '500px', height: '15px', backgroundColor: 'black', opacity: '0.5'}}></div>
              <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <p style={{ margin: 0 }}><b>Next Pickup Date:</b> {pickupData?.['next-pickup']}</p>
                <p style={{ margin: 0 }}><b>Next Drop-Off Date:</b> {pickupData?.['next-dropoff']}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {inventoryData?.inventory[selectedItemIndex].links.map((link, i) => (
                    <a href={link.link} style={{ textAlign: 'start', margin: 0 }} key={i}>
                      {link.title}
                    </a>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <button>Reserve</button>
                </div>
              </div>
            </div>
            <div className="scrollable-content">
              <p style={{ fontSize: '30px' }}>
                {inventoryData?.inventory[selectedItemIndex].brand}&nbsp;
                {inventoryData?.inventory[selectedItemIndex].name}&nbsp;
                {inventoryData?.inventory[selectedItemIndex].type}
              </p>
              <p>
                {inventoryData?.inventory[selectedItemIndex].description}
              </p>
            </div>
            <div><img onClick={handleClosePopup} style={{ cursor: "pointer", height: "30px" }} src={process.env.PUBLIC_URL + '/images/close-icon.png'} alt="Close Icon" /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
