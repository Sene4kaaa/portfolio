import React from 'react';
import s from './Footer.module.css'
import {Block} from "./Block/Block";
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <Title title={'Andrew Senkevich'}/>
                <div className={`${styleContainer.container} ${s.blockContainer} `}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <span className={s.title}>© 2023 All rights reserved</span>
            </div>
        </div>

    )
}