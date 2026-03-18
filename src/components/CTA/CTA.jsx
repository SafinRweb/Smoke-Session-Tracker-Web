import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.blob} />
      <div className={styles.inner} data-reveal>
        <h2 className={styles.heading}>Ready to End the Bill Drama?</h2>
        <p className={styles.sub}>
          Open the app, add the crew, and let the numbers do the talking. It's free, it's fast, it's fair.
        </p>
        <a href="https://github.com/SafinRweb/Smoke-Session-Tacker/releases/download/v1.1/SmokeTracker-v1.1.0.apk" className={styles.btn} download="SmokeTracker-v1.1.0.apk">Download</a>
      </div>
    </section>
  );
}
