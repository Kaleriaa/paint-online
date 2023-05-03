import React from 'react'
import style from './settings.module.scss'
import { useUnit } from 'effector-react/effector-react.mjs'
import {
    $lineThickness,
    updateLineThickness,
} from 'entities/line-thickness/module'

export const Settings = () => {
    const depth = useUnit($lineThickness)

    const onChangeLine = (e: React.ChangeEvent<HTMLInputElement>) =>
        updateLineThickness(+e.target.value)

    return (
        <div className={style.settings}>
            <span className={style.text}>Толщина линии</span>
            <input
                type="number"
                value={depth}
                onChange={onChangeLine}
                className={style.input}
            />
        </div>
    )
}
