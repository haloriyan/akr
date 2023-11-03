import React, { useState } from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import EventMenu from "../../../partials/EventMenu";
import Icons from "../../../icons";
import styles from "../../styles/Event/Landing.module.css";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { BiInfoCircle, BiQuestionMark } from "react-icons/bi";
import FAQ from "../../../components/FAQ";
import Separator from "../../../components/Separator";

const EventLanding = () => {
    const [viewing, setViewing] = useState('no-landing');

    const [domain, setDomain] = useState('');

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <EventMenu active={'landing-page'} />
            <div className="content organizer">
                <h1 style={{margin: 0}}>Landing Page</h1>
                {
                    viewing === 'no-landing' &&
                    <div className={styles.NoLandingContainer}>
                        <img src={Icons.CardAdd} alt="Create Landing" className={styles.NoLandingIcon} />
                        <div className={styles.NoLandingTitle}>Buat Landing Page Khusus</div>
                        <div className={styles.NoLandingDescription}>Tampilkan eventmu secara berbeda agar menjangkau lebih banyak orang</div>
                        <Button onClick={() => setViewing('create-landing')}>Buat Landing Page</Button>
                    </div>
                }

                {
                    viewing === 'create-landing' &&
                    <div className={styles.CreateContainer}>
                        <div className={styles.CreateTitle}>Informasi Penting</div>
                        <Input label="Domain" value={domain} onInput={e => setDomain(e.currentTarget.value)} required placeholder={'Tanpa https di awalan'} />
                        <div className="inline">
                            <a href="#" target="_blank" className="inline" style={{flexGrow: 1,gap: 10,fontSize: 12,color: '#666'}}>
                                <BiInfoCircle />
                                Apa itu Domain?
                            </a>
                        </div>

                        <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'flex-end',marginTop: 10}}>
                            <Button>Buat Landing Page</Button>
                        </div>

                        <Separator margin="50px 35% 50px 35%" width="25%" />

                        <FAQ
                            questions={[
                                {question: 'Di mana bisa mendapatkan domain?',answer: 'Kamu dapat menyewa domain sesuai keinginan dari domain provider di Indonesia'},
                                {question: 'Saya sudah menyewa domain, apa yang harus dilakukan?',answer: 'Kamu bisa membuka halaman DNS Management untuk mengganti A record dengan value 199.247.9.136'},
                            ]}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default EventLanding;