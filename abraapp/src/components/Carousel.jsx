import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Carousel/carousel.module.css'; // Adjust according to your styles
import ScrollToBottom from '../components/ScrollToBottom';


const imageLoader = (src, width, quality) => {
  return `${src}?format=auto${quality ? `&quality=${quality}` : ''}&width=${width}`;
};


const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Change image every 3 seconds
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [projects.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

    const scrollToElement = () => {
    const element = document.getElementById('about-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <article className="items-center">
          <div className="relative h-screen flex justify-center text-[3rem]">
      
            <img
              src={imageLoader(projects[currentIndex].cover_image, 1200)} // Fallback for older browsers
              srcSet={`
                ${imageLoader(projects[currentIndex].cover_image, 400)} 400w,
                ${imageLoader(projects[currentIndex].cover_image, 800)} 800w,
                ${imageLoader(projects[currentIndex].cover_image, 1200)} 1200w,
                ${imageLoader(projects[currentIndex].cover_image, 1600)} 1600w
              `}
              sizes="(max-width: 400px) 400px,
                    (max-width: 800px) 800px,
                    (max-width: 1200px) 1200px,
                    1600px" // Default for larger screens
              alt={projects[currentIndex].title}
              loading="lazy"
              className="w-full h-full object-cover"
            />

          </div>
        </article>

      <div className="absolute inset-0 bg-white bg-opacity-50 flex w-full h-fit place-self-center pt-24 pb-24">
        <div className="flex absolute self-center justify-between text-4xl w-full h-full">
          <button onClick={goToPrevious} className={styles.navButton}>&lt;</button>
          <ScrollToBottom />
          <button onClick={goToNext} className={styles.navButton}>&gt;</button>
        </div>
        <img
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Abra_Logo_png.png", 800)}
            alt="Abra Design Studio"
            className="max-w-50 mx-auto"
        />

       </div>
      
      <div>
        <button onClick={scrollToElement}>Biz Kimiz?</button>
      </div>


    
    </>
  );
};

export default Carousel;
