import React, { useState } from "react";
import styles from "./styles/InputFile.module.css";
import { BiPlusCircle } from "react-icons/bi";

const InputFile = ({width = '100%', aspectRatio = 4/3, text = 'Add Cover Picture', sizeLabel = '1440 x 1028'}) => {
    const [file, setFile] = useState(null);

    return (
        <div className={styles.Container}>
            <div className={styles.Area} style={{
                width: width,
                aspectRatio: aspectRatio,
            }}>
                {
                    file === null &&
                    <>
                        <BiPlusCircle size={24} />
                        <div className={styles.Label}>{text}</div>
                        <div className={styles.Description}>{sizeLabel} (PNG or JPG)</div>
                    </>
                }
            </div>
        </div>
    )
}

export default InputFile;