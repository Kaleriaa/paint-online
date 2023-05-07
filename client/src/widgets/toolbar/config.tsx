import { BsBrush, BsEraser, BsSquare, BsCircle } from 'react-icons/bs'

type Tools = {
    component: JSX.Element | string
    id: string
    onClick?: () => void
}

export const toolBarIcons: Tools[] = [
    {
        component: <BsBrush />,
        id: 'brush',
    },
    {
        component: <BsEraser />,
        id: 'eraser',
    },
    {
        component: <BsCircle />,
        id: 'circle',
    },
    {
        component: <BsSquare />,
        id: 'square',
    },
    {
        component: '/',
        id: 'line',
    },
    {
        component: '',
        id: 'empty',
    },
]
