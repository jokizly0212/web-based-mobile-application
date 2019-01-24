export interface User {
    username: String,
    password: String,
    email?: String,
    fullName?: String,
    userId?: number,
    dateCreated?: Date
}
export interface loginResponse {
    message: string,
    token: string,
    user: User
}