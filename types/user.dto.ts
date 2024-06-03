export interface createUser {
    name: string;
    email: string;
    password: string
}

export type findUser = Omit<createUser, "name">