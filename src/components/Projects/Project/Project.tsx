import React from 'react';
import s from './Project.module.scss'

export type ProjectPropsType = {
    title: string
    description: string
    style: StyleType
    url: string
}

export  type StyleType = {
    color: string
    backgroundImage: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgAndAhref}>
                <div className={s.icon} style={props.style}></div>
                <a href={props.url} className={s.watch}>Watch</a>
            </div>
            <div className={s.title_description}>
                <h3 className={s.tittle}>
                    {props.title}
                </h3>
                <span className={s.description}>
                    {props.description}
                </span>
            </div>

        </div>
    )
}