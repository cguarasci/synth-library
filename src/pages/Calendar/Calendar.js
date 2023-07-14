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
          <h2 class="cal-header">Calendar</h2>
          <iframe src="https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTz=1&src=NDYyM2M0MGMwNjdjZThjODY5YjVmMWEwZTk2MjgwNjY3YmVkZWNhYTdkOGZhOWU3OGUwY2IzMjFkOThmOGI3YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NjdhZTRmZWEyMjVjZWViYzY5OTYzOGYwMjI1MjQ2NDUwYmQ1NTEwZDc2MGQzNDA4ZmYzMGJlY2FhYmE0ZjNiZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%237CB342" style={{borderWidth: 0, width: '100%' }} height="700" frameborder="0" scrolling="no"></iframe>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Calendar;
