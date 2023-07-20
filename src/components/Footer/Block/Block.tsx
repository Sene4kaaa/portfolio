import React from 'react';
import s from './Block.module.scss'
import {StyleType} from "../../Projects/Project/Project";

export type BlockPropsType = {
    style: StyleType
    src?:string
}


export const Block = (props: BlockPropsType) => {
    return (
        <div className={s.block} style={props.style}>
            <img src={props.src} alt="" className={s.block}/>
        </div>

)
}