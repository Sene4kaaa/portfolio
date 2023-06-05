import React from 'react';
import s from './RemoteWork.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteWorkContainer} `}>
                <div className={s.title}>
                    <h2>Looking into remote work options</h2>
                </div>
                <div className={s.button}>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}