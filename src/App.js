import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path="/membership" element={<Membership />} /> */}
          {/* Additional routes go here */}
        </Routes>
      </Router>
    );
  };
  
  export default App;