import React from "react";
import styles from './App.module.css'
import SimpleMenu from '../Menu/Menu'

const App = () =>  (
    <div className={styles.main}>
        <div className={styles.wrap}>
            <SimpleMenu />
        </div>
    </div>
);


export { App } ;