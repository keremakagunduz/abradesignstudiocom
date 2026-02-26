import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Carousel/carousel.module.css'; // Adjust according to your styles


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

  return (
    <>
        <article className={styles.card}>
          <div className={styles.thumbnail + "absolute w-[150vh] flex justify-between text-[3rem]"}>
      <div className={styles.navigation + "w-full justify-center pt-24 pb-24 flex"}>
        <button onClick={goToPrevious} className={styles.navButton}>&lt;</button>
        <button onClick={goToNext} className={styles.navButton}>&gt;</button>
      </div>
              <img
                src={imageLoader(projects[currentIndex].cover_image, 1200)}
                alt={projects[currentIndex].title}
                loading="lazy"
              />
          </div>
        </article>
      

    
    </>
  );
};

export default Carousel;
