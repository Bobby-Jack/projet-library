import Head from 'next/head'
import Layout from '@/component/layout'
import Caroussel from '@/component/caroussel/caroussel'
import BuySection from '@/component/buySection/buySection'
import BookCard from '@/component/bookcard/bookCard'
import styles from '../styles/mainPage.module.css'


import { useState } from 'react'


import { useSelector, useDispatch } from 'react-redux'

export async function getStaticProps() {
  const allJsonData = await fetch('https://example-data.draftbit.com/books')
    .then(r => r.json())
  return {
    props: {
      allJsonData
    },
  };
}

export default function mainPage({allJsonData}) {
    console.log(allJsonData);
    const connected  = useSelector((state)=>state.account.connected)
    const [inputValue, setInputValue] = useState('')
    const [indexMax, setIndexMax] = useState(50)

    function loadMore() {
      if (indexMax<=250) {
        setIndexMax(indexMax+100)
      }
    }
  
    return (
        <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout main={true} inputVal={inputValue} setInputVal={setInputValue}>
        <Caroussel/>
        <BuySection/>
        <section className={styles.allBook}>
            <div className={styles.title}>
              <span>BOOKS GALLERY</span>
              <h1>Popular Books</h1>
            </div>
            {allJsonData.map((p, index) =>(
              parseFloat(p.rating) >= 4.2 && p.title.toLowerCase().includes(inputValue) && index<=indexMax ?
              <BookCard key={index} data={p}/>
              :
              null
            ))}
            {
              indexMax < 250 ?
                <button onClick={loadMore} className='btnSimple textCenter'>
                   load more
                </button>
              :
              null
            }
             
        </section>
      </Layout> 
      
    </>
    )
}