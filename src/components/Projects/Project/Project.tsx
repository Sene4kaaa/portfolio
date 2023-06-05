import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgAndAhref}>
                <img src={''} className={s.icon}></img>
                <a href='' className={s.watch}>Watch</a>
            </div>
            <div className={s.title_description}>
                <h3 className={s.tittle}>
                    {props.title}
                </h3>
                <p className={s.description}>
                    {props.description}
                </p>

            </div>

        </div>
    )
}