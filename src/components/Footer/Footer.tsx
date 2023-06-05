import React from 'react';
import s from './Footer.module.css'
import {Block} from "./Block/Block";
import styleContainer from "../../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <div>
                    <h2 className={s.title}>Andrew Senkevich</h2>
                </div>
                <div className={`${styleContainer.container} ${s.blockContainer} `}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <div>
                    <h2 className={s.title}>© 2023 All rights reserved</h2>
                </div>
            </div>
        </div>

    )
}