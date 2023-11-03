import React, { useState } from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import SidebarUser from "../../../partials/SidebarUser";
import EventMenu from "../../../partials/EventMenu";
import styles from "../../styles/Event/Handbook.module.css";
import Icons from "../../../icons";
import Button from "../../../components/Button";
import { BiPlusCircle } from "react-icons/bi";

const EventHandbook = () => {
    const [hasHandbook, setHasHandbook] = useState(false);

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <EventMenu active={'handbook'} />
            <div className="content organizer">
                <div className="inline">
                    <h1 style={{margin: 0,display: 'flex',flexGrow: 1}}>Handbook</h1>
                    {
                        hasHandbook &&
                        <Button height={40}>
                            <BiPlusCircle />
                            Upload Handbook
                        </Button>
                    }
                </div>

                {
                    hasHandbook ?
                    <div className={styles.Area}>
                        <div className={styles.Item}>
                            <div className={styles.Icon}>
                                <img src={Icons.Document} alt="Document" />
                            </div>
                            <div className={styles.ItemContent}>
                                <div className={styles.ItemName}>Baby Eagle Document</div>
                                <div className={styles.ItemLabel}>Uploaded Yesterday, 13:15 PM</div>
                            </div>
                        </div>
                        <div className={styles.Item}>
                            <div className={styles.Icon}>
                                <img src={Icons.Document} alt="Document" />
                            </div>
                            <div className={styles.ItemContent}>
                                <div className={styles.ItemName}>Baby Eagle Document</div>
                                <div className={styles.ItemLabel}>Uploaded Yesterday, 13:15 PM</div>
                            </div>
                        </div>
                        <div className={styles.Item}>
                            <div className={styles.Icon}>
                                <img src={Icons.Document} alt="Document" />
                            </div>
                            <div className={styles.ItemContent}>
                                <div className={styles.ItemName}>Baby Eagle Document</div>
                                <div className={styles.ItemLabel}>Uploaded Yesterday, 13:15 PM</div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.EmptyArea}>
                        <img src="/images/book.png" alt="Handbook" className={styles.EmptyIcon} />
                        <div className={styles.EmptyTitle}>Tambahkan Handbook (PPT, PDF atau Word)</div>
                        <div className={styles.EmptyDescription}>Handbook atau dokumen yang dapat kamu bagikan ke peserta</div>
                        <Button onClick={() => setHasHandbook(true)}>
                            <BiPlusCircle />
                            Upload Handbook
                        </Button>
                    </div>
                }
            </div>
        </>
    )
}

export default EventHandbook;