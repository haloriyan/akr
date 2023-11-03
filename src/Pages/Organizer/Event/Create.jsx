import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/CreateEvent.module.css";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import OrganizerMenu from "../../../partials/OrganizerMenu";
import Icons from "../../../icons";
import { BiChevronLeft } from "react-icons/bi";
import Button from "../../../components/Button";
import InputFile from "../../../components/InputFile";
import Input from "../../../components/Input";
import axios from "axios";
import config from "../../../config";

const CreateEvent = () => {
    const { organizerID } = useParams();
    const [eventType, setEventType] = useState(null);
    const [publishText, setPublishText] = useState('Publish');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = (e) => {
        e.preventDefault();
        setPublishText('Publishing...');
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        axios.post(`${config.baseUrl}/api`, formData)
        .then(response => {
            let res = response.data;
            setPublishText('Publish');
        })
        .catch(e => {
            setPublishText('Publish');
        })
    }

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <OrganizerMenu active={'events'} />
            {
                eventType === null ?
                    <div className="content organizer">
                        <div className={styles.Title}>Buat Event Baru</div>
                        <div className={styles.Description}>Pilih tipe event yang akan kamu buat</div>

                        <div className={styles.EventTypeArea}>
                            <div className={styles.EventTypeItem} onClick={() => setEventType('onsite')}>
                                <img src={Icons.OnsiteEvent} alt="Onsite Event" className={styles.EventTypeIcon} />
                                <div className={styles.EventTypeName}>Onsite Event</div>
                            </div>
                            <div className={styles.EventTypeItem} onClick={() => setEventType('hybrid')}>
                                <img src={Icons.HybridEvent} alt="Hybrid Event" className={styles.EventTypeIcon} />
                                <div className={styles.EventTypeName}>Hybrid Event</div>
                            </div>
                            <div className={styles.EventTypeItem} onClick={() => setEventType('online')}>
                                <img src={Icons.OnlineEvent} alt="Online Event" className={styles.EventTypeIcon} />
                                <div className={styles.EventTypeName}>Online Event</div>
                            </div>
                        </div>
                    </div>
                :
                <div className="content organizer" style={{padding: 0}}>
                    <div className={styles.Navigation} onClick={() => setEventType(null)}>
                        <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',flexGrow: 1,gap: 20,cursor: 'pointer',fontWeight: 600}}>
                            <BiChevronLeft size={20} />
                            <div>Buat event {eventType} baru</div>
                        </div>
                        <Button height={40} accent="secondary" color="muted">Simpan Draft</Button>
                        <Button height={40}>Publish</Button>
                    </div>

                    <div style={{padding: 20}}>
                        <InputFile 
                            width={window.screen.width > 480 ? '50%' : '100%'}
                            aspectRatio={'5/2'}
                        />

                        <Input label="Nama Event" placeholder={'Nama eventmu yang kece'} value={title} onInput={e => setTitle(e.currentTarget.value)} />
                    </div>
                </div>
            }
        </>
    )
}

export default CreateEvent;