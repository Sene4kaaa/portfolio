import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="#Main">Main</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            {/*<a href="#Contacts">Contacts</a>*/}
            <Link
                activeClass={s.active}
                to={"Contacts"}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>
        </div>
    )
}