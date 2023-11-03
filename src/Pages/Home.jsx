import React, { useState } from "react";
import Header from "../partials/Header";
import styles from "./styles/Home.module.css";
import Compass from "../icons/Compass";
import AddCircle from "../icons/AddCircle";
import Chip from "../components/Chip";
import Footer from "../partials/Footer";
import Event from "../components/Event";

import CategoryIcons from "../icons/categories";
import EventScroller from "../components/EventScroller";

const Home = () => {
    const [city, setCity] = useState('Surabaya');
    const events = [
        {
            title: "Australia & UK Top Ranked Universities - Application Day",
            start: "2023-06-26 12:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg"
        },
        {
            title: "[SOLO] MLBB SULTAN CUP RISING STAR",
            start: "2023-10-07 14:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230926120219_651265db31ebb.jpg"
        },
        {
            title: "ASPEK DAN PERLINDUNGAN HUKUM ATAS MEREK",
            start: "2023-11-27 18:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231012142401_65279f11e3b17.jpg"
        },
        {
            title: "Rock in Solo Festival 2023",
            start: "2023-12-09 22:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
        },
        {
            title: "ASPEK DAN PERLINDUNGAN HUKUM ATAS MEREK",
            start: "2023-11-27 18:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231012142401_65279f11e3b17.jpg"
        },
        {
            title: "Rock in Solo Festival 2023",
            start: "2023-12-09 22:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
        },
        {
            title: "Australia & UK Top Ranked Universities - Application Day",
            start: "2023-06-26 12:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg"
        },
        {
            title: "[SOLO] MLBB SULTAN CUP RISING STAR",
            start: "2023-10-07 14:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230926120219_651265db31ebb.jpg"
        },
    ]
    const categories = [
        {name: "Exhibition", icon: CategoryIcons.Exhibition, event_count: 3},
        {name: "Workshop", icon: CategoryIcons.Workshop, event_count: 23},
        {name: "Conference", icon: CategoryIcons.Conference, event_count: 17},
        {name: "Live Music / Concert", icon: CategoryIcons.Concert, event_count: 37},
        {name: "Show & Performance", icon: CategoryIcons.ShowPerformance, event_count: 20},
        {name: "Attraction", icon: CategoryIcons.Attraction, event_count: 26},
        {name: "Accomodation", icon: CategoryIcons.Accomodation, event_count: 14},
        {name: "Seminar", icon: CategoryIcons.Seminar, event_count: 14},
        {name: "Festival", icon: CategoryIcons.Festival, event_count: 19},
        {name: "Meetups", icon: CategoryIcons.Meetup, event_count: 34},
        {name: "Competition", icon: CategoryIcons.Competition, event_count: 42},
        {name: "Others", icon: CategoryIcons.Other, event_count: 14},
    ];

    return (
        <>
            <Header expand={true} />
            <div className="content">
                <div className={styles.JumboTop}>
                    <div className={styles.JumboTitle}>Platform Management
                        <span className={styles.JumboTitleSpecial}>event,</span>
                        Ticketing, & Reservation
                    </div>
                    <div className={styles.JumboDescription}>
                        Nonton konser idolamu hingga belajar skill baru <div className={styles.DesktopEOL}></div> kini bisa kamu lakukan hanya dari rumah
                    </div>

                    <div className={styles.JumboButtonArea}>
                        <button className={styles.JumboButton}>
                            <Compass />
                            Explore Event
                        </button>
                        <button className={styles.JumboButton}>
                            <AddCircle />
                            Create Event
                        </button>
                    </div>

                    <div className={`${styles.JumboChip} ${styles.JumboOnline}`}>Online</div>
                    <div className={`${styles.JumboChip} ${styles.JumboOnsite}`}>Onsite</div>
                    <div className={`${styles.JumboChip} ${styles.JumboHybrid}`}>Hybrid</div>
                </div>

                <section>
                    <h3 style={{marginTop: 0}}>Trending Events in Various Cities</h3>
                    <Chip options={['Surabaya', 'Jakarta', 'Medan', 'Balikpapan']} value={city} setValue={setCity} multiple={false} />
                    
                    <EventScroller events={events} containerStyle={{marginTop: 20}} />
                </section>

                <section>
                    <h3 style={{marginTop: 0}}>Temukan Berbagai Kategori Event</h3>
                    <div className={styles.CategoryArea}>
                        {
                            categories.map((category, c) => (
                                <div key={c} className={styles.CategoryItem}>
                                    <img src={category.icon} alt={category.name} />
                                    <div className={styles.CategoryInfo}>
                                        <div className={styles.CategoryName}>{category.name}</div>
                                        <div className={styles.CategoryEvents}>{category.event_count} events</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default Home