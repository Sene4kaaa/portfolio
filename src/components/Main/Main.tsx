import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {StyleType} from '../Projects/Project/Project';
import avatarka from '../../assets/image/avatar.jpg'


export const Main = () => {

    const avatar: StyleType = {
        color: 'blue',
        backgroundImage: `url(${avatarka})`,
    };


    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Andrew Senkevich</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo} style={avatar}>
                </div>
            </div>

        </div>
    )
}