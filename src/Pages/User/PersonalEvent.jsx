import React, { useState } from "react";
import SidebarUser from "../../partials/SidebarUser";
import HeaderUser from "../../partials/HeaderUser";
import styles from "../styles/PersonalEvent.module.css";
import Toggler from "../../components/Toggler";
import Event from "../../components/Event";
import InfoCard from "../../partials/InfoCard";
import Footer from "../../partials/Footer";

const PersonalEvent = () => {
    const [viewing, setViewing] = useState('Upcoming');
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
            title: "OMO! MARKET K-POP FESTIVAL",
            start: "2023-11-22 22:00:00",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230927232153_651456a165823.jpg"
        },
    ]

    return (
        <>
            <div className="content user" style={{padding: 20}}>
                <div className={styles.TitleArea}>
                    <h1 className={styles.Title}>Personal Events</h1>
                    <Toggler
                        value={viewing} setValue={setViewing}
                        options={['Upcoming', 'Happening', 'Finished']}
                    />
                </div>

                <div className={styles.Inline} style={{marginTop: 20}}>
                    {
                        events.map((event, e) => (
                            <Event data={event} key={e} config={{
                                coverStyle: {
                                    height: 160
                                }
                            }} />
                        ))
                    }
                </div>

                <h3 className={styles.Title} style={{marginTop: 40}}>Get the most out of Agendakota</h3>

                <div className={styles.Inline} style={{marginTop: 20,marginBottom: 20}}>
                    <InfoCard 
                        title={'Buy your friends tickets and watch event together!'}
                        description={'With Agendakota you can invite or give your friend a surprise by buying ticket for them.'}
                        action={{
                            text: 'Explore',
                            link: 'https://agendakota.id',
                            target: '_blank'
                        }}
                    />
                </div>
            </div>

            <SidebarUser active={'personal-events'} />
            <HeaderUser expand={true} />
        </>
    )
}

export default PersonalEvent;