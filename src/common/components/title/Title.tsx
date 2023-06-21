import React from "react";
import s from "./Title.module.scss"


export type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return <div className={s.title}>
        <h2>{props.title}</h2>
    </div>
}