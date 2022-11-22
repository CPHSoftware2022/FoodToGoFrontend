import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationMenu from '../widgets/navigation-menu'
import { useState,useEffect } from 'react'

export default function Home() {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch('/api/connectToSQL');
      const data = await res.json();
      setItem(data[0]);
      console.log(data);
    };
    return () => {
      fetchItem();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationMenu/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
        </h1>
        <h1 className={styles.subtitle}>Food To Go</h1>
        
        { item.restaurant_name != null&&
        <div className={styles.dailyItem}> 
        
        <h1 className={styles.featuredItem}>Featured Item</h1>
        
        <table>
            <thead>
            <tr>
              <th className={styles.th}>Item name</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Restaurant Name</th>
              <th className={styles.th}>Phone</th>

            </tr>
            </thead>
            <tr>   
              <td className={styles.td}>{item.item_name}</td>
              <td className={styles.td}>{item.price}</td>
              <td className={styles.td}>{item.restaurant_name}</td>
              <td className={styles.td}>{item.phone}</td>
            </tr>
        </table>
        </div>
}
        
    
      <div className={styles.block}></div>
        
      </main>
      


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            BSH Productions
          </span>
        </a>
      </footer>
    </div>
  )
}
