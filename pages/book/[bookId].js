import Layout from '@/component/layout';
import { useRouter } from 'next/router';
import styles from '../../styles/bookId.module.css'
import {FaStar, FaHeart, FaBook} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { removeFav, addFav } from '@/store/features/accountSlice';

export async function getServerSideProps(context) {
  
  const { bookId } = context.query;
  const allJsonData = await fetch('https://example-data.draftbit.com/books?id='+bookId).then(r => r.json());
  return {
    props: {
      allJsonData,
      
    },
  };
}

export default function BookName({ allJsonData, }) {
  const router = useRouter();
  const connected = useSelector((state)=>state.account.connected)
  const connectedAccount = useSelector((state)=>state.account.connectedAccount)
  const dispatch = useDispatch()
  const { bookId } = router.query;
  const genres = allJsonData[0].genres.split(', ')
  console.log(genres);


  function isInFav() {
    let result = false;
    if (connected) {
      connectedAccount.fav.forEach(element => {
        if (element.id == allJsonData[0].id) {
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



  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className={styles.main}>
        <img className={styles.img} src={allJsonData[0].image_url}/>
        <div className={styles.infos}>
          {
            connected ?
            <div className={isInFav(allJsonData[0])?styles.heart+' '+styles.active: styles.heart}
                onClick={()=>{handleFav(allJsonData[0])}}><FaHeart/></div>
            :
            null
          }
          
          <h1 className='textCenter'>{allJsonData[0].title}</h1>
          <p className='textCenter'>By: <b><i>{allJsonData[0].authors}</i></b></p>
          <div className={styles.description}>{allJsonData[0].description}</div>
          <div className={styles.table}>
            <div className={styles.row}>
              <span>Edition:</span>
              <span>
                {
                  allJsonData[0].edition ?
                  allJsonData[0].edition :
                  'NaN'
                }
              </span>
            </div>
            <div className={styles.row}>
              <span>Format:</span>
              <span>
                {
                  allJsonData[0].format ?
                  allJsonData[0].format :
                  'NaN'
                }
              </span>
            </div>
            <div className={styles.row}>
              <span>Genres:</span>
              <div className={styles.genres}>
                {
                  allJsonData[0].genres ?
                  genres.map((genre)=>(<span className={styles.genre}>{genre}</span>)):
                  'NaN'
                }
              </div>
            </div>
            <div className={styles.row}>
              <span>Number of pages:</span>
              <span>
                {
                  allJsonData[0].num_pages ?
                  allJsonData[0].num_pages :
                  'NaN'
                }
              </span>
            </div>
            <div className={styles.row}>
              <span>Rating:</span>
              <span className={allJsonData[0].rating>=4?styles.green: allJsonData[0].rating<2.5?styles.red:''}>
                {
                  allJsonData[0].rating ?
                  allJsonData[0].rating+' / 5' :
                  'NaN'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}