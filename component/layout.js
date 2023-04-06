import styles from './layout.module.css'
import Navbar from './navbar/navbar'

export default function Layout({children, main }) {
    return(
        <>
            <Navbar main={main}/>
            {children}
        </>
    )
}