import React from 'react';
import styles from './Projects.module.css';

// Import des images locales
import portfolioImg from '../assets/img/projects/moi.png';
import iaPuissance4Img from '../assets/img/projects/puissance4.png';
import iaRocketLeagueImg from '../assets/img/projects/RL.png';
import ytbMp3Img from '../assets/img/projects/ytmp3.png';
import jeuxreact from '../assets/img/projects/jeux-react.png';

// Données des projets

const projectsData = [
  {
    title: "Portfolio React",
    description: "Un site portfolio personnel réalisé avec React, CSS Modules et hébergé sur GitHub Pages. Il présente mes compétences, projets et un formulaire de contact.",
    image: portfolioImg,
    githubLink: "https://github.com/Akunesquik/Portfolio-R"
  },
  {
    title: "Jeux React",
    description: "Une collection de jeux classiques (Morpion, Puissance 4, Snake) développés en React avec gestion avancée des états, interface responsive et déploiement sur GitHub Pages. ",
    image: jeuxreact,
    githubLink: "https://akunesquik.github.io/jeux-react/"
  },
  {
    title: "IA Puissance 4 (PFE)",
    description: "Un projet de fin d'études où j'ai développé une intelligence artificielle jouant à Puissance 4. L'accent a été mis sur la stratégie, les heuristiques et la recherche de performance.",
    image: iaPuissance4Img,
    githubLink: "https://github.com/Akunesquik/Puissance4IA"
  },
  {
    title: "IA Rocket League",
    description: "Une IA créée pour simuler des décisions stratégiques dans le jeu Rocket League. Inspirée par mes +300 heures de jeu, elle m’a permis de mêler passion et code.",
    image: iaRocketLeagueImg,
    githubLink: "https://github.com/Akunesquik/BotRL"
  },
  {
    title: "YouTube MP3 Downloader",
    description: "Application desktop pour télécharger des vidéos YouTube en MP3. Conçue pour moi et ma famille avec un installeur personnalisé pour une installation sur plusieurs machines.",
    image: ytbMp3Img,
    githubLink: "https://github.com/Akunesquik/Ytmp3"
  },
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
