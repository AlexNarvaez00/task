export const getCanonicalName = (fileName: string) => {
    return fileName.replace('./app', '').replace('page.tsx', '')
}

export const isBaseNameRoute = (canonicalName: string) => {
    return /^\/[\w-]+\/$/m.test(canonicalName)
}

export const getSubRouteName = (canonicalName: string, baseName: string) => {
    return canonicalName.replace(`/${baseName}/`, '')
}

export const getBaseName = (canonicalName: string) => {
    const [, baseName] = canonicalName.split('/')

    return baseName
}

export const getPath = (value: string) => {
    return value.replace('[', ':').replace(']', '')
}

export const getFileName = (basePath: string) => {
    return `./app${basePath}page.tsx`
}
