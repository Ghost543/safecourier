import _ from 'lodash'

export function pagination (item, pageNumber, pageSize) {
    const startIndex = (pageNumber-1) * pageSize
    return _(item)
        .slice(startIndex)
        .take(pageSize)
        .value()
}