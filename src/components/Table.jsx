import React from "react";
import styles from "./styles/Table.module.css";

const Table = ({children}) => {
    return (
        <table border={0}>
            {children}
        </table>
    )
}
const Row = ({children, heading = false}) => {
    return (
        <tr className={`${styles.Row} ${heading ? styles.Heading : ''}`}>
            {children}
        </tr>
    )
}
const Cell = ({children}) => {
    return (
        <td className={styles.Cell}>
            {children}
        </td>
    )
}

export {
    Table, Row, Cell
}