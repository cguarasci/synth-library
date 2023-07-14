import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    const image = document.querySelector('.full-screen-image');
    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
      const scrollPosition = window.scrollY;
      const rotationFactor = 0.05;
      const rotation = scrollPosition * rotationFactor;
      const scrollFactor = 0.2;
      const scrollTop = scrollPosition * scrollFactor;
      image.style.transform = `rotate(${rotation}deg) translateY(-${scrollTop}px)`;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
