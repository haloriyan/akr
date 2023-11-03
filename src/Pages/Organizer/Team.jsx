import React, { useEffect, useState } from "react";
import HeaderUser from "../../partials/HeaderUser";
import SidebarSimplified from "../../partials/SidebarSimplified";
import OrganizerMenu from "../../partials/OrganizerMenu";
import SidebarUser from "../../partials/SidebarUser";
import generalStyles from "../styles/PersonalEvent.module.css";
import styles from "../styles/Organizer/Team.module.css";
import axios from "axios";
import config from "../../config";
import { BiX } from "react-icons/bi";
import Popup from "../../components/Popup";
import Separator from "../../components/Separator";
import Button from "../../components/Button";

const OrganizerTeam = () => {
    const [teams, setTeams] = useState([
        {name: "Riyan",photo: 'https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg'},
        {name: "Satria",photo: 'https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg'},
        {name: "Adi",photo: 'https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg'},
        {name: "Tama",photo: 'https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg'},
    ]);
    const [team, setTeam] = useState(null);
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    const [isRemoving, setRemoving] = useState(false);
    const [isChangingRole, setChangingRole] = useState(false);

    useEffect(() => {
        document.title = "Team - Agendakota"
    })

    useEffect(() => {
        if (isLoading) {
            setLoading(false);
            axios.post(`${config.baseUrl}/api`)
            .then(response => {
                let res =response.data;
                // setTeams(res.teams);
            })
        }
    }, [isLoading]);

    const submit = () => {
        axios.post(`${config.baseUrl}/api`)
        .then(response => {
            let res = response.data;
        })
    }

    const add = (e) => {
        let name = email.split('@')[0];
        let tms = [...teams];
        tms.push({
            name: name,
            photo: "https://i1.sndcdn.com/avatars-000225426854-qk8agf-t500x500.jpg"
        })
        setTeams(tms);
        setEmail('');
        e.preventDefault();
    }
    const remove = (index) => {
        let tms = [...teams];
        tms.splice(index, 1);
        setTeams(tms);
    }

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <OrganizerMenu active={'team'} />
            <div className="content organizer">
                <div className="inline">
                    <h1 className={generalStyles.Title} style={{display: 'flex',flexGrow: 1}}>Team</h1>
                    <form className={styles.FormAdd} onSubmit={add}>
                        <input type="text" placeholder="Ketik email untuk menambahkan" value={email} onInput={e => setEmail(e.currentTarget.value)} required />
                        <button>Add People</button>
                    </form>
                </div>
                <div className={styles.Area}>
                    {
                        teams.map((tim, t) => (
                            <>
                                <div className={styles.Item} key={t}>
                                    <img src={tim.photo} alt={tim.name} className={styles.ItemIcon} />
                                    <div className={styles.ItemContent}>
                                        <div className={styles.Name}>{tim.name}</div>
                                        <div className={styles.Role}>Administrator</div>
                                    </div>
                                    <Button height={30} accent="secondary" onClick={() => {
                                        setTeam(tim);
                                        setChangingRole(true);
                                    }}>Set Role</Button>
                                    <Button height={30} accent="tertiary" color="red" onClick={() => remove(t)}>Remove</Button>
                                </div>
                                {
                                    t !== teams.length -1 &&
                                    <Separator margin="10px 0px" />
                                }
                            </>
                        ))
                    }
                </div>
            </div>

            {
                isChangingRole &&
                <Popup onDismiss={() => setChangingRole(false)}>
                    <div className="inline">
                        <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                            <h3 className={generalStyles.Title} style={{fontSize: 18}}>Set Team Role</h3>
                            <div className={generalStyles.Description}>Change role of {team.name} for Agendakota</div>
                        </div>
                        <Button circle={true} accent="secondary" color="muted" onClick={() => setChangingRole(false)}>
                            <BiX />
                        </Button>
                    </div>
                </Popup>
            }
        </>
    )
}

export default OrganizerTeam;