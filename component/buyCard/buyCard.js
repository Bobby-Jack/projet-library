import styles from './buyCard.module.css'
import Image from 'next/image'
export default function BuyCard({children}) {
    return(
        <div className={styles.card}>
            <div className={styles.left}>
                <Image className={styles.image} src={children}/>
            </div>
            <div className={styles.right}>
                <p className={styles.greenBold}>SALE UP TO 15%</p>
                <p className={styles.content}>Innovation in Education (Hardcover)</p>
                <p>Starting at: <span className={styles.green}>$65.09</span></p>
            </div>
        </div>
    )
}