import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './Menu.module.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from '../Todo/Todo'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'

class SimpleMenu extends React.Component {
    render() {
        return (
            <Router>
                <MenuList className={styles.menu}>
                    <Link to="/" className={styles.link}><MenuItem>Задачи</MenuItem></Link>
                    <Link to="/about/" className={styles.link}><MenuItem>О программе</MenuItem></Link>
                    <Link to="/contacts/" className={styles.link}><MenuItem>Контакты</MenuItem></Link>
                </MenuList>

                <Route path="/" exact component={Todo} />
                <Route path="/About/"  component={About} />
                <Route path="/contacts/"  component={Contacts} />
            </Router>
        )
    }
}

export default SimpleMenu;