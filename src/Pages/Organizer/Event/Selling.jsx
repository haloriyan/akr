import React, { useState } from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import EventMenu from "../../../partials/EventMenu";
import Input from "../../../components/Input";
import styles from "../../styles/Event/Selling.module.css";
import { BiSearch } from "react-icons/bi";
import Button from "../../../components/Button";
import { Cell, Row, Table } from "../../../components/Table";

const EventSelling = () => {
    const [sales, setSales] = useState([
        {
            id: 1,
            ticket: {
                name: "VIP",
                price: 25000,
            },
            buyer: {
                name: "Riyan Satria"
            },
            quantity: 3,
            created_at: "2023-11-01 16:50:00",
        },
        {
            id: 2,
            ticket: {
                name: "VIP",
                price: 25000,
            },
            buyer: {
                name: "Intan Safira"
            },
            quantity: 3,
            created_at: "2023-11-01 16:55:00",
        },
    ])
    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <EventMenu active={'selling'} />
            <div className="content organizer" style={{padding: '20px 20px 40px 40px'}}>
                <div className="inline">
                    <h1 style={{margin: 0,fontSize: 20,display: 'flex',flexGrow: 1}}>Selling</h1>
                    <Input label="Cari Transaksi" required={true} right={
                        <div style={{position: 'absolute',right: 20,top: 26}}>
                            <BiSearch size={20} />
                        </div>
                    } />
                </div>

                <div className={styles.CardArea}>
                    <div className={styles.Card}>
                        <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                            <div className={styles.CardLabel}>Total Penjualan</div>
                            <div className="inline" style={{marginTop: 20,gap: 10}}>
                                <div className={styles.CardLabel}>IDR</div>
                                <div className={styles.CardNumber}>
                                    254.232.230
                                </div>
                            </div>
                        </div>
                        <Button accent="tertiary" color="muted">Withdraw</Button>
                    </div>
                    <div className={styles.Card}>
                        <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                            <div className={styles.CardLabel}>Penjualan</div>
                            <div className="inline" style={{marginTop: 20,gap: 10}}>
                                <div className={styles.CardNumber}>
                                    254
                                </div>
                                <div className={styles.CardLabel}>Tiket</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height: 40}}></div>

                <Table>
                    <Row heading={true}>
                        <Cell>ID</Cell>
                        <Cell>Tiket</Cell>
                        <Cell>Buyer</Cell>
                    </Row>
                    {
                        sales.map((sl, s) => (
                            <Row key={s}>
                                <Cell>{sl.id}</Cell>
                                <Cell>{sl.ticket.name}</Cell>
                                <Cell>{sl.buyer.name}</Cell>
                            </Row>
                        ))
                    }
                </Table>
            </div>
        </>
    )
}

export default EventSelling;