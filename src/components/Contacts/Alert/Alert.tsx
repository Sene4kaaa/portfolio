import React, {FC, useEffect, useState} from "react"
import s from "./Alert.module.scss"

type Props = {
    message: string
}

export const Alert: FC<Props> = (props) => {
    const [message, setMessage] = useState<string>("")

    const handleClose = () => {
        setMessage("")
    }

    useEffect(() => {
        setMessage(props.message)
        const timer = setTimeout(() => {
            setMessage("")
        }, 10000)

        return () => {
            clearTimeout(timer)
        }
    }, [props.message])

    if (!message) return null

    return (
        <div className={s.wrapper}>
            <div onClick={handleClose}>{message}</div>
        </div>
    )
}