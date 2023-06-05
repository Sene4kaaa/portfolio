import React from 'react';
import s from './Form.module.css'


export const Form = () => {
    return (
        <div className={s.formContainer}>
            <div className={s.firstInput}>
                <input/>
            </div>
            <div  className={s.secondInput}>
                <input/>
            </div>
            <div  className={s.textarea}>
                <textarea/>
            </div>
        </div>

    )
}