
import styles from './footer.module.css'
import {TiSocialFacebook,
        TiSocialTwitter,
        TiSocialInstagram,
        TiSocialLinkedin,
        TiSocialYoutube} from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';
import {RiStackFill} from 'react-icons/ri'
import { IoIosHelpBuoy } from "react-icons/io";

export default function Footer() {
    return(
        <div>
            <div className={styles.head}>
                <div className={styles.card}>
                    <div className={styles.image}></div>
                    <div className={styles.infos}>
                        <h1>   
                            Join Our Community
                        </h1>
                        <p>
                            Sign up & get 10% of your first books.
                        </p>
                        <div className={styles.inputZone}>
                            <input placeholder='your email'/>
                            <button><span>subscribe</span></button>
                        </div>
                        <div className={styles.iconsList}>
                            <div className={styles.icon}>
                                <TiSocialFacebook/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialTwitter/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialInstagram/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialLinkedin/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialYoutube/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
                <div className={styles.row}>
                    <div className={styles.help}>
                        <RiStackFill className={styles.bigIcon}/>
                        <div>
                            <p><b>Book Information?</b></p>
                            <p>Please send us an email at support@gmail.com</p>
                        </div>
                    </div>        
                    <div className={styles.help}>
                        <IoIosHelpBuoy className={styles.bigIcon}/>
                        <div>
                            <p><b>Book Information?</b></p>
                            <p>Please send us an email at support@gmail.com</p>
                        </div>
                    </div>          
                </div>
                <hr/>
                <div className={styles.lastRow}>
                    <h3>Bookshelf</h3>       
                    <span>© 2023 All right reserved. Made with love by <FaHeart/>  Ryad</span>       
                </div>
            </div>
        </div>
    )
}