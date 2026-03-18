import MarqueeLib from "react-fast-marquee";
import styles from './Ticker.module.css';

const Marquee = MarqueeLib.default ? MarqueeLib.default : MarqueeLib;

const items = [
  'No more bill fights',
  'Track every cigarette',
  'Split the bill fairly',
  'Save session history',
  '9 brands supported',
  'Totally free',
  'Maf kor bhai! 🙏',
];

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <Marquee autoFill={true} speed={40} gradient={false}>
        {items.map((text, i) => (
          <span className={styles.item} key={i}>
            {text} &nbsp;·&nbsp;
          </span>
        ))}
      </Marquee>
    </div>
  );
}
