import { createEvent } from 'effector'
import { createStore } from 'effector/effector.mjs'
import { ToolsEnum } from './type'

export const updateTool = createEvent<ToolsEnum>()
export const $tool = createStore<ToolsEnum>(ToolsEnum.BRUSH).on(
    updateTool,
    (_, newTool) => newTool,
)
