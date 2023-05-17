import { $canvas, $redoList, undoEv, updateCanvasData } from 'entities'
import { useUnit } from 'effector-react/effector-react.mjs'

export const useRedo = () => {
    const [canvas, list] = useUnit([$canvas, $redoList])
    const ctx = canvas?.current?.getContext('2d')

    return () => {
        if (list.length) {
            const url = list.pop()
            canvas?.current && undoEv(canvas.current?.toDataURL())
            const img = new Image()
            if (url) img.src = url
            img.onload = () => {
                ctx?.clearRect(0, 0, 800, 600)
                ctx?.drawImage(img, 0, 0, 800, 600)
            }
            url && updateCanvasData(url)
        }
    }
}
