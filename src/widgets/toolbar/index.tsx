import React from 'react'
import style from './toolbar.module.scss'
import { updateTool } from 'entities/tools/model'
import { actIcons, toolBarIcons } from './config'
import { ToolsEnum } from 'entities/tools/type'

export const ToolBar = () => {
    const onChangeTool = (e: React.FormEvent) => {
        const str = (e.target as HTMLInputElement).value.toUpperCase()
        const toolEnum = ToolsEnum[str as keyof typeof ToolsEnum]
        updateTool(toolEnum)
    }

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
