import {
    getCanonicalName,
} from './FileNameFixer'

type RouteNode = {
    componentPath: string
    children?: Record<string, RouteNode>
}

export const getRouterTree = (fileNames: string[]) => {
    const tree: Record<string, RouteNode> = {}

    fileNames.forEach((filePath) => {
        const path = getCanonicalName(filePath)
        const segments = path.split('/').filter(Boolean)

        let current = tree
        const pathSegments: string[] = []

        segments.forEach((segment, idx) => {
            pathSegments.push(segment)
            const componentPath = `./app/${pathSegments.join('/')}/page.tsx`

            if (!current[segment]) {
                current[segment] = {
                    componentPath
                }
            }

            if (idx < segments.length - 1) {
                if (!current[segment].children) {
                    current[segment].children = {}
                }
                current = current[segment].children!
            }
        })
    })

    return tree
}

export const isSubRouteEmpty = (subRoutes: string[]) => {
    return subRoutes.length > 0
}
