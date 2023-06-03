import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer} `}>
              <div className={s.item}>
                  <h2 className={s.title}>Projects</h2>
              </div>
                <div className={`${s.projects}`}>
                    <Project title={'Social Network'} description={'Blablabalba ldadbavwb vwrrwvrwv'}/>
                    <Project title={'Todolist'} description={'Blablabalba ldadbavwb vwrrwvrwv'}/>
                </div>
            </div>
        </div>
    )
}