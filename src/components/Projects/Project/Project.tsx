import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <button>Watch</button>
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