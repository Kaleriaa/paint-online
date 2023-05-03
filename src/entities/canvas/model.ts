import { createEvent, createStore } from 'effector'

type Coords = {
    x: number | null
    y: number | null
}

export const updateCanvasCoords = createEvent<Coords>()
export const $canvasCoords = createStore<Coords>({ x: null, y: null }).on(
    updateCanvasCoords,
    (_, { x, y }) => ({ x, y }),
)
