import styles from './HowItWorks.module.css';

const steps = [
  { num: 1, title: 'Add the Crew', desc: 'Type in the names of everyone at the adda. No accounts, no fuss.' },
  { num: 2, title: 'Log Every Cigarette', desc: 'Pick who smoked what brand. The app tracks counts and prices in real time.' },
  { num: 3, title: 'Review & Pay Up', desc: 'Hit calculate — see exactly who owes how much. No more guessing.' },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <h2 className={styles.heading} data-reveal>How It Works</h2>
      <p className={styles.sub} data-reveal>Three steps. Zero excuses.</p>
      <div className={styles.timeline} data-reveal>
        {steps.map((s) => (
          <div className={styles.step} key={s.num}>
            <div className={styles.number}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
