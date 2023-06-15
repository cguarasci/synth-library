import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Library from './pages/Library/Library';
import Calendar from './pages/Calendar/Calendar';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/?" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/one" element={<Home />} />
        <Route path="/two" element={<Home />} />
        <Route path="/three" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
