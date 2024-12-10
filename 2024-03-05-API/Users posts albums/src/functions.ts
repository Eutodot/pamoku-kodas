export function getUrlParams(param: string){
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const value = urlParams.get(param)
    return value
}

export function firstLetterUpperCase(str: string){
    if (str.length === 0){
        return str
    }
    return str[0].toUpperCase() + str.slice(1)
}

export async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
    const usersArr = await response.json()
    return usersArr
}