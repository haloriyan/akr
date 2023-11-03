import React, { useEffect, useState } from "react";
import HeaderUser from "../../partials/HeaderUser";
import SidebarSimplified from "../../partials/SidebarSimplified";
import OrganizerMenu from "../../partials/OrganizerMenu";
import SidebarUser from "../../partials/SidebarUser";
import styles from "../styles/PersonalEvent.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BiBriefcase, BiBuilding, BiGroup, BiUser } from "react-icons/bi";
import axios from "axios";
import config from "../../config";

const OrganizerLegality = () => {
    const [name, setName] = useState('');
    const [businessEntity, setBusinessEntity] = useState('pt');

    const [buttonText, setButtonText] = useState('Simpan');
    // const []
    
    useEffect(() => {
        document.title = "Legality - Agendakota"
    });

    const businessEntities = [
        {
            code: "pt",
            icon: <BiBriefcase />,
            color: '#e74c3c',
            name: "Perusahaan",
            description: "Lorem ipsum dulu aja"
        },
        {
            code: "personal",
            icon: <BiUser />,
            color: '#34495e',
            name: "Perorangan",
            description: "Lorem ipsum dulu aja"
        },
        {
            code: "community",
            icon: <BiGroup size={24} />,
            color: '#2ecc71',
            name: "Komunitas",
            description: "Lorem ipsum dulu aja"
        },
    ]

    const update = () => {
        setButtonText('Menyimpan...');
        let formData = new FormData();

        axios.post(`${config.baseUrl}/api`, formData)
        .then(response => {
            let res = response.data;
            setButtonText('Simpan');
        })
        .catch(e => {
            setButtonText('Simpan');
        })
    }

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <OrganizerMenu active={'legality'} />
            <div className="content organizer">
                <div className="inline" style={{marginBottom: 20}}>
                    <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                        <h1 className={styles.Title}>Legalitas</h1>
                        <div className={styles.Description}>Manage information about the company and PIC representing your organizer</div>
                    </div>
                    <Button>{buttonText}</Button>
                </div>

                <Input label="Nama Perusahaan" value={name} setValue={setName} required />
                
                <div style={{fontSize: 18,marginBottom: 20,marginTop: 20,color: '#212121',fontWeight: 600}}>Bentuk Organisasi</div>
                <div className="inline" style={{flexWrap: 'wrap',alignItems: 'flex-start'}}>
                    {
                        businessEntities.map((entity, e) => (
                            <div key={e} className={`${styles.BusinessEntityCard} ${entity.code === businessEntity ? styles.Active : ''}`} onClick={() => setBusinessEntity(entity.code)}>
                                <div className="inline">
                                    <div className={styles.Icon} style={{backgroundColor: entity.color}}>
                                        {entity.icon === null ? entity.code.toUpperCase() : entity.icon}
                                    </div>
                                    <div>
                                        <div className={styles.Title} style={{fontSize: 16}}>{entity.name}</div>
                                        <div className={styles.Description}>{entity.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div style={{fontSize: 18,marginBottom: 10,marginTop: 40,color: '#212121',fontWeight: 600}}>Dokumen Legalitas</div>
                <div className={styles.FileArea}>
                    <div className={styles.FilePreview}></div>
                    <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                        <div className={styles.FileLabel}>KTP PIC</div>
                        <div className={styles.FileName}>KTP Riyan.JPG</div>
                    </div>
                    <Button>Ganti</Button>
                </div>
                <div className={styles.FileArea}>
                    <div className={styles.FilePreview}></div>
                    <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                        <div className={styles.FileLabel}>SK Kemenkumham</div>
                        <div className={styles.FileName} style={{color: '#e74c3c'}}>Belum Mengupload</div>
                    </div>
                    <Button>Upload</Button>
                </div>
            </div>
        </>
    )
}

export default OrganizerLegality;