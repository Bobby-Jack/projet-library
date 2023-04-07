import styles from './layout.module.css'
import Navbar from './navbar/navbar'
import OptionMenu from './optionMenu/optionMenu'
import { useState } from 'react'
export default function Layout({children, main }) {
    const [option, setOption] = useState(false)
    function toggleOptionMenu() {
        setOption(!option)
    }
    return(
        <>
            <OptionMenu active={option} closeFunction={toggleOptionMenu}/>
            {/* le navbar recevra des methode de modifiactation d'état des usesate indique plus bas  */}
            <Navbar main={main} optionFunction={toggleOptionMenu}/>
            {/* ajout des deux menu connecté par des usestate d'activation */}

            {children}
        </>
    )
}