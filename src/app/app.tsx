import { ToolBar } from '@widgets/toolbar'
import style from './app.module.scss'
import { Settings } from '@widgets/settings'
import { Canvas } from '@widgets/canvas'

export const App = () => {
    return (
        <div className={style.app}>
            <ToolBar />
            <Settings />
            <Canvas />
        </div>
    )
}
