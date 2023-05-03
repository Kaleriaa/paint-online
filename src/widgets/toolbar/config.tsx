import { updateColor } from 'entities/color/model'
import { updateTool } from 'entities/tools/model'
import { BsBrush, BsEraser, BsSquare, BsCircle } from 'react-icons/bs'
import { CiUndo, CiRedo, CiSaveDown1 } from 'react-icons/ci'

type Tools = {
    component: JSX.Element | string
    id: string
    type?: string
    onClick?: () => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => string
}

export const toolBarIcons: Tools[] = [
    {
        component: <BsBrush />,
        id: '1qwe',
        onClick: () => updateTool('brush'),
        type: 'tool',
    },
    {
        component: <BsEraser />,
        id: 'wed3',
        onClick: () => updateTool('eraser'),
        type: 'tool',
    },
    {
        component: <BsCircle />,
        id: 'io93',
        onClick: () => updateTool('circle'),
        type: 'tool',
    },
    {
        component: <BsSquare />,
        id: 'o09w',
        onClick: () => updateTool('square'),
        type: 'tool',
    },
    {
        component: '/',
        id: '9iid',
        onClick: () => updateTool('line'),
        type: 'tool',
    },
    {
        component: '',
        id: 'koe3',
        type: 'input',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            updateColor(e.target.value),
    },
    {
        component: '',
        id: 'joi2',
    },
    {
        component: <CiUndo />,
        id: '45rs',
        type: 'tool',
    },
    {
        component: <CiRedo />,
        id: 'e2dk',
        type: 'tool',
    },
    {
        component: <CiSaveDown1 />,
        id: 'eqw3',
        type: 'tool',
    },
]
