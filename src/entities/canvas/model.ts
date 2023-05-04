import { createEvent, createStore } from 'effector'
import { RefObject } from 'react'

type Coords = {
    x: number | null
    y: number | null
}

export const updateCanvasCoords = createEvent<Coords>()
export const $canvasCoords = createStore<Coords>({ x: null, y: null }).on(
    updateCanvasCoords,
    (_, { x, y }) => ({ x, y }),
)

export const addCanvas = createEvent<RefObject<HTMLCanvasElement>>()
export const $canvas = createStore<RefObject<HTMLCanvasElement> | null>(
    null,
).on(addCanvas, (_, can) => can)

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
