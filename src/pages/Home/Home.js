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
            <div class="knob-row">
              <div>
                <img class="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/attack.png'} alt="Attack Knob" />
                <p class="knob-label">ATTACK</p>
              </div>
              <div>
                <img class="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/decay.png'} alt="Decay Knob" />
                <p class="knob-label">DECAY</p>
              </div>
              <div>
                <img class="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/sustain.png'} alt="Sustain Knob" />
                <p class="knob-label">SUSTAIN</p>
              </div>
              <div>
                <img class="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/release.png'} alt="Release Knob" />
                <p class="knob-label">RELEASE</p>
              </div>
            </div>
            <div class="sec-two-text">
              <h2 class="sec-two-header">What Is Synth Library Orlando?</h2>
              <p class="sec-two-description">Synth Library Orlando is a lending library of synthesizers, recording equipment, modular gear and other electronic musical instruments. 
              We are a membership organization committed to community and education, and increasing access to music technology, especially to those who may be under-represented in these fields/who may not otherwise be able to afford. 
              Membership is free and members have access to borrow instruments to take home for four weeks.*I took this from Synth Library NYC because I'm too lazy to write mine right now but I'll fix it in a bit.</p>
              {/* <svg viewBox="0 0 2000 300">
                <path
                  d="M0,50 C250,100 250,0 500,0 S750,100 1000,100 1250,0 1500,0 S1750,100 2000,100"
                  fill="none"
                  stroke="#88cc33"
                  strokeWidth="4"
                />
              </svg> */}
            </div>
          </div>
          {/* <div class="section sec-three" id="section3">
            <div class="contact-container">
              <h2 class="contact-title">Contact Us</h2>
              <p class="contact-description">We would love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
              <form class="contact-form" action="#" method="post">
                <input class="contact-input" type="text" name="name" placeholder="Your Name" required/>
                <input class="contact-input" type="email" name="email" placeholder="Your Email" required/>
                <textarea class="contact-input contact-textarea" name="message" placeholder="Your Message" required></textarea>
                <button class="contact-button" type="submit">Send Message</button>
              </form>
            </div>
          </div> */}
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