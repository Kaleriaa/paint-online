import { createStore, createEvent, sample } from 'effector'
import { debounce } from 'patronum'

export const updateMessage = createEvent<string>()
export const $message = createStore<string>('').on(
    updateMessage,
    (_, str) => str,
)
const onMessageIsNotEmpty = sample({
    source: $message,
    filter: Boolean,
    fn: () => '',
})

debounce({
    source: onMessageIsNotEmpty,
    timeout: 3000,
    target: $message,
})
