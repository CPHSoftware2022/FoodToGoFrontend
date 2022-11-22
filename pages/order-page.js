import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationMenu from '../widgets/navigation-menu'
import { useState,useEffect } from 'react'
export default function OrderPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      start: "2021-10-01",
      end: "2021-10-02",
      price: 100
    },
    {
      id: 2,
      start: "2021-10-01",
      end: "2021-10-02",
      price: 50,
    },
  ]);
 

  return (
    <div className={styles.container}>
      <NavigationMenu/>
      <main className={styles.notmain}>
        <h1 className={styles.subtitle}>Your orders</h1>
        <table className={styles.table}>
          <thead>
          <tr>
            <th className={styles.th}>Order ID</th>
            <th className={styles.th}>Order Start</th>
            <th className={styles.th}>Order End</th>
          </tr>
          </thead>
          <tbody>

          {orders.map((order) => (
            <tr key={order.id}>
              <td className={styles.td}>{order.id}</td>
              <td className={styles.td}>{order.start}</td>
              <td className={styles.td}>{order.end}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button className={styles.button}>Give Feedback on latest Order</button>
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
