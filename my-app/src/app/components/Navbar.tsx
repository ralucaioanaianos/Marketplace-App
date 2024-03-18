import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <img  src="/icon.webp"></img>
              Dream Closet</Link>
            </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/add">Sell an item</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      );
};

export default Navbar