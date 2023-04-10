import Layout from '@/component/layout';
import { useRouter } from 'next/router';
import styles from '../../styles/bookId.module.css'

export async function getServerSideProps(context) {
  const { bookId } = context.query;
  const allJsonData = await fetch('https://example-data.draftbit.com/books?id='+bookId).then(r => r.json());
  return {
    props: {
      allJsonData,
    },
  };
}

export default function BookName({ allJsonData }) {
  const router = useRouter();
  const { bookId } = router.query;
  const genres = allJsonData[0].genres.split(', ')
  console.log(genres);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className={styles.main}>
        <img className={styles.img} src={allJsonData[0].image_url}/>
        <div className={styles.infos}>
          <h1>{allJsonData[0].title}</h1>
          <span>By: <b><i>{allJsonData[0].authors}</i></b></span>
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
              <span className={allJsonData[0].rating>=4?styles.green:''}>
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