import React from 'react';
import styles from "../Contacts/Contacts.module.css";

const Contacts = () => (
    <div className={styles.main}>
        <div className={styles.wrap}>
        <h3 className={styles.title}>Контакты</h3>
        <a className={styles.contact__link} href="tel:+6493456758">8 982 654 06 71</a>
        <a className={styles.contact__link} href="mailto:ash.ei@ya.ru">ash.ei@ya.ru</a>
        </div>
    </div>
);

export default Contacts;