import React from 'react'
import style from './toolbar.module.scss'
import { updateTool } from 'entities/tools/model'
import { actIcons, toolBarIcons } from './config'

export const ToolBar = () => {
    const onChangeTool = (e: React.FormEvent) =>
        updateTool((e.target as HTMLInputElement).value)

    return (
        <div className={style.toolbar} onChange={onChangeTool}>
            {toolBarIcons.map(({ component, id }) => {
                if (!component) return <div key={id} />
                return (
                    <div key={id}>
                        <input
                            id={id}
                            value={id}
                            name="tools"
                            type="radio"
                            className={style.input}
                        />
                        <label htmlFor={id} className={style.tool}>
                            {component}
                        </label>
                    </div>
                )
            })}
            {actIcons.map(({ component, id, onClick }) => {
                return (
                    <button key={id} className={style.tool} onClick={onClick}>
                        {component}
                    </button>
                )
            })}
        </div>
    )
}
