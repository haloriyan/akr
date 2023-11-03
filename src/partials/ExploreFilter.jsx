import React, { useState } from "react";
import styles from "./styles/ExploreFilter.module.css";
import Toggler from "../components/Toggler";
import Separator from "../components/Separator";
import { BiChevronDown, BiChevronDownCircle, BiX } from "react-icons/bi";
import Popup from "../components/Popup";
import Button from "../components/Button";

const ExploreFilter = () => {
    const [type, setType] = useState('Offline');

    const [cityOptionShow, setCityOptionShow] = useState(false);
    
    const [city, setCity] = useState(0);
    const cities = [
        {
            name: "Jakarta",
            image: "/images/cities/jakarta.jpg"
        },
        {
            name: "Surabaya",
            image: "/images/cities/surabaya.jpg"
        },
        {
            name: "Bali",
            image: "/images/cities/bali.jpg"
        },
        {
            name: "Bandung",
            image: "/images/cities/bandung.jpg"
        },
        {
            name: "Medan",
            image: "/images/cities/medan.jpg"
        },
    ]

    if (window.screen.width > 480) {
        return (
            <>
                <div className={styles.Filter}>
                    <Toggler
                        value={type} setValue={setType}
                        options={['Offline', 'Online']}
                        item={(option, index, isActive) => (
                            <div style={{
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? '#CA0C64' : '#212121'
                            }}>{option}</div>
                        )}
                    />
                    <Separator />
                    <div className={styles.Card} onClick={() => setCityOptionShow(true)}>
                        <img src={cities[city].image} alt={cities[city].name} className={styles.CityIcon} />
                        <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                            <div className={styles.CardLabel}>Kota :</div>
                            <div className={styles.CityName}>{cities[city].name}</div>
                        </div>
                        <BiChevronDownCircle />
                    </div>
                </div>

                {
                    cityOptionShow &&
                    <Popup onDismiss={() => setCityOptionShow(false)} width="100%" style={{borderBottomLeftRadius: 0,borderBottomRightRadius: 0}} containerStyle={{
                        alignItems: 'flex-end'
                    }}>
                        <div className="inline">
                            <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                                <div className={styles.Title}>Temukan di Kotamu</div>
                                <div className={styles.Description}>Jelajahi event paling seru yang ada di kotamu!</div>
                            </div>
                            <Button circle={true} accent="secondary" color="muted" onClick={() => setCityOptionShow(false)}>
                                <BiX size={20} />
                            </Button>
                        </div>

                        <div className={styles.AllCityArea}>
                            {
                                cities.map((cit, c) => (
                                    <div className={styles.AllCityItem} key={c} onClick={() => {
                                        setCity(c);
                                        setCityOptionShow(false);
                                    }}>
                                        <img src={cit.image} alt={cit.name} className={styles.AllCityImage} />
                                        <div className={styles.AllCityContent}>
                                            <div className={styles.AllCityName}>{cit.name}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Popup>
                }
            </>
        )
    } else {
        return (
            <div className={styles.FilterMobile}></div>
        )
    }
}

export default ExploreFilter;