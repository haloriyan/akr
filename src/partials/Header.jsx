import { BiCog, BiCompass, BiGroup, BiLogOut, BiMenu, BiNote, BiQr, BiQrScan, BiUser } from "react-icons/bi";
import styles from "./styles/Header.module.css";
import { useEffect, useState } from "react";
import Search from "../icons/Search";
import AddCircle from "../icons/AddCircle";

const Header = ({expand = false}) => {
    const [isProfileActive, setProfileActive] = useState(false);
    const [isMenuMobileActive, setMenuMobileActive] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(true);

    const handleClick = e => {
        let target = e.target;
        let classes = target.classList[0]?.split('_');

        if (window.screen.width > 480) {
            if (classes === undefined || classes?.indexOf('HeaderUser') < 0 && isProfileActive) {
                setProfileActive(false);
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    })

    return (
        <>
            <div className={styles.HeaderMobile}>
                <div className={styles.LogoArea}>
                    <img src="/images/logo.png" alt="Logo Agendakota" className={styles.Logo} />
                </div>
                <div className={styles.Toggler} onClick={() => setMenuMobileActive(!isMenuMobileActive)}>
                    <BiMenu />
                </div>
            </div>
            <div className={`${styles.MenuMobile} ${isMenuMobileActive ? styles.MenuMobileActive : ''}`}>
                <a href="#" className={styles.MenuMobileItem} style={{borderWidth: 1,borderStyle: 'solid',borderColor: '#ddd'}}>
                    <BiCompass size={20} />
                    Explore Events
                </a>
                <a href="#" className={styles.MenuMobileItem}>
                    <AddCircle />
                    Create Event
                </a>

                <div className={styles.Separator} style={{margin: '20px 0px',width: '100%'}}></div>

                {
                    isLoggedIn ?
                    <>
                        <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',gap: 20}}>
                            <div className={styles.ProfileIcon} style={{backgroundImage: 'url(https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg)'}}></div>
                            <div style={{fontWeight: 600}}>Riyan Satria</div>
                        </div>
                        <div className={styles.ProfileMenu}>
                            <a href="/profile" className={`${styles.ProfileMenuItem} ${styles.ProfileMenuItemActive}`}>
                                <BiUser />
                                Profile
                            </a>
                            <a href="/settings" className={`${styles.ProfileMenuItem}`}>
                                <BiCog />
                                Settings
                            </a>
                            <div className={styles.Separator}></div>
                            <a href="#" className={`${styles.ProfileMenuItem}`}>
                                <BiLogOut />
                                Logout
                            </a>
                        </div>
                    </>
                    :
                    <>
                        <a href="#" className={`${styles.Button} ${styles.ButtonSecondary}`}>
                            Login
                        </a>
                        <a href="#" className={`${styles.Button} ${styles.ButtonPrimary}`}>
                            Register
                        </a>
                    </>
                }
            </div>
            <div className={styles.Header} style={{left: expand ? '0%' : '20%'}}>
                {
                    expand &&
                    <div className={styles.LogoArea}>
                        <img src="/images/logo.png" alt="Logo Agendakota" className={styles.Logo} />
                    </div>
                }
                <div className={styles.Left}>
                    <form className={styles.SearchForm}>
                        <Search />
                        <input type="text" className={styles.SearchInput} placeholder="Cari event atau atraksi lainnya" />
                    </form>
                </div>
                <div className={styles.Right}>
                    <a href="#" className={styles.Item} style={{border: '1px solid #ddd'}}>
                        <BiCompass />
                        Explore Events
                    </a>
                    <a href="#" className={styles.Item}>
                        <AddCircle />
                        Create Event
                    </a>
                    {
                        isLoggedIn ?
                            <div className={styles.ProfileIcon} onClick={() => setProfileActive(!isProfileActive)} style={{backgroundImage: 'url(https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg)'}}></div>
                        :
                        <>
                            <a href="#" className={`${styles.Button} ${styles.ButtonSecondary}`}>
                                Login
                            </a>
                            <a href="#" className={`${styles.Button} ${styles.ButtonPrimary}`}>
                                Register
                            </a>
                        </>
                    }
                </div>
            </div>
            {
                isProfileActive &&
                <div className={styles.ProfileMenu}>
                    <a href="/profile" className={`${styles.ProfileMenuItem} ${styles.ProfileMenuItemActive}`}>
                        <BiUser />
                        Profile
                    </a>
                    <a href="/settings" className={`${styles.ProfileMenuItem}`}>
                        <BiCog />
                        
                        Settings
                    </a>
                    <div className={styles.Separator}></div>
                    <a href="#" className={`${styles.ProfileMenuItem}`}>
                        <BiLogOut />
                        Logout
                    </a>
                </div>
            }
        </>
    )
}

export default Header;