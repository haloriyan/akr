import React from "react";
import styles from "./styles/Header.module.css";
import { BiSearch } from "react-icons/bi";
import Search from "../icons/Search";
import Compass from "../icons/Compass";
import AddCircle from "../icons/AddCircle";

const Header = () => {
    return (
        <header className={styles.Header}>
            <img src="/images/logo.png" alt="Logo Header" className={styles.Logo} />
            <form className={styles.SearchForm}>
                <Search />
                <input type="text" className={styles.SearchInput} placeholder="Cari event atau atraksi lainnya" />
            </form>
            <nav className={styles.Menu}>
                <a href="#" className={styles.MenuItem}>
                    <Compass size={80} />
                    Explore Events
                </a>
                <a href="#" className={styles.MenuItem}>
                    <AddCircle />
                    Create Event
                </a>
            </nav>
        </header>
    )
}

export default Header;