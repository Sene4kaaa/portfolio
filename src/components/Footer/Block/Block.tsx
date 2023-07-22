import React from 'react';
import s from './Block.module.scss'


export type BlockPropsType = {
    src?:string
}


export const Block = (props: BlockPropsType) => {
    return (
        <div className={s.blochHover}>
            <img src={props.src} alt="" className={s.block}/>
        </div>

)
}