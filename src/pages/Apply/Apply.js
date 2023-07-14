import './Apply.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Apply = () => {
  document.documentElement.style.setProperty('--body-background-color', '#E4D3FF');

  return (
    <div>
      <Header activePage="Apply" />
      <main>
        <div class="apply-content">
          <p>ApplyLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis dapibus. In eget ipsum orci. Ut ut metus odio. Suspendisse potenti. Nulla volutpat lectus ut ex sollicitudin, ac egestas mauris feugiat. Quisque efficitur eu arcu eget congue. Mauris volutpat elit non sollicitudin aliquet. Pellentesque ac sem eget enim lacinia sollicitudin id id turpis. Nulla elementum est at dolor pretium ullamcorper.</p>
          <p>ApplyNunc accumsan ipsum elit, id hendrerit sem vestibulum et. Praesent eu ligula vitae velit scelerisque malesuada. Vivamus rhoncus vulputate arcu ut suscipit. Aliquam erat volutpat. Duis varius dui at nibh eleifend, ac ultrices nisl tristique. Vivamus tempor iaculis cursus. Donec gravida fringilla odio. In hac habitasse platea dictumst.</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDoIp3U_wNJFrlGEgBC6RB3b6w4gYuq6Upz9ilz9S8stwqlA/viewform?embedded=true" width="100%" height="725" frameborder="0">Loading…</iframe>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Apply;
