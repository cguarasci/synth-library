import './Calendar.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Calendar = () => {
  document.documentElement.style.setProperty('--body-background-color', '#E4D3FF');

  return (
    <div>
      <Header activePage="Calendar" />
      <main>
        <div class="calendar-content">
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

export default Calendar;
