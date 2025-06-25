import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2>{project.title}</h2>
        {project.tags && project.tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <img src={project.image} alt={project.title} className={styles.image} />
        <p>{project.description}</p>
        <div className={styles.buttonsContainer}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Voir le GitHub
            </a>
          )}
          {project.hostlink && (
            <a
              href={project.hostlink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Voir le site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
