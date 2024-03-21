fetch('obj.json')
    .then(res => {
        return res.json()
    })
    .then(obj => {
        console.log(obj)
    })






async function getObjectData(){
    const response = await fetch('obj.json')
    const obj = await response.json()
    return obj
}



async function init(){
    const fetchObj = await getObjectData()
    console.log(fetchObj)
}

init()