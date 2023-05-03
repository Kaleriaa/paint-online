import { createEvent } from 'effector'
import { createStore } from 'effector/effector.mjs'

export const updateTool = createEvent<string>()
export const $tool = createStore<string>('').on(
    updateTool,
    (_, newTool) => newTool,
)
