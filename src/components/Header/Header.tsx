import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {Block} from "../Footer/Block/Block";
import instagram from "../../assets/svg-icon/instagram-1-svgrepo-com.svg";
import telegram from "../../assets/svg-icon/telegram-logo-svgrepo-com.svg";
import github from "../../assets/svg-icon/github-svgrepo-com.svg";
import linkedin from "../../assets/svg-icon/linkedin-svgrepo-com.svg";


export const Header = () => {
    return (

        <div className={s.header}>
            <Nav/>
        </div>
    )
}