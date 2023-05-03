import React from 'react'
import style from './toolbar.module.scss'
import { toolBarIcons } from './config'

export const ToolBar = () => {
    return (
        <div className={style.toolbar}>
            {toolBarIcons.map(({ component, id, type, onClick, onChange }) => {
                if (type === 'input')
                    return <input key={id} type="color" onChange={onChange} />
                return (
                    <button key={id} onClick={onClick} className={style.tool}>
                        {component}
                    </button>
                )
            })}
        </div>
    )
}
