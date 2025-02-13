const data = require("../data/data")

const sliceData = (data, { start, end, limit }) => {
    if (!data || data.length === 0){
        return []
    }

    if (start && end){
        return data.slice(start, end)
    }
    
    if (start && limit){
        return data.slice(start, start + limit)
    }
    
    if (end && limit){
        return data.slice(end - limit, end)
    }
    
    if (limit){
        return data.slice(0, limit)
    }
    
    if (start){
        return data.slice(start, data.length)
    }

    if (end){
        return data.slice(0, end)
    }

    return data
}

const filterData = (data, key, value) => {
    if (!data || data.length === 0){
        return []
    }

    if (!key || !value){
        return data
    }

    const filteredData = data.filter(item => item[key] === value)

    return filteredData
}

const sortData = (data, sort, order = 'asc') => {
    if (!data || data.length === 0){
        return []
    }

    if (!sort){
        return data
    }

    data.sort((a, b) => {
        const aProperty = a[sort]
        const bProperty = b[sort]

        if (!isNaN(aProperty) && !isNaN(bProperty)){
            if (order.toLowerCase() === 'desc'){
                return bProperty - aProperty
            } else {
                return aProperty - bProperty
            }
        }

        const aPropertySrt = aProperty.toUpperCase()
        const bPropertyStr = bProperty.toUpperCase()
        if (aPropertySrt < bPropertyStr) {
            return order.toLowerCase() === 'desc' ? 1 : -1
        }
        if (aPropertySrt > bPropertyStr) {
            return order.toLowerCase() === 'desc' ? -1 : 1
        }

        return 0
    })
}

const getSingleDataById = (collection, id) => {
    if (!collection || !id){
        return {}
    }

    const foundCollection = data[collection]
    
    if (!foundCollection){
        return {}
    }

    const foundItem = foundCollection.find(item => item.id === id)

    return foundItem
}


module.exports = { sliceData, filterData, sortData, getSingleDataById }