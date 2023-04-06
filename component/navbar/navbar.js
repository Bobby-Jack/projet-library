import styles from './navbar.module.css'
import { FaSearch, FaPhoneAlt } from 'react-icons/fa';

export default NavBar({main}) {
    return (
        <div className={styles.navbar}>
            <div className={styles.cote}>
                <div className={styles.burger}>
                    <div className={styles.burgerLittle}></div>
                    <div className={styles.burgerBig}></div>
                    <div className={styles.burgerLittle}></div>
                </div>
                <h2>BOOKSHELF.</h2>
            </div>
            {
                main ?
                <div className={style.center}>
                    <FaSearch className={styles.search}/>
                    <input className={styles.input} type="text" placeholder='Search your book here'/>
                </div>
                :
                null
            }
            
            <div className={styles.cote}>
                <span>
                    <FaPhoneAlt/>
                </span>
                <div></div>
            </div>
        </div>
    )
}