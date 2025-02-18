
type Users = {
    id: string,
    name: string,
    password: string,
    role: Roles[] 
}

type Roles = {
    id: string,
    role: string
}