import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

function isElementInViewport(element) {
const rect = element.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

const Home = () => {
  return (
    <div>
      <Header activePage="Home" />
      <main>
        <img class="full-screen-image" src={process.env.PUBLIC_URL + '/images/homepagebackground.jpg'} alt="Homepage Background" />
        <div class="section-folder">
          <div class="section sec-one" id="section1">
          </div>
          <div class="section sec-two" id="section2">
            <div class="sec-two-text">
              <p class="sec-two-header">What Is Synth Library Orlando?</p>
              <p class="sec-two-description">Description</p>
            </div>
          </div>
          <div class="section sec-three" id="section3">
            Contact Us
          </div>
          {/* <div class="section sec-four" id="section4">
            Content 4
          </div> */}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
