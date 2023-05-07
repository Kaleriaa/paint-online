import React from 'react'
import style from './canvas.module.scss'
import { addCanvas, updateRoomId } from 'entities'

import { useParams } from 'react-router-dom'
import { useDraw } from '@features/hooks/use-draw'

export const Canvas = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const { id } = useParams()
    const { onStartDrawing, onDrawing, onEndDrawing } = useDraw()

    React.useEffect(() => {
        addCanvas(canvasRef)
        id && updateRoomId(id)
    }, [id])

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
