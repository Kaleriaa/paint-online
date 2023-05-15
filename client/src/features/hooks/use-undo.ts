import { useUnit } from 'effector-react'
import { $canvas, $undoList, redoEv, updateCanvasData } from 'entities'

export const useUndo = () => {
    const [canvas, list] = useUnit([$canvas, $undoList])
    const ctx = canvas?.current?.getContext('2d')

    return () => {
        if (list.length) {
            const url = list.pop()
            canvas?.current && redoEv(canvas.current?.toDataURL())
            const img = new Image()
            if (url) img.src = url
            img.onload = async () => {
                ctx?.clearRect(0, 0, 800, 600)
                ctx?.drawImage(img, 0, 0, 800, 600)
            }
            url && updateCanvasData(url)
        } else {
            ctx?.clearRect(0, 0, 800, 600)
        }
    }
}
