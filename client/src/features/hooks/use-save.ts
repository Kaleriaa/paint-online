import { $canvas } from '@entities/index'
import { useUnit } from 'effector-react'
import { useParams } from 'react-router-dom'

export const useSave = () => {
    const canvas = useUnit($canvas)
    const { id } = useParams()

    return () => {
        const url = canvas?.current?.toDataURL()
        const link = document.createElement('a')
        link.download = `${id}.png`
        if (url) link.href = url
        link.click()
    }
}
