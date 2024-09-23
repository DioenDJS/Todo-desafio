import styles from './Header.module.css';
import iconeFoguete from '../assets/icon-foguete.svg';
export function Header() {

    return (
        <header className={styles.header}>
            <img src={iconeFoguete} alt="imagem de um foguete" />
            <h1>todo</h1>
        </header>
    )
}