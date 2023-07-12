import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Inventory from './Inventory';

const Library = () => {
  
  return (
    <div>
        <Header activePage="Library" />
        <Inventory />
        <Footer />
    </div>
  );
};

export default Library;
