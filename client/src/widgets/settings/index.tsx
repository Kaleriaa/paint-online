import React from 'react'
import style from './settings.module.scss'
import { useUnit } from 'effector-react'
import {
    updateColor,
    $tool,
    $lineThickness,
    updateLineThickness,
} from '@entities'
import { ToolsEnum } from '@entities/tools'

export const Settings = () => {
    const [depth, tool] = useUnit([$lineThickness, $tool])

    const onChangeLine = (e: React.ChangeEvent<HTMLInputElement>) =>
        updateLineThickness(+e.target.value)
    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) =>
        updateColor(e.target.value)

    return (
        <div className={style.settings}>
            <span className={style.text}>Толщина линии</span>
            <input
                type="number"
                value={depth}
                onChange={onChangeLine}
                className={style.input}
                disabled={tool === ToolsEnum.ERASER}
            />
            <input
                className={style.color}
                type="color"
                onChange={onChangeColor}
                disabled={tool === ToolsEnum.ERASER}
            />
        </div>
    )
}
