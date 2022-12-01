import styles from './features.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'



export default function Features() {
    return( 
    <div className={styles.card}>
          <Image
              src={logo}
              alt="Logo"
              width={80} automatically provided
              height={60} automatically provided
            />
        <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>Card title</h5>
        <p className={styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className={styles.btnPrimary}>Go somewhere</a>
        </div>
      </div>  
  )
  
  }