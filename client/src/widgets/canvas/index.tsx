import React from 'react'
import style from './canvas.module.scss'
import { $canvasData, addCanvas, updateRoomId } from 'entities'

import { useParams } from 'react-router-dom'
import { useDraw } from '@features/hooks/use-draw'
import { useUnit } from 'effector-react'

export const Canvas = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const { id } = useParams()
    const dataUrl = useUnit($canvasData)
    const { onStartDrawing, onDrawing, onEndDrawing } = useDraw()

    React.useEffect(() => {
        addCanvas(canvasRef)
        id && updateRoomId(id)
    }, [id])
    //TODO: вынести
    React.useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d')
        const img = new Image()
        if (dataUrl) {
            img.src = dataUrl
            img.onload = () => {
                ctx?.clearRect(0, 0, 800, 600)
                ctx?.drawImage(img, 0, 0, 800, 600)
            }
        }
    }, [dataUrl])

    return (
        <div className={style.wrapper}>
            <canvas
                ref={canvasRef}
                onMouseDown={onStartDrawing}
                onMouseUp={onEndDrawing}
                onMouseMove={onDrawing}
                className={style.canvas}
                width={800}
                height={600}
            />
        </div>
    )
}
