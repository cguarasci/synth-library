import Header from '../../components/Header/Header';
import Inventory from './Inventory';

const Library = () => {
  
  return (
    <div style={{ minHeight: '150vh' }}>
        <Header activePage="Library" />
        <Inventory />
    </div>
  );
};

export default Library;
