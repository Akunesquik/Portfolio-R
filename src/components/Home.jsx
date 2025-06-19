import React from 'react';
import styles from './Home.module.css'; // Importation du CSS module
import bouyguesLogo from '../assets/img/logos/Bouygues-logo.png';
import chanelLogo from '../assets/img/logos/Chanel-logo.png';
import societeGeneraleLogo from '../assets/img/logos/Société_Générale-logo.png';
import uimmLogo from '../assets/img/logos/UIMM-logo.png';
import leMondeLogo from '../assets/img/logos/Le_Monde-logo.png';
import moiImage from '../assets/img/moi.jpg'; // Importation de l'image

function Home() {
  return (
    <div>
      <div className={styles.wrapperHomeIntro}>
        <div>
          <h1>Alexis Fiolet</h1>
          <p>
            Je suis Alexis, un développeur web passionné par la création de
            solutions modernes et efficaces. Mon objectif est de concevoir des
            applications web interactives et intuitives en utilisant les
            technologies les plus récentes. Explorez mes projets et découvrez
            mon parcours.
          </p>
          <a  target="_blank" href="https://akunesquik.github.io/jeux-react/">Essayer mes jeux en Réact</a>
        </div>
        <div>
          <img src={moiImage} alt="Moi" />
        </div>
      </div>

      <div className={styles.centp}>
        <div className={styles.wrapperHomeCarousel}>
          <p>J'ai travaillé avec</p>
          <div className={styles.carousel}>
            <div className={styles.itemCarousel}>
              <img src={bouyguesLogo} alt="Logo Bouygues" height="55" />
            </div>
            <div className={styles.itemCarousel}>
              <img src={chanelLogo} alt="Logo Chanel" height="55" />
            </div>
            <div className={styles.itemCarousel}>
              <img
                src={societeGeneraleLogo}
                alt="Logo Société Générale"
                height="30"
              />
            </div>
            <div className={styles.itemCarousel}>
              <img src={uimmLogo} alt="Logo UIMM" height="50" />
            </div>
            <div className={styles.itemCarousel}>
              <img src={leMondeLogo} alt="Logo Le Monde" height="50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
