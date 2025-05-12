import styles from './Navbar.module.css';

import glogo from '../assets/img/logos/github-logo.png';
import llogo from '../assets/img/logos/linkedin-logo.png';

function Navbar() {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><a className={styles.navLink} href="#home">Accueil</a></li>
                <li><a className={styles.navLink} href="#about">À propos</a></li>
                <li><a className={styles.navLink} href="#projects">Projets</a></li>
                <li><a className={styles.navLink} href="#CV">CV</a></li>
            </ul>
            <div className={styles.logoContainer}>
                <a href="https://www.linkedin.com/in/alexis-fiolet/">
                    <img src={llogo} alt="Logo 1" className={styles.logo} />
                </a>
                <a href="https://github.com/Akunesquik">
                    <img src={glogo} alt="Logo 2" className={styles.logo} />
                </a>
            </div>
        </nav>
    </div>
    
  );
}

export default Navbar;
