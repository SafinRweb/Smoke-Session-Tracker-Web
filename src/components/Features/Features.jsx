import styles from './Features.module.css';

const features = [
  { icon: '👥', title: 'Add the Whole Crew', desc: 'Invite everyone from the adda — no sign-ups needed, just names.' },
  { icon: '🚬', title: 'Log Per Person', desc: 'Tap to log each cigarette per person with the exact brand and price.' },
  { icon: '💰', title: 'Instant Bill Split', desc: "One tap and everyone's share is calculated — down to the taka." },
  { icon: '📋', title: 'Session History', desc: 'Review past sessions anytime. Who smoked what, who owes what.' },
  { icon: '🌙', title: 'Dark Mode Only', desc: 'Built for night-time addas. No blinding white screens.' },
  { icon: '📤', title: 'Share the Bill', desc: 'Share the bill breakdown instantly with your crew.' },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <h2 className={styles.heading} data-reveal>Everything You Need</h2>
      <p className={styles.sub} data-reveal>Simple tools for the realest problem at the adda</p>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div className={styles.card} key={i} data-reveal>
            <span className={styles.icon}>{f.icon}</span>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
