import { getUsers } from "./functions.ts"
import createHeader from "./header.ts"
import { User } from "./types.ts"

const usersWrapper = document.querySelector('#users-wrapper')!
async function init(){
    const header = createHeader()
    document.body.prepend(header)

    // changeNavigationStyle()

    const usersArr: User[] = await getUsers()
    usersArr.forEach(async user => {
        const singleUserWrapper = document.createElement('div')
        const userElement = document.createElement('a')
        const postsAmount = user.posts.length
        userElement.textContent = `${user.name}, posts made: ${postsAmount}`
        userElement.href = `user.html?userId=${user.id}`
        singleUserWrapper.append(userElement)
        usersWrapper.append(singleUserWrapper)
    });
}



// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToUsers = navigationElement.querySelector('#send-to-users')
//     sendToUsers.style.fontWeight = "900"

// }

// async function getUsersPosts(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     const userPostsArr = await response.json()
//     const postsAmount = userPostsArr.length
//     return postsAmount
// }

init()