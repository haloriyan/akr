import React, { useState } from "react";
import styles from "./styles/SidebarUser.module.css";
import Icons from "../icons";
import Separator from "../components/Separator";
import AddCircle from "../icons/AddCircle";
import { BiChevronDown } from "react-icons/bi";

const SidebarUser = ({show = true, active = null}) => {
    const [isOrganizerAreaVisible, setOrganizerAreaVisible] = useState(false);

    const overlayClick = () => {
        setOrganizerAreaVisible(false);
    }
    const showOrganizers = () => {
        setOrganizerAreaVisible(true);
    }
    
    if (window.screen.width > 480 && show) {
        return (
            <div className={styles.Sidebar}>
                <img src="/images/logo.png" alt="Logo Agendakota" className={styles.Logo} />
                <div className={styles.MenuArea}>
                    <a href="/events" className={`${styles.MenuItem} ${active === 'personal-events' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Calendar} alt="Personal Events" />
                        <div className={styles.MenuText}>Personal Events</div>
                    </a>
                    <a href="/my-tickets" className={`${styles.MenuItem} ${active === 'my-tickets' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="Tickets" />
                        <div className={styles.MenuText}>My Tickets</div>
                    </a>
                    <a href="/connections" className={`${styles.MenuItem} ${active === 'connections' ? styles.MenuActive : ''}`}>
                        <img src={Icons.People} alt="Connections" />
                        <div className={styles.MenuText}>Connections</div>
                    </a>
                    <a href="/messages" className={`${styles.MenuItem} ${active === 'messages' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Chat} alt="Messages" />
                        <div className={styles.MenuText}>Messages</div>
                    </a>
                </div>
    
                <Separator width="100%" margin="20px 0" />
    
                <div className={styles.MenuText} style={{color: '#aaa',fontWeight: 700,fontSize: 12}}>ORGANIZATIONS</div>
                <div className={styles.OrganizerArea}>
                    <a href="/organizer/events" className={styles.OrganizerItem}>
                        <div className={styles.OrganizerLogo}></div>
                        <div className={styles.OrganizerName}>Agendakota</div>
                        <div className={styles.OrganizerLabel}>Baru</div>
                    </a>
                    <a href="/organizer/events" className={styles.OrganizerItem}>
                        <div className={styles.OrganizerLogo}></div>
                        <div className={styles.OrganizerName}>Belajar Ngeweb ID</div>
                        <div className={styles.OrganizerLabel}>Baru</div>
                    </a>
                </div>
    
                <div className={styles.OrganizerCreate}>
                    <AddCircle />
                    Create Organization
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className={styles.SidebarMobile}>
                    <div className={styles.MenuArea}>
                        <a href="/events" className={`${styles.MenuItem} ${active === 'personal-events' ? styles.MenuActive : ''}`}>
                            <img src={Icons.Calendar} alt="Personal Events" />
                            {
                                active === 'personal-events' &&
                                <div className={styles.MenuText}>Events</div>
                            }
                        </a>
                        <a href="/my-tickets" className={`${styles.MenuItem} ${active === 'my-tickets' ? styles.MenuActive : ''}`}>
                            <img src={Icons.Ticket} alt="Tickets" />
                            {
                                active === 'my-tickets' &&
                                <div className={styles.MenuText}>My Tickets</div>
                            }
                        </a>
                        <a href="/connections" className={`${styles.MenuItem} ${active === 'connections' ? styles.MenuActive : ''}`}>
                            <img src={Icons.People} alt="Connections" />
                            {
                                active === 'connections' &&
                                <div className={styles.MenuText}>Connections</div>
                            }
                        </a>
                        <a href="/messages" className={`${styles.MenuItem} ${active === 'messages' ? styles.MenuActive : ''}`}>
                            <img src={Icons.Chat} alt="Messages" />
                            {
                                active === 'messages' &&
                                <div className={styles.MenuText}>Connections</div>
                            }
                        </a>
                    </div>
                    <div className={styles.OrganizerChooser}>
                        <div className={styles.OrganizerLogo} onClick={() => showOrganizers()} style={{
                            backgroundImage: `url('https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230927233556_651459ec86c5a.jpg')`,
                            borderRadius: 999
                        }}></div>
                    </div>
                </div>

                <div className={styles.Overlay} onClick={overlayClick} style={{
                    display: (isOrganizerAreaVisible) ? 'block' : 'none'
                }}></div>
                <div className={styles.OrganizerAreaMobile} style={{bottom: isOrganizerAreaVisible ? 0 : -500}}>
                    <div className="inline">
                        <div className={styles.MenuText} style={{color: '#aaa',fontWeight: 700,fontSize: 12,display: 'flex',flexGrow: 1}}>ORGANIZATIONS</div>
                        <div className={styles.OrganizerAreaClose} onClick={overlayClick}>
                            <BiChevronDown />
                        </div>
                    </div>

                    <div className={styles.OrganizerArea}>
                        <a href="/organizer/events" className={styles.OrganizerItem}>
                            <div className={styles.OrganizerLogo}></div>
                            <div className={styles.OrganizerName}>Agendakota</div>
                            <div className={styles.OrganizerLabel}>Pilih</div>
                        </a>
                        <a href="/organizer/events" className={styles.OrganizerItem}>
                            <div className={styles.OrganizerLogo}></div>
                            <div className={styles.OrganizerName}>Belajar Ngeweb ID</div>
                            <div className={styles.OrganizerLabel}>Pilih</div>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default SidebarUser;