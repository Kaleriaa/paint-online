import React from 'react'
import style from './canvas.module.scss'
import {
    $color,
    $lineThickness,
    $tool,
    $canvasCoords,
    updateCanvasCoords,
    addCanvas,
    undoEv,
} from 'entities'
import { useUnit } from 'effector-react'
import { drawConfig } from '@features/draw-config'
import { ToolsEnum } from 'entities/tools/type'

export const Canvas = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const [isDrawing, setIsDrawing] = React.useState<boolean>(false)
    const [startCoords, setStartCoords] = React.useState<
        Record<string, number>
    >({})
    const [saved, setSaved] = React.useState<string>('')
    addCanvas(canvasRef)
    const ctx = canvasRef.current?.getContext('2d')
    const { x, y } = useUnit($canvasCoords)
    const [color, depth, tool] = useUnit([$color, $lineThickness, $tool])
    const currentTool = drawConfig[tool]

    const onStartDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = e.nativeEvent
        setStartCoords({ startX: offsetX, startY: offsetY })
        setIsDrawing(true)

        if (ctx) {
            ctx.strokeStyle = color
            ctx.lineWidth = depth
            ctx.fillStyle = color
        }
        if (canvasRef.current) undoEv(canvasRef.current?.toDataURL())
        updateCanvasCoords({ x: offsetX, y: offsetY })
        ctx?.beginPath()

        if (x && y) ctx?.moveTo(x, y)
        if (
            (tool === ToolsEnum.CIRCLE || tool === ToolsEnum.SQUARE) &&
            canvasRef.current
        )
            setSaved(canvasRef.current.toDataURL())
    }

    const onDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return

        const { offsetX, offsetY } = e.nativeEvent

        currentTool?.mousemove(
            ctx!,
            offsetX,
            offsetY,
            startCoords.startX,
            startCoords.startY,
            saved,
        )
        updateCanvasCoords({ x: offsetX, y: offsetY })
    }

    const onEndDrawing = () => {
        ctx?.closePath()
        setIsDrawing(false)
        updateCanvasCoords({ x: null, y: null })
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
