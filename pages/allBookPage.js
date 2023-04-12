import Layout from '@/component/layout'
import React from 'react'
import styles from '../styles/allBookPage.module.css'
import { useState } from 'react'
import BookCard from '@/component/bookcard/bookCard'
import { login } from '@/store/features/accountSlice'
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { useSelector } from 'react-redux'
import { BiMenu } from "react-icons/bi";
import { BiCheckboxSquare } from "react-icons/bi";

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
    const [minRat, setMinRat] = useState(0)
    const [search, setSearch] = useState('')
    const [alt, setAlt] = useState(false)


    const connectedAccount = useSelector((state)=>state.account.connectedAccount)
    console.log(connectedAccount);
  return (
    <Layout>
        <div className={styles.main}>
            <div className={styles.filter}>
                <input className={styles.input} value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search by name'/>                
                <h3>Category {cat}</h3>
                <span onClick={()=>{setCat('')}}
                className={cat==''?styles.category+' '+styles.selected:styles.category}>All</span>
                <span onClick={()=>{setCat('classics')}}
                className={cat=='classics'?styles.category+' '+styles.selected:styles.category}>Classics</span>
                <span onClick={()=>{setCat('fiction')}}
                className={cat=='fiction'?styles.category+' '+styles.selected:styles.category}>Fiction</span>
                <span onClick={()=>{setCat('historical')}}
                className={cat=='historical'?styles.category+' '+styles.selected:styles.category}>Historical</span>
                <span onClick={()=>{setCat('science fiction')}}
                className={cat=='science fiction'?styles.category+' '+styles.selected:styles.category}>Science Fiction</span>
                <span onClick={()=>{setCat('fantasy')}}
                className={cat=='fantasy'?styles.category+' '+styles.selected:styles.category}>Fantasy</span>
                <span onClick={()=>{setCat('young adult')}}
                className={cat=='young adult'?styles.category+' '+styles.selected:styles.category}>Young Adult</span>
                <h3>Minimum rating</h3>
                <h4>{minRat} / 5</h4>
                <input value={minRat} onChange={(e)=>{setMinRat(parseFloat(e.target.value))}} type='range' min='0.0' max='5.0'/>
            </div>
            <div className={styles.right}>
              <div className={styles.rightHeader}>
                <div className={styles.aspects}>
                  <div className={!alt?styles.btnAsp+' '+styles.active:styles.btnAsp}
                       onClick={()=>{setAlt(false)}}>
                  
                    <BiCheckboxSquare/>
                  </div>
                  <div className={alt?styles.btnAsp+' '+styles.active:styles.btnAsp}
                        onClick={()=>{setAlt(true)}}>
                          <BiMenu/>
                  </div>
                </div>
                <div className={styles.triOption}>
                    <select>
                      <option value='ratingCr'>rating</option>
                      <option value='ratingDe'>rating</option>
                      <option value='titleCr'><AiOutlineSortAscending/></option>
                      <option value='titleDe'><AiOutlineSortDescending/></option>
                    </select>
                </div>
              </div>
              <div className={styles.all}>
                
                {
                    allJsonData.map((p)=>{
                      if (p.genres) {
                        if (p.genres.toLowerCase().includes(cat)) {
                          if (p.rating >= minRat) {
                            if (p.title.toLowerCase().includes(search)) {
                              return <BookCard data={p} alt={alt}/>
                            }
                            
                          }
                        }
                      }else{
                        if (cat == '') {
                          return <BookCard data={p}/>
                        }
                      }
                      
                      })
                }
              </div>
            </div>
            
        </div> 
    </Layout>
  )
}
