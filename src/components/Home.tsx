import { Body } from "./Body";
import { Header } from "./Header";

import styles from './Header.module.css'
export function Home() {
    return(
        <div>
            <Header />
            <Body />
        </div>
    );
}