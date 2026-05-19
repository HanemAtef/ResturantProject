// import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div>
          <footer className={styles.mainFooter}>
      <div className={styles.footerBrand}>Warm Gourmet</div>
      <nav className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
        <a href="#">Careers</a>
      </nav>
      <div className={styles.copyright}>
        © 2024 Warm Gourmet. All rights reserved.
      </div>
    </footer>
    </div>
  )
}
