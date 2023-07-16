import React from 'react';
import s from './RemoteWork.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";



export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteWorkContainer} `}>
                <Title title={'Looking into remote work options'}/>
                <div className={s.button}>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}