import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea className={s.textarea}/>
                    <button type={"submit"} className={s.button}>Send</button>
                </form>

            </div>
        </div>
    )
}