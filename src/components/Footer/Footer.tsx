import React from 'react';
import s from './Footer.module.scss'
import {Block} from "./Block/Block";
import styleContainer from "../../common/styles/Container.module.scss";
import {Title} from "../../common/components/title/Title";
import instagram from "../../assets/svg-icon/instagram-1-svgrepo-com.svg";
import telegram from "../../assets/svg-icon/telegram-logo-svgrepo-com.svg";
import github from "../../assets/svg-icon/github-svgrepo-com.svg";
import linkedin from "../../assets/svg-icon/linkedin-svgrepo-com.svg";


export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <Title title={'Andrew Senkevich'}/>
                <div className={`${styleContainer.container} ${s.blockContainer} `}>
                    <a href={'https://www.instagram.com/senkevich92_/'}>
                        <Block src={instagram} /></a>
                    <a href={'https://t.me/Andrew_Sene4kaa'}>
                        <Block src={telegram}/></a>
                    <a href={'https://github.com/Sene4kaaa'}>
                        <Block src={github}/></a>
                    <a href={'https://ru.linkedin.com/'}>
                        <Block src={linkedin}/></a>

                </div>
                <span className={s.title}>© 2023 All rights reserved</span>
            </div>
        </div>
    )
}