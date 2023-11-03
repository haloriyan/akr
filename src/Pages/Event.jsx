import React, { useState } from "react";
import HeaderUser from "../partials/HeaderUser";
import Footer from "../partials/Footer";
import styles from "./styles/Event.module.css";
import Breadcrumb from "../components/Breadcrumb";
import Chip from "../components/Chip";

const EventDetail = () => {
    const [viewing, setViewing] = useState('Deskripsi');

    const event = {
        title: "Australia & UK Top Ranked Universities - Application Day",
        start: "2023-06-26 12:00:00",
        cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg"
    };

    return (
        <>
            <HeaderUser expand={true} />
            <div className="content">
                <Breadcrumb paths={['Home', 'Events']} title={event.title} />
                <div className={styles.Container}>
                    <div className={styles.Left}>
                        <img src={event.cover} alt={event.title} className={styles.Cover} />
                        <div className={styles.Navigator}>
                            <Chip options={['Deskripsi', 'Tiket', 'Syarat & Ketentuan']} value={viewing} setValue={setViewing} multiple={false} />
                        </div>

                        {
                            viewing === 'Deskripsi' &&
                            <>
                                <h2 className={styles.Title}>Deskripsi</h2>
                                <div className={styles.DescriptionArea}>
                                    <div>NNYEONG, YEOROBUN!</div>
                                    <div>Apakah Anda sudah siap menyambut gelombang K-Pop TERPANAS dengan OMO! Market?</div>
                                    <div>OMO! Market, sebuah festival yang tidak hanya memanjakan para pecinta K-Pop, tetapi juga merangkul semangat budaya pop Korea dalam sebuah pengalaman yang unik dan mendalam. Tanggal 11-12 November 2023 adalah hari di mana Jakarta akan menjadi pusat K-Pop terbesar yang pernah ada!</div>
                                    <div>Kenapa sih kalian ngga boleh melewati OMO! Market?</div>
                                    <ol>
                                        <li>100+ Tenants Kreatif: Mencari barang-barang K-Pop eksklusif atau produk lokal yang unik? OMO! Market memiliki lebih dari 100 tenant yang menjual berbagai barang, mulai dari merchandise K-Pop eksklusif hingga karya seni lokal yang terinspirasi oleh budaya Korea.</li>
                                        <li>Penampilan Guest Stars yang Menggelegar: Dalam 2 hari acara ini, Anda akan mendapatkan kesempatan untuk melihat penampilan live dari empat bintang tamu terkenal dalam dunia K-Pop, yakni Daizee, Friday Noraebang, Zirius, dan Reza Darmawangsa. Mereka akan membawakan lagu-lagu favorit Anda dengan energi yang tak tertandingi.</li>
                                        <li>Instalasi K-Pop yang Super Asik: Event ini tidak hanya tentang penampilan dan berbelanja. Ada juga instalasi K-Pop yang menakjubkan yang menghadirkan pengalaman mendalam dengan visual dan suara. Lihat BTS, NCT, Seventeen, EXO, Straykids, dan banyak idol lainnya menjadi bagian dari dunia K-Pop yang luar biasa.</li>
                                        <li>Festival Makanan dan Minuman: Jangan lupa untuk mencicipi makanan dan minuman yang lezat dengan berbagai pilihan makanan yang menggoda selera.</li>
                                    </ol>

                                    <div>Bergabunglah dalam festival K-Pop yang luar biasa ini di OMO! Market pada 11-12 November 2023. Dapatkan tiket Anda sekarang dan bersiap-siaplah untuk memasuki dunia K-Pop yang spektakuler dan tak terlupakan!</div>
                                </div>

                                <h2 className={styles.Title}>Syarat & Ketentuan</h2>
                                <div className={styles.DescriptionArea}>
                                    <ol>
                                        <li>Tiket hanya dibeli melalui virtual account, tidak menerima paylater.</li>
                                        <li>Terlambat check-in tiket hangus dan tidak dapat direfund.</li>
                                        <li>Check-in wajib 2 jam sebelum waktu mulai</li>
                                    </ol>
                                </div>
                            </>
                        }

                        {
                            viewing === 'Syarat & Ketentuan' &&
                            <>
                                <h2 className={styles.Title}>Syarat & Ketentuan</h2>
                                <div className={styles.DescriptionArea}>
                                    <ol>
                                        <li>Tiket hanya dibeli melalui virtual account, tidak menerima paylater.</li>
                                        <li>Terlambat check-in tiket hangus dan tidak dapat direfund.</li>
                                        <li>Check-in wajib 2 jam sebelum waktu mulai</li>
                                    </ol>
                                </div>
                            </>
                        }
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.Summary}>
                            <div className={styles.SummaryTitle}>{event.title}</div>
                            <div className="inline" style={{gap: 5}}>
                                <div className={styles.SummaryLocation}>
                                    AD Premier Office Park, DKI Jakarta.
                                </div>
                                <a href="https://maps.google.com" target="_blank" className={styles.SummaryLocationAction}>
                                    View on Map
                                </a>
                            </div>

                            <div className={styles.SummarySchedule}>
                                <div className={styles.SummaryScheduleItem}>
                                    Selasa, 26 Juni 2023 | 12:00 WIB - 17:00 WIB
                                </div>
                                <div className={styles.SummaryScheduleItem}>
                                    Selasa, 26 Juni 2023 | 12:00 WIB - 17:00 WIB
                                </div>
                            </div>

                            <div className={styles.SummaryOrganizer}>
                                <div className={styles.SummaryOrganizerLabel}>Diadakan oleh</div>
                                <div className={styles.SummaryOrganizerArea}>
                                    <img src="https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg" alt="Orgname" className={styles.SummaryOrganizerIcon} />
                                    <div className={styles.SummaryOrganizerName}>Omnyo Market Fair</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default EventDetail;