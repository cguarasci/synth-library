import './Error.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Error = () => {
  return (
    <div className="content">
      <Header activePage="Error" />
      <main className="main-content">
        <div className="errorMessage">
          <p className="errorMessage404"><b>ERROR 404: PAGE NOT FOUND</b></p>
          <a className="button" href='/' target="_blank">Go Back Home</a>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default Error;

