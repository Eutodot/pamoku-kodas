const usersWrapper = document.querySelector('#users-wrapper')
async function init(){
    const usersArr = await getUsers()
    usersArr.forEach(async user => {
        const singleUserWrapper = document.createElement('div')
        const userElement = document.createElement('a')
        const postsAmount = user.posts.length
        userElement.textContent = `${user.name}, posts made: ${postsAmount}`
        userElement.href = 'user.html'
        singleUserWrapper.append(userElement)
        usersWrapper.append(singleUserWrapper)
    });
}

async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
    const usersArr = await response.json()
    return usersArr
}

// async function getUsersPosts(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     const userPostsArr = await response.json()
//     const postsAmount = userPostsArr.length
//     return postsAmount
// }

init()