import React from "react";
import styles from "./styles/Breadcrumb.module.css";
import { BiChevronRight } from "react-icons/bi";

const Breadcrumb = ({paths, height = 60, title}) => {
    return (
        <div className={styles.Area} style={{height: height}}>
            {
                paths.map((path, p) => (
                    <>
                        <div className={styles.Path}>{path}</div>
                        <BiChevronRight color="#999" size={20} />
                    </>
                ))
            }
            <div className={styles.Title}>{title}</div>
        </div>
    )
}

export default Breadcrumb;