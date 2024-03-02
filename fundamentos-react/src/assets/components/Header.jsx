import styles from './Header.module.css'
import logo from '../img/logo.svg'
export function Header (){
    console.log(logo)
    return(
        <header className={styles.header}>
            <img src = {logo}/>
            <strong className={styles.header}>Feed</strong>
        </header>        
    )
}