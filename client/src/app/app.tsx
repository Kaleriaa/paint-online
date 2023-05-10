import { ToolBar } from '@widgets/toolbar'
import style from './app.module.scss'
import { Settings } from '@widgets/settings'
import { Canvas } from '@widgets/canvas'
import { Modal } from '@widgets/modal'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AlertMessage } from '@widgets/alert-message'

export const App = () => {
    return (
        <Routes>
            <Route
                path=":id"
                element={
                    <>
                        <Modal />
                        <AlertMessage></AlertMessage>
                        <div className={style.app}>
                            <ToolBar />
                            <Settings />
                            <Canvas />
                        </div>
                    </>
                }
            />
            <Route
                path="/"
                element={
                    <Navigate to={`f${new Date().getTime().toString()}`} />
                }
            />
        </Routes>
    )
}
