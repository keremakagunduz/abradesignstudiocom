// src/components/ProjectCard/ProjectCard.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Carousel/carousel.module.css';


const imageLoader = (src, width, quality) => {
  return `${src}?format=auto${quality ? `&quality=${quality}` : ''}&width=${width}`;
};

export default function ProjectCard({ projects = [] }) {
  const cardRef = useRef(null);

  const resizeItem = () => {
    if (!cardRef.current) return;

    // the <ul> that holds the grid
    const grid = cardRef.current.closest('ul');
    if (!grid) return;

    const rowHeight = parseInt(
      getComputedStyle(grid).getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('gap'));

    const itemHeight = cardRef.current.getBoundingClientRect().height;
    const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));

    const li = cardRef.current.parentElement;
    if (li) li.style.gridRowEnd = `span ${rowSpan}`;
  };

  useEffect(() => {
    resizeItem();
    window.addEventListener('resize', resizeItem);
    return () => window.removeEventListener('resize', resizeItem);
  }, [projects]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openAt = (idx) => {
  console.log('Opening at index:', idx);
  console.log('Projects:', projects);
    setCurrentIdx(idx);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () =>
    setCurrentIdx((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setCurrentIdx((i) => (i === projects.length - 1 ? 0 : i + 1));

return (
<>
{projects.map((project, idx) => {
  const isSketchbook = project.categories && project.categories.length > 0 && project.categories[0].id === 4;
  return (
    <>
    <li className={styles.item}>
      <article className={styles.card} ref={cardRef}>
        <div className={styles.thumbnail}>
          <Link to={`/projects/${project.id}`} aria-label={project.title}>
            <img
              src={imageLoader(project.cover_image, 400)}
              alt={project.title}
              loading="lazy"
            />
          </Link>
        </div>

        <Link
          to={`/projects/${project.id}`}
          aria-label={project.title}
          style={{ color: 'inherit', textDecoration: 'none' }}>

          <div className={styles.overlay}>
            <div>
              <h3 className={styles.title}>
                  {project.title}
              </h3>
              {project.subtitle && (<p className={styles.subtitle}>{project.subtitle}</p>)}
            </div>
          </div>
        
        </Link>
      </article>
    </li>
        
        </>
      );
      })}

    </>
  );
}