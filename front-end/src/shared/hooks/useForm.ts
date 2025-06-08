import { FormEvent } from 'react'

type OnSubmit = (
    form: HTMLFormElement,
    formData: FormData,
    event: FormEvent<HTMLFormElement>
) => void

export const useForm = (onSubmit: OnSubmit) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const formData = new FormData(form)
        onSubmit(form, formData, event)
        form.reset()
    }

    return {
        handleSubmit
    }
}
