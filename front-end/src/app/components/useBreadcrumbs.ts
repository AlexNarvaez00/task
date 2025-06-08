import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const useBreadcrumbs = (): string[] => {
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([])
    const location = useLocation()

    useEffect(() => {
        const path = window.location.pathname

        setBreadcrumbs(path.split('/').slice(1))
    }, [location])

    return breadcrumbs
}
