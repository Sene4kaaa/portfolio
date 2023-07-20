import React from 'react';
import s from './RemoteWork.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Title} from "../../common/components/title/Title";
import {Button} from "../../common/components/button/Button";



export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteWorkContainer} `}>
                <Title title={'Looking into remote work options'}/>
                <div className={s.button}>
                   <Button text={'Hire Me'}/>
                </div>
            </div>
        </div>
    )
}