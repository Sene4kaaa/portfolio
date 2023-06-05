import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} description={'Blabalblablablba fbfsbddddddddddddddddddddddddddddddvjvjwvbjwdvbwjdvbwjvbwjvbwjdvwvwwwwwwwwwwwwwwwwwwwwwwwwwsbsegrbsbfsfsbfsfsb dvdsv fsb vdfa bfdabfdbdbfbfbffsvfsvfsvfdsv f sfsfsfss'}/>
                    <Skill title={'CSS'} description={'Blblablablbalba sf s s fs s fsfs sfsfsfsfsffssf'}/>
                    <Skill title={'React'} description={'Blbalbalbalbasccs sfsfss sf sfssbfsfbs s sfsssss'}/>
            {/*        /!*<Skill title={'TypeScript'} description={'Blablablbablalba'}/>*!/*/}
                </div>
            </div>
        </div>
    )
}