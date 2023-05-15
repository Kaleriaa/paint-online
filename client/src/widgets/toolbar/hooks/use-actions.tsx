import { useRedo } from '@features/hooks/use-redo'
import { useSave } from '@features/hooks/use-save'
import { useUndo } from '@features/hooks/use-undo'
import { CiUndo, CiRedo, CiSaveDown1 } from 'react-icons/ci'

export const useActions = () => {
    const undo = useUndo()
    const redo = useRedo()
    const save = useSave()
    return [
        {
            component: <CiUndo />,
            id: 'undo',
            onClick: undo,
        },
        {
            component: <CiRedo />,
            id: 'redo',
            onClick: redo,
        },
        {
            component: <CiSaveDown1 />,
            id: 'save',
            onClick: save,
        },
    ]
}
