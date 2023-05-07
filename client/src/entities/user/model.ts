import { createEvent, createStore } from 'effector'

export const addUserName = createEvent<string>()
export const $user = createStore<string>('').on(addUserName, (_, name) => name)
