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
  
    applyTransform();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header activePage="Home" />
      <main>
        <img className="full-screen-image" src={process.env.PUBLIC_URL + '/images/homepagebackground.jpg'} alt="Homepage Background" />
        <div className="section-folder">
          <div className="section sec-one" id="section1">
          </div>
          <div className="section sec-two" id="section2">
            <div className="knob-row">
              <div>
                <img className="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/attack.png'} alt="Attack Knob" />
                <p className="knob-label">ATTACK</p>
              </div>
              <div>
                <img className="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/decay.png'} alt="Decay Knob" />
                <p className="knob-label">DECAY</p>
              </div>
              <div>
                <img className="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/sustain.png'} alt="Sustain Knob" />
                <p className="knob-label">SUSTAIN</p>
              </div>
              <div>
                <img className="knob" src={process.env.PUBLIC_URL + '/images/icons/knobs/release.png'} alt="Release Knob" />
                <p className="knob-label">RELEASE</p>
              </div>
            </div>
            <div className="sec-two-text">
              <h2 className="sec-two-header">What Is Synth Library Orlando?</h2>
              <p className="sec-two-description">Synth Library Orlando is a lending library, coming soon, for electronic music equipment and tools for locals living in Orlando, Florida. We are here to bring cost prohibitive music resources (like synthesizers) to the community of Orlando. Check out equipment, totally free, for 4 weeks at a time.</p>
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