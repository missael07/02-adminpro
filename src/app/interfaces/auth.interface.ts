export interface RegisterForm {
    name: string,
    email: string,
    password: string,
    password2: string,
    terms: boolean
}

export interface LoginForm{
    email?: string | null | undefined,
    password?: string | null| undefined,
    remember?: boolean | null| undefined
}

export interface UpdateUser {
    email?: string | null,
    name?: string | null,
}