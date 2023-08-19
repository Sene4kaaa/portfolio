import React from 'react';
import s from './Footer.module.scss'
import {Block} from "./Block/Block";
import styleContainer from "../../common/styles/Container.module.scss";
import codewars from "../../assets/svg-icon/codewars.svg";
import telegram from "../../assets/svg-icon/telegram-logo-svgrepo-com.svg";
import github from "../../assets/svg-icon/github-svgrepo-com.svg";
import linkedin from "../../assets/svg-icon/linkedin-svgrepo-com.svg";

export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <div className={s.blockContainer}>
                    <div>
                        <span className={s.title}>© 2023 All rights reserved <a className={s.href}
                                                                                href={'https://github.com/Sene4kaaa'}>Andrew Senkevich</a> </span>
                    </div>
                    <div className={s.icons}>
                        <a href={'https://www.codewars.com/users/Sene4kaaa'}>
                            <Block src={codewars}/></a>
                        <a href={'https://t.me/Andrew_Sene4kaa'}>
                            <Block src={telegram}/></a>
                        <a href={'https://github.com/Sene4kaaa'}>
                            <Block src={github}/></a>
                        <a href={'https://linkedin.com/in/andrew-senkevich-127439285'}>
                            <Block src={linkedin}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}