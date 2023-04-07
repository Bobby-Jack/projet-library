import styles from './caroussel.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import img01 from '../../public/images/heroCarrousel/01.png'
import img02 from '../../public/images/heroCarrousel/02.png'
import img03 from '../../public/images/heroCarrousel/03.png'
import img04 from '../../public/images/heroCarrousel/04.png'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Caroussel() {
    const [position, setPosition] = useState(1)

    function goNext() {
        if (position >= 4) {
            setPosition(1)
        }else{
            setPosition(position+1)
        }
    }
    function goBack() {
        if (position <= 1) {
            setPosition(4)
        }else{
            setPosition(position-1)
        }
    }

    useEffect(() => {
      const interval = setInterval(()=>{
        if (position >= 4) {
            setPosition(1)
        }else{
            setPosition(position+1)
        }
      }, 3000)
    
      return () => {
        clearInterval(interval)
      }
    }, [position])
    
    
    return (
        <div className={styles.caroussel}>
            <div onClick={goBack} className={styles.arrowBack}>
                <IoIosArrowBack/>
            </div>
            <div onClick={goNext} className={styles.arrowNext}>
                <IoIosArrowForward/>
            </div>
            <div className={styles.navigator}>
                <div onClick={()=>{setPosition(1)}} className={position==1? styles.bille+' '+styles.active:styles.bille}></div>
                <div onClick={()=>{setPosition(2)}} className={position==2? styles.bille+' '+styles.active:styles.bille}></div>
                <div onClick={()=>{setPosition(3)}} className={position==3? styles.bille+' '+styles.active:styles.bille}></div>
                <div onClick={()=>{setPosition(4)}} className={position==4? styles.bille+' '+styles.active:styles.bille}></div>
            </div>
            <div className={position == 1 ?styles.content:
                            position == 2 ?styles.content+' '+styles.toChild2:
                            position == 3 ?styles.content+' '+styles.toChild3:
                            styles.content+' '+styles.toChild4}>
                <div className={styles.child+' '+styles.child1}>
                    <div className={styles.left}>
                        <p>LET'S MAKE THE BEST INVESTMENT</p>
                        <p>There Is No Friend As Loyal As A Book</p>
                        <p>lorem blal blal blal blal blal blal blal blal blal blal blal blal blal</p>
                        <button>shop now</button>
                    </div>
                    <div className={styles.right}>
                        <Image  src={img01}/>
                    </div>
                </div>
                <div className={styles.child+' '+styles.child1}>
                    <div className={styles.left}>
                        <p>LET'S MAKE THE BEST INVESTMENT</p>
                        <p>There Is No Friend As Loyal As A Book</p>
                        <p>lorem blal blal blal blal blal blal blal blal blal blal blal blal blal</p>
                        <button>shop now</button>
                    </div>
                    <div className={styles.right}>
                        <Image  src={img02}/>
                    </div>
                </div>
                <div className={styles.child+' '+styles.child1}>
                    <div className={styles.left}>
                        <p>LET'S MAKE THE BEST INVESTMENT</p>
                        <p>There Is No Friend As Loyal As A Book</p>
                        <p>lorem blal blal blal blal blal blal blal blal blal blal blal blal blal</p>
                        <button>shop now</button>
                    </div>
                    <div className={styles.right}>
                        <Image  src={img03}/>
                    </div>
                </div>
                <div className={styles.child+' '+styles.child1}>
                    <div className={styles.left}>
                        <p>LET'S MAKE THE BEST INVESTMENT</p>
                        <p>There Is No Friend As Loyal As A Book</p>
                        <p>lorem blal blal blal blal blal blal blal blal blal blal blal blal blal</p>
                        <button>shop now</button>
                    </div>
                    <div className={styles.right}>
                        <Image  src={img04}/>
                    </div>
                </div>
            </div>
        </div>
    )
}