import React from "react";
import styles from "./styles/Stage.module.css";

const Stage = ({stages}) => {
    return (
        <div className={styles.Area}>
            {
                stages.map((stage, s) => (
                    <div className={styles.Item} key={s}>
                        <div className={styles.CoverArea}>
                            <img src={stage.cover} alt={stage.title} className={styles.Cover} />
                            <div className={styles.CoverOverlay}>
                                {stage.title}
                            </div>
                        </div>

                        <div className={styles.Title}>{stage.title}</div>
                        <div className={styles.Description}>{stage.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Stage;