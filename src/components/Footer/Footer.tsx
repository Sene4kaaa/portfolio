import React from 'react';
import s from './Footer.module.scss'
import {Block} from "./Block/Block";
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import {StyleType} from "../Projects/Project/Project";
import instagram from "../../assets/svg-icon/instagram-1-svgrepo-com.svg";
import telegram from "../../assets/svg-icon/telegram-logo-svgrepo-com.svg";
import github from "../../assets/svg-icon/github-svgrepo-com.svg";
import linkedin from "../../assets/svg-icon/linkedin-svgrepo-com.svg";

export const Footer = () => {

    const insta: StyleType = {
        color: 'blue',
        backgroundImage: `url(${instagram})`,
    };

    const telega: StyleType = {
        color: 'blue',
        backgroundImage: `url(${telegram})`,
    };

    const gitHub: StyleType = {
        color: 'blue',
        backgroundImage: `url(${github})`,
    };

    const linkIN: StyleType = {
        color: 'blue',
        backgroundImage: `url(${linkedin})`,
    };

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <Title title={'Andrew Senkevich'}/>
                <div className={`${styleContainer.container} ${s.blockContainer} `}>
                    <Block style={insta}/>
                    <Block style={telega}/>
                    <Block style={gitHub}/>
                    <Block style={linkIN}/>
                </div>
                <span className={s.title}>© 2023 All rights reserved</span>
            </div>
        </div>

    )
}