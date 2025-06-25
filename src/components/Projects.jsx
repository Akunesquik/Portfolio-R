import React, { useState } from 'react';
import styles from './Projects.module.css';
import Modal from './Modal';

// Import des images locales
import portfolioImg from '../assets/img/projects/moi.jpg';
import iaPuissance4Img from '../assets/img/projects/puissance4.png';
import iaRocketLeagueImg from '../assets/img/projects/RL.png';
import ytbMp3Img from '../assets/img/projects/ytmp3.png';
import jeuxreact from '../assets/img/projects/jeux-react.png';
import barber from '../assets/img/projects/barber.jpg';

// Données des projets

const projectsData = [
  {
    title: "Portfolio React",
    tags:["React", "CSS Modules", "GitHub Pages"],
    description: "Un site portfolio personnel réalisé avec React, CSS Modules et hébergé sur GitHub Pages. Il présente mes compétences, projets et un formulaire de contact.",
    image: portfolioImg,
    githubLink: "https://github.com/Akunesquik/Portfolio-R",
    hostlink:""
  },
  {
    title: "Jeux React",
    tags:["React", "CSS Modules", "GitHub Pages"],
    description: "Une collection de jeux classiques (Morpion, Puissance 4, Snake) développés en React avec gestion avancée des états, interface responsive et déploiement sur GitHub Pages. ",
    image: jeuxreact,
    githubLink: "https://github.com/Akunesquik/jeux-react",
    hostlink:"https://akunesquik.github.io/jeux-react/"
  },
  {
    title: "Study Connect",
    tags:["Symfony", "HTML", "CSS"],
    description: "Projet réalisé en Symfony avec des amis afin de résoudre un problème que recontre les coiffeurs, la file d'attente. Ce projet permettrai d'avoir une file d'attente virtuel afin d'annoncer aux clients, en temps réels, combien de temps avant de pouvoir passer avec un coiffeur. ",
    image: barber,
    githubLink: "https://github.com/Akunesquik/studyconnect.git",
    hostlink:""
  },
  {
    title: "IA Puissance 4 (PFE)",
    tags:["Python", "Tensorflow", "IA"],
    description: "Un projet de fin d'études où j'ai développé une intelligence artificielle jouant à Puissance 4. L'accent a été mis sur la stratégie, les heuristiques et la recherche de performance.",
    image: iaPuissance4Img,
    githubLink: "https://github.com/Akunesquik/Puissance4IA",
    hostlink:""
  },
  {
    title: "IA Rocket League",
    tags:["Python", "Tensorflow", "IA"],
    description: "Une IA créée pour simuler des décisions stratégiques dans le jeu Rocket League. Inspirée par mes +300 heures de jeu, elle m’a permis de mêler passion et code.",
    image: iaRocketLeagueImg,
    githubLink: "https://github.com/Akunesquik/BotRL",
    hostlink:""
  },
  {
    title: "YouTube MP3 Downloader",
    tags:["Python"],
    description: "Application desktop pour télécharger des vidéos YouTube en MP3. Conçue pour moi et ma famille avec un installeur personnalisé pour une installation sur plusieurs machines.",
    image: ytbMp3Img,
    githubLink: "https://github.com/Akunesquik/Ytmp3",
    hostlink:""
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className={styles.projectsSection}>
      <h2>Projets personnels</h2>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
               {/* Premier tag seulement */}
                {project.tags && project.tags.length > 0 && (
                  <span className={styles.firstTag}>{project.tags[0]}</span>
                )}
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

export default Projects;