import { createEvent, createStore } from 'effector'

export const undoEv = createEvent<string>()
export const redoEv = createEvent<string>()
export const $undoList = createStore<string[]>([]).on(undoEv, (state, str) => [
    ...state,
    str,
])
export const $redoList = createStore<string[]>([]).on(redoEv, (state, str) => [
    ...state,
    str,
])
