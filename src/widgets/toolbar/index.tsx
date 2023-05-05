import React from 'react'
import style from './toolbar.module.scss'
import { toolBarIcons } from './config'
import { ToolsEnum, updateTool } from 'entities/tools'
import { useUndo } from '@features/useUndo'
import { CiRedo, CiSaveDown1, CiUndo } from 'react-icons/ci'
import { useRedo } from '@features/useRedo'

export const ToolBar = () => {
    const onChangeTool = (e: React.FormEvent) => {
        const str = (e.target as HTMLInputElement).value.toUpperCase()
        const toolEnum = ToolsEnum[str as keyof typeof ToolsEnum]
        updateTool(toolEnum)
    }
    const undo = useUndo()
    const redo = useRedo()

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
            <button className={style.tool} onClick={undo}>
                <CiUndo />
            </button>
            <button className={style.tool} onClick={redo}>
                <CiRedo />
            </button>
            <button className={style.tool}>
                <CiSaveDown1 />
            </button>
        </div>
    )
}
