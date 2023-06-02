import React from 'react';
import s from './Footer.module.css'
import {Block} from "./Block/Block";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
                <h2 className={s.title}>Andrew Senkevich</h2>
                {/*<div>*/}
                {/*    <Block/>*/}
                {/*</div>*/}
                <h2 className={s.title}>© 2023 All rights reserved</h2>
            </div>

    )
}