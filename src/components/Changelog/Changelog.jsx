import styles from './Changelog.module.css';

const versions = [
  {
    version: 'v1.0.0',
    badge: 'Latest',
    badgeClass: 'badgeLatest',
    changes: [
      { type: 'NEW', cls: 'tagNew', text: 'Full bill split calculation engine' },
      { type: 'NEW', cls: 'tagNew', text: '9 cigarette brands with local prices' },
      { type: 'NEW', cls: 'tagNew', text: 'Session history with review' },
      { type: 'NEW', cls: 'tagNew', text: 'Dark mode UI across the app' },
      { type: 'FIX', cls: 'tagFix', text: 'Price rounding now accurate to 1 taka' },
      { type: 'UPD', cls: 'tagUpd', text: 'Redesigned home screen layout' },
    ],
  },
  {
    version: 'v0.9.0',
    badge: 'Beta',
    badgeClass: 'badgeBeta',
    changes: [
      { type: 'NEW', cls: 'tagNew', text: 'Initial session tracking flow' },
      { type: 'NEW', cls: 'tagNew', text: 'Add members by name' },
      { type: 'NEW', cls: 'tagNew', text: 'Basic brand selection (5 brands)' },
      { type: 'FIX', cls: 'tagFix', text: 'Fixed crash on empty session' },
      { type: 'UPD', cls: 'tagUpd', text: 'Improved member input validation' },
    ],
  },
];

export default function Changelog() {
  return (
    <section className={styles.section} id="changelog">
      <h2 className={styles.heading} data-reveal>Version History</h2>
      <p className={styles.sub} data-reveal>What&apos;s new and what&apos;s next</p>
      <div className={styles.list}>
        {versions.map((v, i) => (
          <div className={styles.version} key={i} data-reveal>
            <div className={styles.versionHeader}>
              <span className={styles.versionTag}>{v.version}</span>
              <span className={`${styles.badge} ${styles[v.badgeClass]}`}>{v.badge}</span>
            </div>
            <div className={styles.changes}>
              {v.changes.map((c, j) => (
                <div className={styles.change} key={j}>
                  <span className={`${styles.tag} ${styles[c.cls]}`}>{c.type}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.roadmap} data-reveal>
        <div className={styles.roadmapTitle}>🗺️ Roadmap — v1.1.0</div>
        <p className={styles.roadmapDesc}>
          Export session as image · Custom brand prices · Multi-session comparison · Bengali language toggle
        </p>
      </div>
    </section>
  );
}
