import { createEvent, createStore, sample } from 'effector'
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

export const updateCanvasData = createEvent<string>()
export const updateCanvasDataWS = createEvent<string>()
export const $canvasData = createStore<string>('').on(
    [updateCanvasData, updateCanvasDataWS],
    (_, can) => can,
)
