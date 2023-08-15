import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {StyleType} from '../Projects/Project/Project';
import avatarka from '../../assets/image/IMG_2991.jpg'
import {Particle} from "../../common/components/particle/Particle";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Tilt} from 'react-tilt'
import {Block} from "../Footer/Block/Block";
import telegram from "../../assets/svg-icon/telegram-logo-svgrepo-com.svg";
import linkedin from "../../assets/svg-icon/linkedin-svgrepo-com.svg";


export const Main = () => {

    const avatar: StyleType = {
        color: 'blue',
        backgroundImage: `url(${avatarka})`,
    };

    return (

        <div id={'Main'} className={s.mainBlock}>
            <Particle/>
            <Fade direction={"right"} duration={1500}  /*triggerOnce={true}*/>
                <div className={`${styleContainer.container} ${s.sacascsa} `}>

                    <div className={s.text}>
                        <span>Hi There</span>
                        <h1>I am Andrew Senkevich</h1>
                        <ReactTypingEffect text={'Frontend Developer.'} speed={100} typingDelay={1000}
                                           eraseDelay={2000}/>
                        <div className={s.icons}>
                            <a href={'https://t.me/Andrew_Sene4kaa'}>
                                <Block src={telegram}/></a>
                            <a href={'https://linkedin.com/in/andrew-senkevich-127439285'}>
                                <Block src={linkedin}/></a>
                        </div>
                    </div>
                    <Tilt className={'Tilt'} option={{max: 25}}>
                        <div className={s.photoContainer}>
                            <div className={s.photo} style={avatar}></div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>

    )
}