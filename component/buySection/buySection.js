import BuyCard from '../buyCard/buyCard'
import styles from './buySection.module.css'
import img1 from '../../public/images/saleUp/01.jpg'
import img2 from '../../public/images/saleUp/02.jpg'
export default function BuySection() {
    return(
        <div className={styles.section}>
            <BuyCard children={img1}/>
            <BuyCard children={img2}/>
        </div>
    )
}