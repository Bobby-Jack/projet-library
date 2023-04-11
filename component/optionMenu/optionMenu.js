import Link from 'next/link';
import styles from './optionMenu.module.css'
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/router';

export default function OptionMenu({active, closeFunction}) {
    const router = useRouter()
    function goTo(path) {
        router.push(path)
    }
    return(
        <>
        <div className={!active?styles.modal+' '+styles.off:styles.modal} onClick={closeFunction}>
           
        </div>
        <div className={!active?styles.menu+' '+styles.off:styles.menu}>
                <div className={styles.header}>
                    <h3>BOOKSHELF</h3>
                    <h3 className={styles.quit} onClick={closeFunction}><RxCross2/></h3>
                </div>
                <div className={styles.content}>
                    <Link href='/mainPage'>Main page</Link>
                    <span onClick={()=>{goTo('allBookPage')}}>All books</span>
                    <Link href='/'>return to Home</Link>
                </div>
            </div>
        </>
        
    )
}