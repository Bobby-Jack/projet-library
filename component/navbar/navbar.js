import styles from './navbar.module.css'
import { FaSearch, FaPhoneAlt, FaHeart } from 'react-icons/fa';

export default function NavBar({main, optionFunction, favFunction, inputVal, setInputVal}) { 
    return (
        <div className={styles.navbar}>
            <div className={styles.cote}>
                <div className={styles.burger} onClick={optionFunction}>
                    <div className={styles.burgerLittle}></div>
                    <div className={styles.burgerBig}></div>
                    <div className={styles.burgerLittle}></div>
                </div>
                <h2 className={styles.title}>BOOKSHELF.</h2>
            </div>
            {
                main ?
                <div className={styles.center}>
                    <FaSearch className={styles.search}/>
                    <input value={inputVal}
                            onChange={(e)=>{setInputVal(e.target.value.toLowerCase())}}
                            className={styles.input}
                            type="text"
                            placeholder='Search your book here'/>
                </div>
                :
                null
            }
            
            <div className={styles.cote}>
                <div className={styles.phone+' '+styles.title}>
                    <FaPhoneAlt/>
                    <a href="tel:+0485313406">0485313406</a>
                </div>
                <div className={styles.favBtn} onClick={favFunction}>
                    <FaHeart/>
                </div>
            </div>
        </div>
    )
 }


 