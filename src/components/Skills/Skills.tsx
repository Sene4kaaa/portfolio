import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/title/Title";
import {StyleType} from "../Projects/Project/Project";
import react from "../../assets/svg-icon/react-svgrepo-com.svg";
import javascript from "../../assets/svg-icon/js-official-svgrepo-com.svg";
import tp from "../../assets/svg-icon/typescript-svgrepo-com.svg";
import css from "../../assets/svg-icon/css-svgrepo-com.svg";
import sass from "../../assets/svg-icon/sass-svgrepo-com.svg";
import storybook from "../../assets/svg-icon/storybook-icon-svgrepo-com.svg";
import mui from "../../assets/svg-icon/material-ui-svgrepo-com.svg";
import unittests from "../../assets/svg-icon/unit-testing-svgrepo-com.svg";
import axios from "../../assets/svg-icon/axios-seeklogo.com.svg";
import {Fade} from "react-awesome-reveal";
import {Tilt} from 'react-tilt'


export const Skills = () => {

    const reactt: StyleType = {
        color: 'blue',
        backgroundImage: `url(${react})`,
    };

    const js: StyleType = {
        color: 'blue',
        backgroundImage: `url(${javascript})`,
    };
    const typeScriptt: StyleType = {
        color: 'blue',
        backgroundImage: `url(${tp})`,
    };

    const css_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${css})`,
    };
    const sass_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${sass})`,
    };
    const storyBook_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${storybook})`,
    };
    const mui_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${mui})`,
    };
    const unittests_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${unittests})`,
    };
    const axios_: StyleType = {
        color: 'blue',
        backgroundImage: `url(${axios})`,
    };

    return (
        <div className={s.skillsBlock}>
            <Fade direction={"left"} duration={1500}  /*triggerOnce={true}*/>
                <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={reactt} title={'React'}
                              />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={js} title={'JavaScript'}
                               />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={typeScriptt} title={'TypeScript'}
                             />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={css_} title={'CSS'}
                            />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={sass_} title={'SASS'}
                              />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={storyBook_} title={'StoryBook'}
                             />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={mui_} title={'MUI'}
                              />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={unittests_} title={'Unit Testing'}
                              />
                        </Tilt>
                        <Tilt className={'Tilt'} option={{max: 25} } >
                        <Skill style={axios_} title={'AXIOS'}
                             />
                        </Tilt>
                    </div>
                </div>
            </Fade>
        </div>
    )
}