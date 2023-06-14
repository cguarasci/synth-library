import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Membership from './pages/Membership/Membership';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/one" element={<Home />} />
          <Route path="/two" element={<Home />} />
          <Route path="/three" element={<Home />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
