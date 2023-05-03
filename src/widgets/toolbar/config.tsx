import { BsBrush, BsEraser, BsSquare, BsCircle } from 'react-icons/bs'
import { CiUndo, CiRedo, CiSaveDown1 } from 'react-icons/ci'

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

export const actIcons: Tools[] = [
    {
        component: <CiUndo />,
        id: 'undo',
    },
    {
        component: <CiRedo />,
        id: 'redo',
    },
    {
        component: <CiSaveDown1 />,
        id: 'save',
    },
]
