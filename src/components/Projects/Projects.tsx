import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/title/Title";


export const Projects = () => {

    // const socialNetwork = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer} `}>
                <Title title={'Projects'}/>
                <div className={`${s.projects}`}>
                    <Project title={'Social Network'} description={'Project descriptdsav savsdvdsvsgvsgfvvgfgvf gf fg svgs  ds gdssdvdsvdsvsdvdsvdsvdsvdfbbfdfb fbfd bf fb db fd bfd fdb fbd fdb fdb fdbs  svdds vsion'}/>
                    <Project title={'Todolist'} description={'Project description'}/>
                    {/*<Project title={'Portfolio'} description={'Project description'}/>*/}
                </div>
            </div>
        </div>
    )
}