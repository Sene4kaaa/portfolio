import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Title} from "../../common/components/title/Title";


export const Contacts = () => {


    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <label className={s.name} htmlFor="name">What is Your Name:</label>
                    <input type={"text"} className={s.input} name={'name'}/>
                    <label className={s.name} htmlFor="email">E-mail:</label>
                    <input type={"email"} className={s.input}  name={'name'}/>
                    <label className={s.name} htmlFor="message">Message:</label>
                    <textarea className={s.textarea} name={'message'} rows={3}></textarea>
                    <button type={"submit"} className={s.button}>Send</button>
                </form>

            </div>
        </div>
    )
}