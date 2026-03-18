import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/tracker_logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <img src={logo} alt="Smoke Session Tracker" className={styles.logo} />
        <span className={styles.brandName}>Smoke Tracker</span>
      </div>
      <a href="https://github.com/SafinRweb/Smoke-Session-Tacker/releases/download/v1.1/SmokeTracker-v1.1.0.apk" className={styles.cta} download="SmokeTracker-v1.1.0.apk">Download</a>
    </nav>
  );
}
