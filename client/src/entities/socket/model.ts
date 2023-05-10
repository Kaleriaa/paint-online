import { createEvent, createStore, sample } from 'effector'
import { $user, updateMessage } from '..'
import { socket } from '@shared/api/socket'

export const updateRoomId = createEvent<string>()
export const $roomId = createStore<string>('').on(updateRoomId, (_, id) => id)

sample({
    clock: $roomId,
    filter: Boolean,
    fn: (id) => {
        socket.io.opts.query =
            `id=${id}` as unknown as typeof socket.io.opts.query
        socket.connect()
    },
})

sample({
    clock: $user,
    filter: Boolean,
    fn: (name) => {
        socket.emit('hello', name)
    },
})

socket.on('hello', (name) => {
    updateMessage(`Привет, ${name}`)
})
