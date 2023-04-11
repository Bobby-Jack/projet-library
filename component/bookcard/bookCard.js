import styles from './bookCard.module.css'
import {FaStar, FaHeart, FaBook} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { removeFav, addFav } from '@/store/features/accountSlice'

export default function BookCard({data, alt}) {
    const connected = useSelector((state)=>state.account.connected)
    const fav = useSelector((state)=>state.account.connectedAccount.fav)
    const dispatch = useDispatch()
    const router = useRouter()
    function goTo() {
        router.push('/book/'+data.id)
    }
    
    function handleFav(book) {
        console.log('handleBook: start');
        let alreadyIn = false
        if (connected) {
            console.log('handleBook: connected=true');
            fav.forEach(element => {
                console.log(element);
                if (element.id == book.id) {
                    alreadyIn = true
                }
            });   
            if (alreadyIn) {
                console.log('handleBook: remove');
                dispatch(removeFav(book.id))
            }else{
                console.log('handleBook: addFav');
                dispatch(addFav(book))
            }         
        }
    }
    
    return(
        <div className={styles.card}>
            <div className={fav.includes(data)?styles.heart+' '+styles.active: styles.heart} onClick={()=>{handleFav(data)}}><FaHeart/></div>
            <div className={styles.goTo} onClick={goTo}><FaBook/></div>
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