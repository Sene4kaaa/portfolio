import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {StyleType} from '../Projects/Project/Project';
import avatarka from '../../assets/image/avatar.jpg'
import {Particle} from "../../common/components/particle/Particle";
import {Fade} from "react-awesome-reveal";


export const Main = () => {

    const avatar: StyleType = {
        color: 'blue',
        backgroundImage: `url(${avatarka})`,
    };


    return (
        <Fade direction={"right"} duration={1500} className={s.fade} triggerOnce={true}>
            <div className={s.mainBlock}>

                <div className={s.particle}>
                    <Particle/>
                </div>
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
        </Fade>
    )
}