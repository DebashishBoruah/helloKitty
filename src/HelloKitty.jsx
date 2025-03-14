import React, { useState, useEffect } from 'react';
import './HelloKittyDesign.css';
import traditionalVideo from '/src/assets/traditional.mp4';
import girlImage from './assets/IMG_6986.PNG';
import kittyIcon from './assets/kitty.png';
import heartIcon from './assets/e197de3a15ae6d541b8c331436dca89e-removebg-preview.png';
import helloKittyIcon from './assets/17fa9cac4272d32b56270cf2f3bc9c70.jpg';
import catImage from './assets/cat.jpg';
import birthdayImage from './assets/6EC019F1-45F6-4659-9202-9078E3AEAA23.JPG';
import kankanImage from './assets/kankan.png';
import kitty6 from './assets/kitty6.jpg';
import kitty7 from './assets/kitty7.jpg';
import kitty12 from './assets/kitty12.jpg';
import kitty2 from './assets/kitty2.jpg';
import kitty9 from './assets/kitty9.jpg';
import kitty11 from './assets/kitty11.jpg';
import kitty13 from './assets/kitty13.jpg';
import kitty5 from './assets/kitty5.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';


const HelloKitty = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration
          offset: 100, // When to trigger animation
          once: true, // Only animate once
        });
      }, []);
  // Set the date when you first talked (YYYY, MM-1, DD)
  const meetDate = new Date(2024, 11, 29); // December 29, 2024
  const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesKitty = [
    kitty6, kitty7, kitty12, kitty2, kitty9, kitty11, kitty13, kitty5
];
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesKitty.length);
    }, 3000);
    return () => clearInterval(interval);
}, [imagesKitty.length]);


  // Calculate the time since you met
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now - meetDate;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeSince({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hello-kitty-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="title-container">
          <h1 className="title-text">To The</h1>
          <img 
            src={helloKittyIcon} // Update this path
            alt="Hello Kitty" 
            className="hello-kitty-icon"
          />
        </div>
        <h2 className="subtitle-text">Most Prettiest Girl</h2>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <div className="profile-image-container">
          <img 
            src={girlImage} 
            alt="Girl" 
            className="profile-image"
          />
        </div>
        
        {/* Hello Kitty icons */}
        <div className="kitty-icon-bottom-left">
          <img 
            src={kittyIcon} // Update this path
            alt="Hello Kitty icon" 
            className="kitty-small-icon"
          />
        </div>
        <div className="heart-icons-bottom-right">
          <img 
            src={heartIcon}
            alt="Heart icon" 
            className="heart-icon"
          />
        </div>
      </div>

      {/* Date Section */}
      <div className="date-section">
        <p className="date-label">The date when we first talked</p>
        <p className="date-value">29-12-2024</p>
      </div>

      {/* First Chat Section */}
      <div className="chat-section">
        <h2 className="chat-title" data-aos="fade-up">
          <span className="chat-title-black">Our </span>
          <span className="chat-title-purple">First</span>
          <span className="chat-title-black"> Chat</span>
        </h2>
      </div>

      <div className="chat-section">
        <div className="chat-bubble sent" data-aos="fade-left">Attend kriba this time?</div>
        <div className="chat-bubble received" data-aos="fade-right">Bhabisu</div>
        <div className="chat-bubble received" data-aos="fade-right">But Mur lgt jabole kunu nai</div>
        <div className="chat-bubble received" data-aos="fade-right">TMI?</div>
      </div>

       
      
       {/* Header Section */}
       <div className="header-section">
        <img 
          src={catImage} 
          alt="Cute Cat" 
          className="cute-cat"
        />
        <h2 className="header-title">The First Pic You Shared With Me</h2>
      </div>

      {/* Image Section */}
      <div className="image-container" data-aos="zoom-in-up">
        <img 
          src={birthdayImage}
          alt="21st Birthday" 
          className="birthday-image"
        />
      </div>
      <p className="caption1">It was a pic of your 21st birthday</p>

   {/* Time Since We Met (Optional) */}
   <div className="timer-section">
        <h3 className="timer-title">Time Since We Met</h3>
        <div className="timer-container">
          <div className="timer-item">
            <span className="timer-value">{timeSince.days}</span>
            <p className="timer-label">Days</p>
          </div>
          <div className="timer-item">
            <span className="timer-value">{timeSince.hours}</span>
            <p className="timer-label">Hours</p>
          </div>
          <div className="timer-item">
            <span className="timer-value">{timeSince.minutes}</span>
            <p className="timer-label">Minutes</p>
          </div>
          <div className="timer-item">
            <span className="timer-value">{timeSince.seconds}</span>
            <p className="timer-label">Seconds</p>
          </div>
        </div>
      </div>
      
    <div className='kankan-image' >
        <img src={kankanImage} alt="kankan" data-aos="zoom-out"/>
    </div>
    <div className="date-section">
        <p className="date-label">Kankan ka Mommy</p>
      </div>
    <div className="slideshow-container">
        <img 
          src={images[currentImageIndex]} 
          alt="Slideshow Image" 
          className="slideshow-image"
        />
      </div>
       {/* Hello Kitty Section */}
       <div className="hello-kitty-section" >
        <h2 className="hello-kitty-title" data-aos="fade-up">She is a <span className="hello-kitty-highlight">HELLO KITTY</span> girl</h2>
        <div className="hello-kitty-images">
          <img src={kitty6} alt="Hello Kitty 1" className="kitty-image" />
          <img src={kitty7} alt="Hello Kitty 2" className="kitty-image" />
          <img src={kitty12} alt="Hello Kitty 3" className="kitty-image" />
          <img src={kitty2} alt="Hello Kitty Bow" className="kitty-image" />

          <img src={kitty9} alt="Hello Kitty 1" className="kitty-image" />
          <img src={kitty11} alt="Hello Kitty 2" className="kitty-image" />
          <img src={kitty13} alt="Hello Kitty 3" className="kitty-image" />
          <img src={kitty5} alt="Hello Kitty Bow" className="kitty-image" />
        </div>
      </div>
      
    <div className="traditional-outfit-section">
  <h2 className="traditional-title">When She Wears Traditional</h2>
  <div className="traditional-video-container">
  <video className="traditional-video" controls autoPlay loop muted playsInline>
  <source src={traditionalVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

  </div>
</div>
<h1 data-aos="fade-up">Tap to Open</h1>
<p>Tap on the envelope to open it</p>
    </div>
  );
};

export default HelloKitty;