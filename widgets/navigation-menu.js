import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function NavigationMenu() {
    return <div className={styles.threeColumns}>
  <Link className={styles.nav} href="/">Home page</Link>
  <Link  className={styles.nav} href="/order-page">Orders </Link>
   <Link  className={styles.nav} href="">More</Link>
    </div>;
  }