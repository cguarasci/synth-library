import './Merch.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Merch = () => {
  document.documentElement.style.setProperty('--body-background-color', '#E4D3FF');

  return (
    <div>
      <Header activePage="Merch" />
      <main>
        <div className="merch-content">
          <p>Synth Library Orlando is.</p>
          <p>Thank you to our donors.</p>
          <p>We are currently located at.</p>
          <p>Other Synth Libraries: Synth Library NYC • FemSynthLab (Los Angeles) • Synth Library Portland • Synth Library Prague • MusicLandria (Sacramento)</p>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Merch;
