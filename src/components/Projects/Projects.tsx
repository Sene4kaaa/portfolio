import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';
import todoImage from '../../assets/image/to-do-list.jpg'
import socialImage from '../../assets/image/socialNetwork.jpg'
import {Fade} from "react-awesome-reveal";

export const Projects = () => {



    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div id={'Projects'} className={s.projectsBlock}>
            <Fade direction={"right"} duration={1500} className={s.fade} triggerOnce={false}>
            <div className={`${styleContainer.container} ${s.projectsContainer} `}>

                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project style={socialNetwork} title={'Social Network'} description={'Stack: React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik, Class Components'} url={'https://sene4kaaa.github.io/samurai-way-main/'}/>
                    <Project  style={todolist} title={'Todolist'} description={'Project description'} url={'https://sene4kaaa.github.io/todolist-primary/'}/>
                </div>

            </div>
            </Fade>
        </div>
    )
}