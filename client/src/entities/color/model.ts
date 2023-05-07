import { createEvent, createStore } from 'effector'

export const updateColor = createEvent<string>()
export const $color = createStore<string>('').on(
    updateColor,
    (_, color) => color,
)
