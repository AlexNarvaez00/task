export const getAllFilePages = (entries: Record<string, unknown>) => {
    const fileNames = Object.keys(entries).sort(
        (a, b) => a.localeCompare(b) * -1
    )

    return {
        fileNames
    }
}
