import React, { useState } from "react";
import styles from "./styles/Dropdown.module.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Dropdown = ({children, value}) => {
    const [optShow, setOptShow] = useState(false);

    return (
        <div className={styles.Area}>
            <div className={styles.Input}>
                <div className={styles.SelectedItem}>{value}</div>
                {
                    optShow ? <BiChevronUp /> : <BiChevronDown />
                }
            </div>
        </div>
    )
}

const Option = ({children}) => {
    return children;
}

export {
    Dropdown, Option
};