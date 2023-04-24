import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default async function Home() {
  return (
    <div className={styles.screen}>
      <div className="container">
        <div>
          <h1 className={styles.title}>Hi, my name is Rostyk!</h1>
        </div>

        <div>
          <Link href="/blog" className={styles.link}>
            Checkout my Blog
          </Link>
        </div>

        <div>
          <Link href="/contact" className={styles.link}>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
