import React, { useEffect, useState } from "react";
import { 
    Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, Filler, Legend
} from "chart.js";
import {faker} from "@faker-js/faker";

import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import SidebarUser from "../../../partials/SidebarUser";
import EventMenu from "../../../partials/EventMenu";
import styles from "../../styles/Dashboard.module.css";
import { BiCheck, BiCopy } from "react-icons/bi";
import Chip from "../../../components/Chip";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend
)

const EventDashboard = () => {
    const [chartFilter, setChartFilter] = useState('Today');
    const labels = ['28 Okt', '31 Okt', '33 Okt', '37 Okt', '2 Feb', '4 Feb', '6 Feb'];
    const [customSlug, setCustomSlug] = useState('event-bagus');

    const [linkMessage, setLinkMessage] = useState('');
    useEffect(() => {
        if (linkMessage !== "") {
            let to = setTimeout(() => {
                setLinkMessage('');
            }, 3400);
            return () => clearTimeout(to);
        }
    }, [linkMessage]);

    const copyLink = () => {
        navigator.clipboard.writeText(`https://akt.events/${customSlug}`)
        setLinkMessage('Disalin!')
    }

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <EventMenu active={'dashboard'} />
            <div className="content organizer">
                <h1>Dashboard</h1>
                <div className={styles.CardArea}>
                    <div className={styles.Card}>
                        <div className={styles.CardLabel}>ATTENDEES</div>
                        <div className={styles.CardNumber}>424</div>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.CardLabel}>SALES</div>
                        <div className={styles.CardNumber}>Rp 24.323.302</div>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.CardLabel}>
                            <div style={{display: 'flex',flexGrow: 1}}>EVENT LINK</div>
                            <div style={{color: '#CA0C64',cursor: 'pointer',fontWeight: 600}} onClick={() => setLinkMessage('Disimpan')}>Ganti</div>
                        </div>
                        <div className={styles.EventLinkArea}>
                            <div style={{color: '#999'}}>akt.events/</div>
                            <input type="text" value={customSlug} onInput={e => setCustomSlug(e.currentTarget.value)} />
                            <div className={styles.CopyLink} onClick={() => copyLink()} style={{
                                aspectRatio: linkMessage === "" ? 1 : 'auto',
                                padding: linkMessage === "" ? "0px" : "0px 10px",
                                display: 'flex',
                            }}>
                                {
                                    linkMessage !== "" ?
                                        <div className={styles.CopyLinkMessage}><BiCheck size={16} /> {linkMessage}</div>
                                    :
                                        <BiCopy />
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Card} style={{marginTop: 20}}>
                    <div className="inline">
                        <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                            <div className={styles.CardLabel} style={{marginBottom: 10}}>Total Revenue Selling</div>
                            <div className={styles.CardNumber}>Rp 32.322.405</div>
                        </div>
                        <Chip
                            value={chartFilter} setValue={setChartFilter}
                            options={['Today', 'This Week', 'All Time']}
                            multiple={false}
                            containerStyle={{marginTop: 0}}
                        />
                    </div>

                    <Line
                        options={{
                            responsive: true,
                            bezierCurve: true,
                        }}
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    fill: true,
                                    label: 'Total Selling',
                                    data: labels.map(() => faker.datatype.number({min: 50000, max: 5000000})),
                                    borderColor: '#2196f3',
                                    backgroundColor: '#2196f380'
                                }
                            ]
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default EventDashboard;