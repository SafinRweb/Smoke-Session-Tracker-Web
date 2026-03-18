import { useRef, useState, useEffect } from 'react';
import styles from './AppPreview.module.css';

import screen1 from '../../assets/images/home.jpg';
import screen2 from '../../assets/images/session.jpg';
import screen3 from '../../assets/images/add_members.jpg';
import screen4 from '../../assets/images/history.jpg';

const screens = [screen1, screen2, screen3, screen4];
const labels = ['Home', 'Session', 'Add Members', 'History'];

export default function AppPreview() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const slideWidth = el.querySelector(`.${styles.slide}`)?.offsetWidth || 1;
      const gap = 16;
      const idx = Math.round(scrollLeft / (slideWidth + gap));
      setActive(Math.min(idx, screens.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const slide = el.querySelectorAll(`.${styles.slide}`)[i];
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section className={styles.section} id="preview">
      <h2 className={styles.heading} data-reveal>See It in Action</h2>
      <p className={styles.sub} data-reveal>Swipe through the real app screens</p>
      <div className={styles.carousel} ref={ref} data-reveal>
        {screens.map((src, i) => (
          <div className={styles.slide} key={i}>
            <div className={styles.phone}>
              <img src={src} alt={labels[i]} className={styles.screen} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {screens.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.active : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
