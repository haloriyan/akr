import React, { useState } from "react";
import styles from "./styles/FAQ.module.css";

const FAQ = ({questions}) => {
    const [index, setIndex] = useState(0);

    if (window.screen.width > 480) {
        return (
            <div className={styles.Container}>
                <div className={styles.ListArea}>
                    {
                        questions.map((question, q) => (
                            <div className={`${styles.Item} ${q === index ? styles.Active : ''}`} key={q} onClick={() => setIndex(q)}>
                                {question.question}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.Content}>
                    <h3 className={styles.ContentTitle}>{questions[index].question}</h3>
                    <div className={styles.ContentDescription}>{questions[index].answer}</div>
                </div>
            </div>
        )
    }
}

export default FAQ;