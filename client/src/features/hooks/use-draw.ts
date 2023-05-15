import {
    $canvas,
    $canvasCoords,
    $color,
    $lineThickness,
    $tool,
    undoEv,
    updateCanvasCoords,
    updateCanvasData,
} from '@entities'
import { ToolsEnum } from '@entities/tools'
import { drawConfig } from '@features/draw-config'
import { useUnit } from 'effector-react'
import React from 'react'

export const useDraw = () => {
    const [isDrawing, setIsDrawing] = React.useState<boolean>(false)
    const [startCoords, setStartCoords] = React.useState<
        Record<string, number>
    >({})
    const [saved, setSaved] = React.useState<string>('')
    const { x, y } = useUnit($canvasCoords)
    const [color, depth, tool, canvasRef] = useUnit([
        $color,
        $lineThickness,
        $tool,
        $canvas,
    ])
    const currentTool = drawConfig[tool]

    return {
        onStartDrawing: (e: React.MouseEvent<HTMLCanvasElement>) => {
            const ctx = canvasRef?.current?.getContext('2d')

            const { offsetX, offsetY } = e.nativeEvent
            setStartCoords({ startX: offsetX, startY: offsetY })
            setIsDrawing(true)

            if (ctx) {
                ctx.strokeStyle = color
                ctx.lineWidth = depth
                ctx.fillStyle = color
            }
            if (canvasRef?.current) undoEv(canvasRef.current?.toDataURL())

            updateCanvasCoords({ x: offsetX, y: offsetY })
            ctx?.beginPath()

            if (x && y) ctx?.moveTo(x, y)
            if (
                (tool === ToolsEnum.CIRCLE || tool === ToolsEnum.SQUARE) &&
                canvasRef?.current
            )
                setSaved(canvasRef.current.toDataURL())
        },
        onDrawing: (e: React.MouseEvent<HTMLCanvasElement>) => {
            if (!isDrawing) return

            const ctx = canvasRef?.current?.getContext('2d')
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
        },
        onEndDrawing: () => {
            const ctx = canvasRef?.current?.getContext('2d')
            ctx?.closePath()
            setIsDrawing(false)
            updateCanvasCoords({ x: null, y: null })
            canvasRef?.current &&
                updateCanvasData(canvasRef.current?.toDataURL())
        },
    }
}
