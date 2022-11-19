import styles from '../styles/Home.module.css'

export default function NavigationMenu() {
    return <div className={styles.threeColumns}>
  <a className={styles.nav} href="/">Home page</a>
  <a  className={styles.nav} href="/order-page">Orders </a>
   <a  className={styles.nav} href="">More</a>
    </div>;
  }