export type Album = {
    userId: number
    id: number
    title: string
    photos: Photo[]
    user: User
}

export type Photo = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type Post = {
    userId: number
    id: number
    title: string
    body: string
    comments: Comment[]
    user: User
}

export type Comment = {
    postId: number
    id?: number
    name: string
    email: string
    body: string
}

export type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
    posts: Photo[]
    albums: Album[]
}

export type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

export type Company = {
    name: string
    catchPhrase: string
    bs: string
}