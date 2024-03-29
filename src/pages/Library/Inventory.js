import React, { useState, useEffect, useRef } from 'react';
import './Inventory.css';
import pickupInfo from '../../utils/pickup-info.json';
import inventoryInfo from '../../utils/inventory.json';

const ITEMS_PER_PAGE = 40;

const Inventory = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [reserveInfoVisible, setReserveInfoVisible] = useState(false);
  const [pickupData, setPickupData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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
    setReserveInfoVisible(false);
  };

  const handleReserveClick = () => {
    setReserveInfoVisible(true);
  };

  const handleMoreInfoClick = () => {
    setReserveInfoVisible(false);
  };
  
  const handleClosePopup = () => {
    setSelectedItemIndex(null);
    setPopupVisible(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredInventory = inventoryData?.inventory.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredInventory.length / ITEMS_PER_PAGE);

  // Calculate the start and end index of items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the items for the current page
  const itemsForCurrentPage = filteredInventory.slice(startIndex, endIndex);
  
  return (
    <div style={{ marginTop: '150px', minHeight: '900px', minWidth: 'fit-content' }}>
      <div style={{ position: 'relative', marginBottom: '20px', overflowX: 'clip' }}>
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
        {itemsForCurrentPage.map((item, index) => (
            <div
              key={index}
              className="panel"
              onClick={() => handleSquareClick(index + startIndex)}
            >
              <div className="more-info-button">More Info +</div>
              <img className="panel-image" src={process.env.PUBLIC_URL + '/images/inventory/' + item.image} alt="Sample Synth 1" />
              <div className="item-info">
                {!item.inStock && <p style={{ marginBottom: 5, fontSize: '14px', fontWeight: 'bold', marginTop: 0 }}>Out of Stock</p>}
                <p style={{ fontStyle: 'italic', fontSize: 18, margin: 0 }}>{item.brand} {item.name}</p>
                <p style={{ marginTop: 5, marginBottom: 0 }}>${item.deposit} Deposit</p>
              </div>
            </div>
        ))}
      </div>
      {popupVisible && selectedItemIndex !== null &&  (
        <div className="popup-background">
          <div className="popup-content" ref={popupRef}>
            <div className="popup-left-panel">
              <img className="popup-image" src={process.env.PUBLIC_URL + '/images/inventory/' + inventoryData?.inventory[selectedItemIndex].image} alt="Sample Synth 2" />
              <div className="horizontal-border"></div>
              <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <p style={{ margin: 0 }}><b>Next Pickup Date:</b> {pickupData?.['next-pickup']}</p>
                <p style={{ margin: 0 }}><b>Next Drop-Off Date:</b> {pickupData?.['next-dropoff']}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                  {inventoryData?.inventory[selectedItemIndex].links.map((link, i) => (
                    <a href={link.link} style={{ textDecoration: 'none', color: '#007bff' }} target="_blank" rel="noopener noreferrer" key={i}>
                      {link.title}
                    </a>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {!reserveInfoVisible &&  (
                    <button className='reserve-button' onClick={() => handleReserveClick()}>Reserve</button>
                  )}
                  {reserveInfoVisible &&  (
                    <button className='reserve-more-info-button' onClick={() => handleMoreInfoClick()}>More Info</button>
                  )}
                </div>
              </div>
            </div>
            <div className="scrollable-content">
              {!reserveInfoVisible &&  (
                <div>
                  {!inventoryData?.inventory[selectedItemIndex].inStock && <h3 style={{ fontWeight: 'bold' }}><i>Out of Stock</i></h3>}
                  <p style={{ fontSize: '30px' }}>
                    {inventoryData?.inventory[selectedItemIndex].brand}&nbsp;
                    {inventoryData?.inventory[selectedItemIndex].name}&nbsp;
                    {inventoryData?.inventory[selectedItemIndex].type}
                  </p>
                  <p>
                    {inventoryData?.inventory[selectedItemIndex].description}
                  </p>
                </div>
              )}
              {reserveInfoVisible &&  (
                <div>
                  <p style={{ fontSize: '30px' }}>
                    {inventoryData?.inventory[selectedItemIndex].brand}&nbsp;
                    {inventoryData?.inventory[selectedItemIndex].name}&nbsp;
                    {inventoryData?.inventory[selectedItemIndex].type}
                  </p>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>There is a refundable deposit amount of ${inventoryData?.inventory[selectedItemIndex].deposit}.</p>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }} action="">
                      <label htmlFor="donations">Would you like to donate your deposit?</label>
                      <div className="dropdown">
                        <select className="dropdown-select" id="donations" name="donations">
                          <option value="no">No, I would like to receive my ${inventoryData?.inventory[selectedItemIndex].deposit} deposit back.</option>
                          <option value="yes">Yes, donate my ${inventoryData?.inventory[selectedItemIndex].deposit} deposit.</option>
                        </select>
                        <ul className="dropdown-options">
                          <li className="dropdown-option">No, I would like to receive my $20 deposit back.</li>
                          <li className="dropdown-option">Yes, donate my $20 deposit.</li>
                        </ul>
                      </div>
                      <input type="submit" value="Add to Cart" className="add-to-cart-button"
                      />
                    </form>
                    <div>
                      <h4>Where does my donation go?</h4>
                      <p>Every bit helps! Your donation helps us cover Paypal transaction fees, costs of repairing damaged gear, and server fees associated with running the library website.</p>
                    </div>
                    <div>
                      <h4>Terms of Use</h4>
                      <p>Thank you for using our gear library! Once you check out, you will receive an email with pick up instructions. Your three-week rental period begins at the pick up date. At the end of your rental period, you will receive an email with drop off instructions.</p>
                    </div>
                    <div>
                      <p><i>Please reserve a maximum of three items at a time to leave resources for other community members. Once you have your instrument, please handle it with care and respect it as if it were your own! Avoid liquids around gear. If an item is damaged while in your care, you agree to inform us and help pay for its repair if you have the means. Failure to return an item will result in cancellation of your membership.</i></p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div><img onClick={handleClosePopup} style={{ cursor: "pointer", height: "30px" }} src={process.env.PUBLIC_URL + '/images/icons/close-icon.png'} alt="Close Icon" /></div>
          </div>
        </div>
      )}
      <div>
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous Page
            </button>
            <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
