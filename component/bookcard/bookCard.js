import styles from './bookCard.module.css'
import {FaStar, FaHeart, FaBook} from 'react-icons/fa'
export default function BookCard({data, alt}) {
    return(
        <div className={styles.card}>
            <div className={styles.heart}><FaHeart/></div>
            <div className={styles.goTo}><FaBook/></div>
            <div className={styles.info}>
                <span className={styles.title}>{data.title}</span>
                <span>By:<i>{data.authors}</i></span>
                <div className={styles.rating}>
                    <span>{data.rating}/5 <FaStar className={styles.star}/></span>
                    <span>On {data.rating_count} advises</span>    
                </div>
                
                
            </div>
            <img  className={styles.img} src={data.image_url}/>
        </div>
    )
}