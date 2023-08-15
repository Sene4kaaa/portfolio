import React, {FormEvent, useRef} from 'react';
import s from './Contacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser"


export const Contacts = () => {

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.current) {
            emailjs
                .sendForm("service_y4ligam", "template_6z7lewt", form.current, "9kwJsUc6pZPIE6wN_")
                .then((result: EmailJSResponseStatus) => {
                    form.current?.reset()
                })
        }
    }

    return (
        <div id={'Contacts'} className={s.contactsBlock}>
            <Fade direction={"top-left"} duration={1500}  /*triggerOnce={true}*/>
                <div>
                <div className={s.contactsContainer}>
                    <div className={s.block}>
                        <Title title={'Let\'s get in touch'}/>
                        <div className={s.blabla}>
                            <p>
                                Thank you for visiting my portfolio page! If you are looking for an <span
                                className={s.write}>purposeful and talented front-end
                        developer</span> who can help you create a unique and functional web interface, then you are in
                                the right
                                place.
                            </p>
                            <p>
                                If you have any questions, comments, or proposals, please do not hesitate to contact me
                                through the
                                contact form. I will be happy to discuss all the details.
                            </p>
                            <h3 className={s.write}>Write:</h3>
                            <h4>senkevich92@mail.ru</h4>
                        </div>
                    </div>

                    <div className={s.block}>
                        <Title title={'Contact'}/>
                        <div className={s.formAll}>
                            <form className={s.form} id={'form'} ref={form} onSubmit={sendEmail}>
                                <label className={s.name} htmlFor="name">What is Your Name:</label>
                                <input type={"text"} className={s.input} name={'name'} placeholder={'Name'} required/>
                                <label className={s.name} htmlFor="email">E-mail:</label>
                                <input type={"email"} className={s.input} name={'email'} placeholder={'Email'}
                                       required/>
                                <label className={s.name} htmlFor="message">Message:</label>
                                <textarea className={s.textarea} name={'message'} rows={3} placeholder={'Your message'}
                                          required></textarea>
                                <button type={"submit"} className={s.button}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={s.buttonCvblock}>
                    <a href={'https://drive.google.com/file/d/1LWjmjyPdAkFrSiDqaa_7MDXXLQZfyYTg/view?usp=drive_link'}>
                    <div className={s.buttonCv}>
                        <button>Download CV</button>
                    </div>
                    </a>
                </div>
                </div>
            </Fade>
        </div>
    )
}