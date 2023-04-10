import styles from './navbar.module.css'
import { FaSearch, FaPhoneAlt, FaHeart } from 'react-icons/fa';

export default function NavBar({main, optionFunction, favFunction}) { 
    return (
        <div className={styles.navbar}>
            <div className={styles.cote}>
                <div className={styles.burger} onClick={optionFunction}>
                    <div className={styles.burgerLittle}></div>
                    <div className={styles.burgerBig}></div>
                    <div className={styles.burgerLittle}></div>
                </div>
                <h2>BOOKSHELF.</h2>
            </div>
            {
                main ?
                <div className={styles.center}>
                    <FaSearch className={styles.search}/>
                    <input className={styles.input} type="text" placeholder='Search your book here'/>
                </div>
                :
                null
            }
            
            <div className={styles.cote}>
                <div className={styles.phone}>
                    <FaPhoneAlt/>
                    <a href="tel:+0485313406">0485313406</a>
                </div>
                <div onClick={favFunction}>
                    <FaHeart/>
                </div>
            </div>
        </div>
    )
 }


 