import React from 'react';
import s from './RemoteWork.module.css'
import styleContainer from '../../common/Styles/Container.module.css'



export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteWorkContainer} `}>
                <h2 className={s.title}>Looking into remote work options</h2>
                <button>Hire Me</button>
            </div>
        </div>
    )
}