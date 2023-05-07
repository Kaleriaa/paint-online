import { ToolsEnum } from '@entities/tools/type'

type ToolFn = {
    mousemove: (
        ctx: CanvasRenderingContext2D,
        offSetX: number,
        offSetY: number,
        x: number,
        y: number,
        saved: string,
    ) => void
}
type DrawConfig = Record<ToolsEnum, ToolFn>

export const drawConfig: DrawConfig = {
    brush: {
        mousemove(...args) {
            const [ctx, offSetX, offSetY] = args
            ctx.lineTo(offSetX, offSetY)
            ctx.stroke()
        },
    },
    eraser: {
        mousemove(...args) {
            const [ctx, offSetX, offSetY] = args
            ctx.clearRect(offSetX, offSetY, 15, 15)
            ctx.stroke()
        },
    },
    circle: {
        mousemove(...args) {
            const [ctx, offSetX, offSetY, x, y, saved] = args
            const r = Math.sqrt((offSetX - x) ** 2 + (offSetY - y) ** 2)
            const img = new Image()
            img.src = saved
            img.onload = async () => {
                ctx?.clearRect(0, 0, 800, 600)
                ctx.drawImage(img, 0, 0, 800, 600)
                ctx.beginPath()
                ctx.arc(x, y, r, 0, 2 * Math.PI)
                ctx.fill()
                ctx.stroke()
            }
        },
    },
    square: {
        mousemove(...args) {
            const [ctx, offSetX, offSetY, x, y, saved] = args
            const img = new Image()
            img.src = saved
            img.onload = async () => {
                ctx.clearRect(0, 0, 800, 600)
                ctx.drawImage(img, 0, 0, 800, 600)
                ctx.beginPath()
                ctx.fillRect(x, y, offSetX - x, offSetY - y)
            }
        },
    },
    line: {
        mousemove(...args) {
            const [ctx, offSetX, offSetY] = args
            ctx.lineTo(offSetX, offSetY)
            ctx.stroke()
        },
    },
}
