import styles from './Brands.module.css';

const brands = [
  { name: 'Royal', price: '7tk' },
  { name: 'Camel', price: '10tk' },
  { name: 'Maxim', price: '10tk' },
  { name: 'Oris', price: '10tk' },
  { name: 'Lucky', price: '12tk' },
  { name: 'Gold Leaf', price: '15tk' },
  { name: 'Benson', price: '20tk' },
  { name: 'Marlboro Red', price: '20tk' },
  { name: 'Marlboro Advance', price: '20tk' },
];

export default function Brands() {
  return (
    <section className={styles.section} id="brands">
      <h2 className={styles.heading} data-reveal>Supported Brands</h2>
      <p className={styles.sub} data-reveal>All 9 brands with local addakhana prices</p>
      <div className={styles.grid}>
        {brands.map((b, i) => (
          <div className={styles.card} key={i} data-reveal>
            <div className={styles.name}>{b.name}</div>
            <div className={styles.price}>{b.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
