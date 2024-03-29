import './Donate.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Donate = () => {
  return (
    <div>
      <Header activePage="Donate" />
      <main>
        <div className="donate-content">
          <div width="300px">
            <h2>Donate Equipment (New or Used)</h2>
            <p>DonateLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
            <p>DonateNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
            <p>DonatePhasellus mattis viverra felis, sed vulputate felis efficitur at. Aliquam eu facilisis lorem, sed aliquam velit. Sed ut sapien sed urna consectetur dignissim. Donec at lobortis ligula. Nullam varius velit vitae vestibulum vestibulum. Curabitur quis cursus ex, in luctus felis. Sed interdum fringilla dui sed tempor.</p>
            <p>DonateLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
            <p>DonateNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
          </div>
          <div>
            <h2>Donate Funds</h2>
            <iframe className="wuksD5" frameBorder="0" title="Embedded Content" name="htmlComp-iframe" style={{postion: 'absolute', alignContent: 'center'}} width="400px" height="800px" data-src="" src="https://www-musohealth-org.filesusr.com/html/2a5a06_a54c0a99e62a08a59d264b5eeba61bcf.html"></iframe>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Donate;
