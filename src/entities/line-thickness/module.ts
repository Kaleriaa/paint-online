import { createEvent, createStore } from 'effector'

export const updateLineThickness = createEvent<number>()
export const $lineThickness = createStore<number>(1).on(
    updateLineThickness,
    (_, newLine) => newLine,
)
