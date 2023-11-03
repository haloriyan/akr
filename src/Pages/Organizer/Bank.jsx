import React, { useEffect, useState } from "react";
import HeaderUser from "../../partials/HeaderUser";
import SidebarSimplified from "../../partials/SidebarSimplified";
import OrganizerMenu from "../../partials/OrganizerMenu";
import SidebarUser from "../../partials/SidebarUser";
import styles from "../styles/PersonalEvent.module.css";
import Button from "../../components/Button";
import { BiPlus, BiUser, BiX } from "react-icons/bi";

const OrganizerBank = () => {
    const [buttonText, setButtonText] = useState('Simpan');
    const [isLoading, setLoading] = useState(false);

    const banks = [
        {
            name: "Bank Tabungan Pensiunan Nasional",
            holder_name: "Riyan Satria Adi Tama",
            account_number: "90400062120"
        },
        {
            name: "Bank Rakyat Indonesia",
            holder_name: "Riyan Satria Adi Tama",
            account_number: "115601021344500"
        }
    ]

    const [isAdding, setAdding] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [isDeleting, setDeleting] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    useEffect(() => {
        document.title = "Bank Account - Agendakota";
    })
    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <OrganizerMenu active={'bank-account'} />
            <div className="content organizer">
                <div className="inline" style={{marginBottom: 20}}>
                    <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                        <h1 className={styles.Title}>Bank Account</h1>
                        <div className={styles.Description}>Manage bank account to withdraw your event sales</div>
                    </div>
                    <Button onClick={() => setAdding(true)}><BiPlus /> Add</Button>
                </div>

                <div style={{display: 'flex',flexDirection: 'column',gap: 20}}>
                {
                    banks.map((bank, b) => (
                        <div className={styles.BankItem} key={b}>
                            <div className={styles.BankLogo}></div>
                            <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                                <h3 className={styles.BankName}>{bank.name}</h3>
                                <div className="inline" style={{fontSize: 14,color: '#777',gap: 10,marginBottom: 10}}>
                                    {bank.account_number}
                                </div>
                                <div className="inline" style={{fontSize: 12,color: '#777',gap: 10}}>
                                    <BiUser />
                                    {bank.holder_name}
                                </div>
                            </div>
                            <div>
                            <Button color="red" accent="secondary"><BiX /></Button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default OrganizerBank;