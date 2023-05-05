import React from 'react'
import ReactDOM from 'react-dom'
import style from './modal.module.css'
import { addUserName } from 'entities/user'

export const Modal = () => {
    const [showModal, setShowModal] = React.useState(true)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const onClose = () => {
        if (inputRef.current?.value) {
            addUserName(inputRef.current.value)
            setShowModal(false)
        }
    }

    return (
        <>
            {showModal &&
                ReactDOM.createPortal(
                    <div className={style.overlay}>
                        <div className={style.dialog}>
                            <label className={style.label} htmlFor="name">
                                Введите имя
                            </label>
                            <input
                                name="name"
                                className={style.input}
                                type="text"
                                ref={inputRef}
                            />
                            <button className={style.btn} onClick={onClose}>
                                Войти
                            </button>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    )
}
