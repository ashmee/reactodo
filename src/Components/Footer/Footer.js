import React from "react";
import PropTypes from 'prop-types'
import styles from './Footer.module.css'

const Footer = ( { count }) => (
    <div className={styles.tasks}> Осталось задач: {count} </div>
);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;