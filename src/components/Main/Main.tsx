import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {StyleType} from '../Projects/Project/Project';
import avatarka from '../../assets/image/avatar.jpg'
import {Particle} from "../../common/components/particle/Particle";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Tilt} from 'react-tilt'


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
                        <ReactTypingEffect text={'Frontend Developer.'} speed={100} typingDelay={1000}
                                           eraseDelay={2000}/>
                    </div>
                    <Tilt className={'Tilt'} option={{max: 25} } >
                        <div className={s.photo} style={avatar}></div>
                    </Tilt>
                </div>
            </div>
        </Fade>
    )
}