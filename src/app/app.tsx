import { ToolBar } from '@widgets/toolbar'
import style from './app.module.scss'
import { Settings } from '@widgets/settings'
import { Canvas } from '@widgets/canvas'
import { Modal } from '@widgets/modal'

export const App = () => {
    return (
        <>
            <Modal />
            <div className={style.app}>
                <ToolBar />
                <Settings />
                <Canvas />
            </div>
        </>
    )
}
