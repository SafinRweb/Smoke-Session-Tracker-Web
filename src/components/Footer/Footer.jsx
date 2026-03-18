import styles from './Footer.module.css';
import logo from '../../assets/images/tracker_logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div>
          <div className={styles.brandHeader}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h3 className={styles.brandTitle}>Smoke Session Tracker</h3>
          </div>
          <p className={styles.brandDesc}>
            The easiest way to track shared cigarette bills at the adda. No sign-ups, no hassle — just fair splits.
          </p>
          <p className={styles.tagline}>Made with 🔥 for the addas of Bangladesh</p>
        </div>

        {/* Developer card */}
        <div className={styles.devCard}>
          <div className={styles.devHeader}>
            <div>
              <div className={styles.devName}>Safin Rahman</div>
              <div className={styles.devRole}>Developer &amp; Designer</div>
            </div>
          </div>
          <div className={styles.devLinks}>
            <a
              href="https://safinrahman.pro.bd"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              <span className={styles.devLinkIcon}>🌐</span> Website
            </a>
            <a href="mailto:safinr.gg@gmail.com" className={styles.devLink}>
              <span className={styles.devLinkIcon}>✉</span> Business / Collab
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <span className={styles.copy}>© 2025 Smoke Session Tracker</span>
        <span className={styles.versionPill}>v1.0.0</span>
      </div>
    </footer>
  );
}
