import React from 'react';
import styles from './Projects.module.css'; // Assurez-vous que vous avez créé ce module CSS

// Exemples de données de projet, peut-être à charger depuis un fichier JSON
const projectsData = [
  {
    title: "Projet 1",
    description: "Description du projet 1.",
    image: "/path/to/image1.jpg",
    githubLink: "https://github.com/toncompte/projet1"
  },
  {
    title: "Projet 2",
    description: "Description du projet 2.",
    image: "/path/to/image2.jpg",
    githubLink: "https://github.com/toncompte/projet2"
  },
  {
    title: "Projet 3",
    description: "Description du projet 3.",
    image: "/path/to/image3.jpg",
    githubLink: "https://github.com/toncompte/projet3"
  },
  // Ajoute d'autres projets ici si nécessaire
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>Projets</h2>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <a 
            key={index} 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.projectLink}
          >
            <div className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
