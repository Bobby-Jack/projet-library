import Layout from '@/component/layout'
import React from 'react'
import styles from '../styles/allBookPage.module.css'
import { useState } from 'react'
import BookCard from '@/component/bookcard/bookCard'
import { login } from '@/store/features/accountSlice'
import { useSelector } from 'react-redux'

export async function getStaticProps() {
    const allJsonData = await fetch('https://example-data.draftbit.com/books')
      .then(r => r.json())
    return {
      props: {
        allJsonData
      },
    };
  }


export default function AllBookPage({allJsonData}) {
    const [cat, setCat] = useState('')
    const connectedAccount = useSelector((state)=>state.account.connectedAccount)
    console.log(connectedAccount);
  return (
    <Layout>
        <div className={styles.main}>
            <div className={styles.filter}>
                <input placeholder='Search by name'/>
                <h3>Category</h3>
                <span onClick={()=>{setCat('')}}
                className={cat==''?styles.category+' '+styles.selected:styles.category}>All</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='classics'?styles.category+' '+styles.selected:styles.category}>Classics</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='fiction'?styles.category+' '+styles.selected:styles.category}>Fiction</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='historical'?styles.category+' '+styles.selected:styles.category}>Historical</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='science fiction'?styles.category+' '+styles.selected:styles.category}>Science Fiction</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='fantasy'?styles.category+' '+styles.selected:styles.category}>Fantasy</span>
                <span onClick={()=>{setCat('')}}
                className={cat=='young adult'?styles.category+' '+styles.selected:styles.category}>Young Adult</span>
            </div>
            <div className={styles.all}>
                {
                    allJsonData.map((p)=>(
                        <BookCard data={p}/>
                    ))
                }
            </div>
        </div> 
    </Layout>
  )
}
