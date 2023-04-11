import Footer from './footer/footer'
import styles from './layout.module.css'
import Navbar from './navbar/navbar'
import FavMenu from './optionMenu/FavMenu'
import OptionMenu from './optionMenu/optionMenu'
import { useState } from 'react'
export default function Layout({children, main, inputVal, setInputVal }) {
    const [option, setOption] = useState(false)
    const [favoris, setFavoris] = useState(false)
    function toggleOptionMenu() {
        setOption(!option)
    }
    function toggleFavorisMenu() {
        setFavoris(!favoris)
    }
    return(
        
        <div className={styles.layout}>
            <FavMenu active={favoris} closeFunction={toggleFavorisMenu}/>
            <OptionMenu active={option} closeFunction={toggleOptionMenu}/>
            {/* le navbar recevra des methode de modifiactation d'état des usesate indique plus bas  */}
            <Navbar inputVal={inputVal} setInputVal={setInputVal}  main={main} optionFunction={toggleOptionMenu} favFunction={toggleFavorisMenu}/>
            {/* ajout des deux menu connecté par des usestate d'activation */}
            <div className={styles.body}>
                {children}
            </div>
            <Footer/>
            
        </div>
    )
}