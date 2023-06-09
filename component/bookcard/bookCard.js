import styles from './bookCard.module.css'
import {FaStar, FaHeart, FaBook} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { removeFav, addFav } from '@/store/features/accountSlice'

export default function BookCard({data, alt}) {
    const connected = useSelector((state)=>state.account.connected)
    const connectedAccount = useSelector((state)=>state.account.connectedAccount) 
    const dispatch = useDispatch()
    const router = useRouter()
    function goTo() {
        router.push('/book/'+data.id)
    }

    function isInFav() {
        console.log(connectedAccount);
        let result = false; 
        if (connectedAccount) {
            connectedAccount.fav.forEach(element => {
                if (element.id == data.id) {
                    result = true
                }
            });
        }
        
        return result
    }
    
    function handleFav(book) {
        console.log('handleBook: start');
        let alreadyIn = false
        if (connected) {
            console.log('handleBook: connected=true');
            connectedAccount.fav.forEach(element => {
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
        
        !alt ?
        <div className={styles.card}>
            {
                connected ?
                <div className={isInFav()?styles.heart+' '+styles.active: styles.heart}
                    onClick={()=>{handleFav(data)}}><FaHeart/>
                </div>
                :
                null
            }
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
        :
        <div className={styles.cardAlt}>
            {
                connected ?
                <div className={isInFav()?styles.favAlt+' '+styles.active: styles.favAlt}
                    onClick={()=>{handleFav(data)}}>
                    <FaHeart/>
                </div>
                :
                null
            }
            <div className={styles.goToBook} onClick={goTo}>
                <FaBook/>
            </div>
            <div className={styles.ratingAlt}>
                {data.rating} / 5 <FaStar/>
            </div>
            <img  className={styles.img} src={data.image_url}/>
            <div className={styles.cardAltInfo}>
                <h2>{data.title}</h2>
                <span>By: <b>{data.authors}</b></span>
                <p><i>{data.description}</i></p>
            </div>
        </div>
    )
}