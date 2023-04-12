import Link from 'next/link';
import styles from './optionMenu.module.css'
import { RxCross2 } from "react-icons/rx";
import {FaHeartBroken} from "react-icons/fa"
import {FaBook} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { removeFav } from '@/store/features/accountSlice'



import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../bookcard/bookCard';

export default function FavMenu({active, closeFunction}) {
    const connected = useSelector((state)=>state.account.connected)
    const connectedAccount = useSelector((state)=>state.account.connectedAccount)
    const dispatch = useDispatch()
    const router = useRouter()
    function goTo(id) {
        router.push('/book/'+id)
    }
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
                    
                        {
                            connected ?
                            connectedAccount.fav.map((book)=>(
                                    <div className={styles.miniCard}>
                                        <div className={styles.removeFav} onClick={()=>{dispatch(removeFav(book.id))}}><FaHeartBroken/></div>
                                        <div className={styles.goTo} onClick={()=>{goTo(book.id)}}><FaBook/></div>
                                        <img src={book.image_url}></img>
                                        <span>{book.title}</span>
                                    </div>
                                ))
                            :
                                <div className={styles.noFav}>
                                    <FaHeartBroken className={styles.veryBig}/>
                                    <h3>no fav for now</h3>
                                </div>
                               
                        }
                        
                        
                    
                </div>
            </div>
        </>
        
    )
}