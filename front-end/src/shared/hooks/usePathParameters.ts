import { useParams } from 'react-router'

export function usePathParameters<T>() {
    return useParams() as T
}
