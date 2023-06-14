import React, { useState, useEffect, useRef } from 'react';
import './Inventory.css';
import Header from '../../components/Header/Header';
import pickupInfo from '../../utils/pickup-info.json';
import inventoryInfo from '../../utils/inventory.json';

const Inventory = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [pickupData, setPickupData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const popupRef = useRef(null);

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
  
  return (
    <div style={{ minHeight: '150vh', backgroundColor: '#E4D3FF' }}>
        <Header activePage="Inventory" />
        <div className="panel-array">
            {inventoryData?.inventory.map((item, index) => (
                <div
                  key={index}
                  className="panel"
                  onClick={() => handleSquareClick(index)}
                >
                  <div className="more-info-button">More Info +</div>
                  <img className="panel-image" src={process.env.PUBLIC_URL + '/images/inventory/' + item.image} alt="Sample Synth 1" />
                  <div className="item-info">
                    <p style={{ fontStyle: 'italic', fontSize: 20, margin: 0, marginBottom: '10px' }}>{item.brand} {item.name}</p>
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
                <div style={{ width: '500px', height: '20px', backgroundColor: 'black', opacity: '0.5'}}></div>
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

// import './Inventory.css';
// import Header from '../../components/Header/Header';

// const Inventory = () => {
//   return (
//     <div style={{ minHeight: '150vh', backgroundColor: '#E4D3FF' }}>
//         <Header activePage="Inventory" />
//         <div style={{ display: 'flex', paddingTop: '100px' }}>
//             {/* <div class="sine-wave"></div> */}
//             {/* <p style={{}}>Search...</p>
//             <img style={{ width: '1000px', paddingLeft: '300px' }} src={process.env.PUBLIC_URL + '/images/wave.png'} alt="Wave" /> */}
//         </div>
//         <div>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//             <p>InventoryLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
//             <p>InventoryNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
//             <p>InventoryPhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
//         </div>
//     </div>
//   );
// };

// export default Inventory;
