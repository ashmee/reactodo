import React from 'react';
import styles from "../About/About.module.css";

const About = () => (
    <div className={styles.main}>
        <div className={styles.wrap}>
            <h3 className={styles.title}>О программе</h3>
            <p className={styles.description}>Простой инструмент для управления повседневными задачами как в рабочих, так и в личных целях.</p>
        </div>
    </div>
);

export default About;