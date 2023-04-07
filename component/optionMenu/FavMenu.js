import Link from 'next/link';
import styles from './optionMenu.module.css'
import { RxCross2 } from "react-icons/rx";
import {FaHeartBroken} from "react-icons/fa"
export default function FavMenu({active, closeFunction}) {
    return(
        <>
        <div className={!active?styles.modal2+' '+styles.off:styles.modal2} onClick={closeFunction}>
           
        </div>
        <div className={!active?styles.menu2+' '+styles.off:styles.menu2}>
                <div className={styles.header+' '+styles.headerRight}>
                    <h3 className={styles.quit} onClick={closeFunction}><RxCross2/></h3>
                    <h3>Favoris</h3>
                    <div></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.noFav}>
                        <FaHeartBroken className={styles.veryBig}/>
                        <h3>
                            no fav for now
                        </h3>
                    </div>
                </div>
            </div>
        </>
        
    )
}