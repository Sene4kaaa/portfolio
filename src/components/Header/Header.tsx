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
            <div className={s.title}>Sene4kaaa</div>
            <Nav/>
            <div className={s.icons}>
                <a href={'https://www.instagram.com/senkevich92_/'}>
                    <Block src={instagram}/></a>
                <a href={'https://t.me/Andrew_Sene4kaa'}>
                    <Block src={telegram}/></a>
                <a href={'https://github.com/Sene4kaaa'}>
                    <Block src={github}/></a>
                <a href={'https://ru.linkedin.com/'}>
                    <Block src={linkedin}/></a>
            </div>
        </div>
    )
}