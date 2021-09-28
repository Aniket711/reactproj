import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <div classame={Styles.nav_container}>
                <ul className={Styles.nav_menu}>
                    <li className={Styles.nav_item}>
                        <NavLink exact to="/" activeClassName={Styles.active} className={Styles.nav_links}>
                            Home
                        </NavLink>
                    </li>
                    <li className={Styles.nav_item}>
                        <NavLink exact to="/about" activeClassName={Styles.active} className={Styles.nav_links}>
                            About
                        </NavLink>
                    </li>
                    <li className={Styles.nav_item}>
                        <NavLink exact to="/skillsandprojects" activeClassName={Styles.active} className={Styles.nav_links}>
                            Skills and Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
