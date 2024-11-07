import React, { useState, useEffect } from 'react';
// import './App.css'; // Asegúrate de tener tu CSS aquí

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleScroll = () => {
    const divs = ['#div1', '#div2', '#div3'];
    divs.forEach((id, index) => {
      const div = document.querySelector(id);
      if (div) {
        const rect = div.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        } else {
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = false;
            return newVisibility;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        id="div1"
        className={`animate__animated ${isVisible[0] ? 'animate__fadeIn' : 'animate__fadeOut'}`}
        style={{ height: '200px', backgroundColor: '#f00', margin: '20px 0' }}
      >
        Div 1
      </div>
      <div
        id="div2"
        className={`animate__animated ${isVisible[1] ? 'animate__fadeIn' : 'animate__fadeOut'}`}
        style={{ height: '200px', backgroundColor: '#0f0', margin: '20px 0' }}
      >
        Div 2
      </div>
      <div
        id="div3"
        className={`animate__animated ${isVisible[2] ? 'animate__fadeIn' : 'animate__fadeOut'}`}
        style={{ height: '200px', backgroundColor: '#00f', margin: '20px 0' }}
      >
        Div 3
      </div>
    </div>
  );
};

export default ScrollAnimation;
