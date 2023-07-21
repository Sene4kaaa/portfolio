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
            <Fade direction={"left"}  duration={1500}>
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
          <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill style={reactt} title={'React'} description={'A JavaScript library for building user interfaces'}/>
                    <Skill style={js} title={'JavaScript'} description={'JavaScript is a dynamic programming language that\'s used for web development, in web applications, for game development, and lots more'}/>
                    <Skill  style={typeScriptt} title={'TypeScript'} description={'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'}/>
                    <Skill  style={css_} title={'CSS'} description={'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).'}/>
                    <Skill  style={sass_} title={'SASS'} description={'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'}/>
                    <Skill  style={storyBook_} title={'StoryBook'} description={'Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.'}/>
                    <Skill  style={mui_} title={'MUI'} description={'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.'}/>
                    <Skill  style={unittests_} title={'Unit Testing'} description={'Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually scrutinized for proper operation'}/>
                    <Skill  style={axios_} title={'AXIOS'} description={'Many projects on the web need to interface with a REST API at some stage in their development. Axios is a lightweight HTTP client based on the $http service'}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}