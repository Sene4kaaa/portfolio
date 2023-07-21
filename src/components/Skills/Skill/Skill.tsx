import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    style: StyleType
}

export  type StyleType = {
    color: string
    backgroundImage: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill} >
            <div className={s.icon} style={props.style}></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
            </span>
        </div>
    )
}