import React, { useState } from "react";
import styles from "./styles/EventMenu.module.css";
import Icons from "../icons";
import { BiChevronLeft } from "react-icons/bi";
import Separator from "../components/Separator";
import Switch from "../components/Switch";

const EventMenu = ({active}) => {
    const [mobileShowMenu, setMobileShowMenu] = useState(false);
    const [isPublic, setPublic] = useState(false);

    if (window.screen.width > 480) {
        return (
            <div className={styles.Menu}>
                <a href="/organizer/events" className="inline" style={{padding: '20px 10px',gap: 10,textDecoration: 'none',color: '#212121'}}>
                    <BiChevronLeft />
                    <div className="title" style={{display: 'flex',flexGrow: 1,fontSize: 16,fontWeight: 700}}>Australia & UK Top Ranke...</div>
                </a>
                <Separator margin="0px 0px" />
                <div className="inline" style={{padding: '15px',gap: 10}}>
                    <div className="title" style={{display: 'flex',flexGrow: 1,fontSize: 16,fontWeight: 700}}>Event Public</div>
                    <Switch active={isPublic} setActive={setPublic} activeColor="#dd0064" />
                </div>
                <Separator margin="0px 0px" />
    
                <div className={styles.MenuArea}>
                    <a href="/event/dashboard" className={`${styles.MenuItem} ${active === 'dashboard' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Calendar} alt="Dashboard" />
                        <div className={styles.MenuText}>Dashboard</div>
                    </a>
                    <a href="/event/ticket" className={`${styles.MenuItem} ${active === 'ticket' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="ticket" />
                        <div className={styles.MenuText}>Tickets</div>
                    </a>
                    <a href="/event/landing-page" className={`${styles.MenuItem} ${active === 'landing-page' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="landing" />
                        <div className={styles.MenuText}>Landing Page</div>
                    </a>
                    <a href="/event/certificate" className={`${styles.MenuItem} ${active === 'certificate' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="certificate" />
                        <div className={styles.MenuText}>Sertifikat</div>
                    </a>

                    <div style={{color: '#999',fontSize: 14,fontWeight: 600,margin: '20px 0px'}}>
                        Virtual Setup
                    </div>
                    <a href="/event/rundown" className={`${styles.MenuItem} ${active === 'rundown' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="rundown" />
                        <div className={styles.MenuText}>Rundown</div>
                    </a>
                    <a href="/event/session" className={`${styles.MenuItem} ${active === 'session' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="session" />
                        <div className={styles.MenuText}>Session</div>
                    </a>
                    <a href="/event/stage" className={`${styles.MenuItem} ${active === 'stage' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="stage" />
                        <div className={styles.MenuText}>Stages</div>
                    </a>
                    <a href="/event/sponsor" className={`${styles.MenuItem} ${active === 'sponsor' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="sponsor" />
                        <div className={styles.MenuText}>Sponsor & Media</div>
                    </a>
                    <a href="/event/handbook" className={`${styles.MenuItem} ${active === 'handbook' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="handbook" />
                        <div className={styles.MenuText}>Handbook</div>
                    </a>

                    <div style={{color: '#999',fontSize: 14,fontWeight: 600,margin: '20px 0px'}}>
                        Report
                    </div>
                    <a href="/event/selling" className={`${styles.MenuItem} ${active === 'selling' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="selling" />
                        <div className={styles.MenuText}>Selling</div>
                    </a>
                    <a href="/event/booking" className={`${styles.MenuItem} ${active === 'booking' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="booking" />
                        <div className={styles.MenuText}>Booking Data</div>
                    </a>

                    <div style={{color: '#999',fontSize: 14,fontWeight: 600,margin: '20px 0px'}}>
                        Marketing
                    </div>
                    <a href="/event/broadcast-info" className={`${styles.MenuItem} ${active === 'broadcast-info' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="broadcast-info" />
                        <div className={styles.MenuText}>Broadcast Info</div>
                    </a>
                    <a href="/event/booking" className={`${styles.MenuItem} ${active === 'booking' ? styles.MenuActive : ''}`}>
                        <img src={Icons.Ticket} alt="booking" />
                        <div className={styles.MenuText}>Ad Placement</div>
                    </a>
                </div>
            </div>
        )
    }
}

export default EventMenu;