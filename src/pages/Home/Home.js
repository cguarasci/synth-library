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
        <div className='under-construction'>
          <p style={{fontSize: '30px'}}><b>UNDER CONSTRUCTION</b></p>
          <a className='linktree-button' href='https://linktr.ee/synthlibraryorlando'>Visit our Linktree for more info</a>
        </div>
      </main>
    </div>
  );
};

export default Home;