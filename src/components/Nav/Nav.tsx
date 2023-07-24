import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                href={''}
                to={"Main"}
                spy={true}
                smooth={true}
                offset={1}
                duration={1500}
            >Main</Link>
            <Link
                activeClass={s.active}
                href={''}
                to={"Skills"}
                spy={true}
                smooth={true}
                offset={-55}
                duration={1500}
            >Skills</Link>
            <Link
                activeClass={s.active}
                href={''}
                to={"Projects"}
                spy={true}
                smooth={true}
                offset={-55}
                duration={1500}
            >Projects</Link>
            <Link
                activeClass={s.active}
                href={''}
                to={"Contacts"}
                spy={true}
                smooth={true}
                offset={-1}
                duration={1500}
            >Contacts</Link>
        </div>
    )
}