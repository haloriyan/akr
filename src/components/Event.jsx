import React from "react";
import styles from "./styles/Event.module.css";
import moment from "moment";

const Event = ({data, config = null, maxWidth = '32.1%', link = '#'}) => {
    const showTitle = (title, length = 30) => {
        let toReturn = title.substring(0, length);
        if (title.split(toReturn)[1] !== "") {
            toReturn += "...";
        }
        return toReturn;
    }
    return (
        <a href={link} className={styles.Event} style={{
            // flexBasis: maxWidth,
            // maxWidth: maxWidth
        }}>
            <img src={data.cover} alt={data.title} className={styles.Cover} style={config !== null && config.hasOwnProperty('coverStyle') ? config.coverStyle : null} />
            <div style={{marginTop: 10}}>
                <div className={styles.Title}>{showTitle(data.title)}</div>
                <div className={styles.Organizer}>Diadakan oleh <b>Agendakota</b></div>
                <div className={styles.Info}>
                    <div>{moment(data.start).format('dddd, DD MMM Y')}</div>
                    |
                    <div>{moment(data.start).format('HH:mm')} WIB</div>
                </div>
            </div>
        </a>
    )
}

export default Event;