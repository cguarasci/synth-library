import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    const image = document.querySelector('.full-screen-image');

    function applyTransform() {
      const scrollPosition = window.scrollY;
      const rotationFactor = 0.05;
      const rotation = scrollPosition * rotationFactor;
      const scrollFactor = 0.2;
      const scrollTop = scrollPosition * scrollFactor;
      const translateX = window.innerWidth < 1400 ? 'translateX(-50%)' : '';
      image.style.transform = `${translateX} rotate(${rotation}deg) translateY(-${scrollTop}px)`;
    }

    function handleScroll() {
      applyTransform();
    }

    function handleResize() {
      applyTransform();
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
