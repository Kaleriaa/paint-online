import { ToolsEnum, updateTool } from 'entities/tools'
import React from 'react'
import { toolBarIcons } from './config'
import { useActions } from './hooks/use-actions'
import style from './toolbar.module.scss'

export const ToolBar = () => {
    const onChangeTool = (e: React.FormEvent) =>
        updateTool((e.target as HTMLInputElement).value as ToolsEnum)

    const actions = useActions()

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
            {actions.map(({ component, id, onClick }) => {
                return (
                    <button key={id} className={style.tool} onClick={onClick}>
                        {component}
                    </button>
                )
            })}
        </div>
    )
}
