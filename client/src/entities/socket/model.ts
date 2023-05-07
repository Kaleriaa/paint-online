import { createEvent, createStore, sample } from 'effector'
import { io } from 'socket.io-client'

const socket = io('http://localhost:5000', {
    autoConnect: false,
})

export const updateRoomId = createEvent<string>()
export const $roomId = createStore<string>('').on(updateRoomId, (_, id) => id)

sample({
    clock: $roomId,
    filter: Boolean,
    fn: (id) => {
        console.log({ id, socket })
        socket.io.opts.query = `id=${id}` as any
        socket.connect()
    },
})

socket.on('connect', () => {
    console.log(socket.id)
})
