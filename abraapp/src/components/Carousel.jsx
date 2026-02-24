import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '.Carousel/carousel.module.css'; // Adjust according to your styles
import imageLoader from './imageLoader'; // Adjust according to your image loader

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
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <article className={styles.card}>
          <div className={styles.thumbnail}>
            <Link to={`/projects/${projects[currentIndex].id}`} aria-label={projects[currentIndex].title}>
              <img
                src={imageLoader(projects[currentIndex].cover_image, 800)}
                alt={projects[currentIndex].title}
                loading="lazy"
              />
            </Link>
          </div>

          <div className={styles.overlay}>
            <div>
              <h3 className={styles.title}>
                {projects[currentIndex].title}
              </h3>
              {projects[currentIndex].subtitle && (
                <p className={styles.subtitle}>{projects[currentIndex].subtitle}</p>
              )}
            </div>
          </div>
        </article>
      </div>
      
      <div className={styles.navigation}>
        <button onClick={goToPrevious} className={styles.navButton}>Prev</button>
        <button onClick={goToNext} className={styles.navButton}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
