import styles from './Hero.module.css';
import bg from '../../assets/images/home_bg.jpg';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img src={bg} alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={styles.inner} data-reveal>
        <h1 className={styles.headline}>
          Aibar bill na diye <span className={styles.orange}>palabi kothay?</span>
        </h1>
        <p className={styles.sub}>
          Track every cigarette, split the bill fairly, and end the addakhana chaos once and for all.
        </p>
        <div className={styles.buttons}>
          <a href="https://github.com/SafinRweb/Smoke-Session-Tacker/releases/download/v1.1/Smoke.Session.Tracker.apk" className={styles.primary} download="Smoke-Session-Tracker.apk">Download</a>
          <a href="#how-it-works" className={styles.ghost}>See How It Works</a>
        </div>
        <div className={styles.stats}>
          <span className={styles.stat}>
            <span className={styles.statValue}>9 Brands • Absolute Free</span>
          </span>
        </div>
      </div>
    </section>
  );
}
