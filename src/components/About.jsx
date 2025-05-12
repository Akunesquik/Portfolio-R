import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
            <div className={styles.textContent}>
            <h2>À propos de moi</h2>
            <p>
                Fort d'une formation d'<strong>ingénieur en informatique</strong> avec une spécialisation en <strong>développement web</strong>, j'ai acquis une solide expertise dans la création de sites web réactifs, dynamiques et performants. Mon approche est orientée vers la qualité du code, l'expérience utilisateur et la performance des applications.
            </p>
            <p>
                Ce qui me distingue, c'est ma capacité à maîtriser toute la chaîne de développement, du front-end au back-end, et à travailler en étroite collaboration avec des équipes pour créer des produits qui répondent parfaitement aux besoins des utilisateurs finaux.
            </p>
            <p>
                Je suis également un fervent défenseur des bonnes pratiques de développement et de la montée en compétences continue. Ma passion pour le web se traduit par un apprentissage constant des nouvelles technologies. Actuellement, je me concentre sur l'amélioration de mes compétences en <strong>React</strong> et <strong>Symfony</strong>.
            </p>
            </div>

            <div className={styles.techSkills}>
            <div className={styles.skill}>
                <p><strong>HTML5</strong> pour la structuration sémantique et la mise en place de la base du site.</p>
                <i className="devicon-html5-plain-wordmark gray" title="HTML5"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>CSS3</strong> pour la mise en forme et la conception de designs responsives.</p>
                <i className="devicon-css3-plain-wordmark gray" title="CSS3"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>JavaScript</strong> pour rendre les pages interactives et dynamiques.</p>
                <i className="devicon-javascript-plain gray" title="JavaScript"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>React</strong> pour créer des interfaces utilisateur modernes et réactives.</p>
                <i className="devicon-react-original-wordmark gray" title="React"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>Node.js</strong> pour la création d'applications back-end performantes.</p>
                <i className="devicon-nodejs-plain-wordmark gray" title="Node.js"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>Symfony</strong> pour des applications PHP robustes et bien structurées.</p>
                <i className="devicon-symfony-original-wordmark gray" title="Symfony"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>PHP</strong> pour le développement back-end, notamment dans des projets à grande échelle.</p>
                <i className="devicon-php-plain gray" title="PHP"></i>
            </div>

            <div className={styles.skill}>
                <p><strong>MySQL</strong> pour gérer efficacement les bases de données relationnelles.</p>
                <i className="devicon-mysql-plain-wordmark gray" title="MySQL"></i>
            </div>
            </div>
        </div>
    </section>

  );
}

export default About;
