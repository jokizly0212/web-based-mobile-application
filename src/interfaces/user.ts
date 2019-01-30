export interface User {
    username: String,
    password: String,
    email?: String,
    fullName?: String,
    user_id?: number,
    dateCreated?: Date
}
export interface loginResponse {
    message: string,
    token: string,
    user: User
}