import React from 'react'
import style from './canvas.module.scss'
import { $canvasCoords, updateCanvasCoords } from 'entities/canvas/model'
import { $color } from 'entities/color/model'
import { useUnit } from 'effector-react'
import { $lineThickness } from 'entities/line-thickness/module'

export const Canvas = () => {
    const [isDrawing, setIsDrawing] = React.useState(false)
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const ctx = canvasRef.current?.getContext('2d')
    const { x, y } = useUnit($canvasCoords)
    const [color, depth] = useUnit([$color, $lineThickness])

    const onStartDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = e.nativeEvent
        updateCanvasCoords({ x: offsetX, y: offsetY })
        setIsDrawing(true)
    }

    const onDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return

        const { offsetX, offsetY } = e.nativeEvent
        if (ctx?.strokeStyle) ctx.strokeStyle = color
        if (ctx?.strokeStyle) ctx.lineWidth = depth
        ctx?.beginPath()
        if (x && y) ctx?.moveTo(x, y)
        ctx?.lineTo(offsetX, offsetY)
        ctx?.stroke()
        updateCanvasCoords({ x: offsetX, y: offsetY })
    }

    const onEndDrawing = () => {
        updateCanvasCoords({ x: null, y: null })
        setIsDrawing(false)
    }

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
