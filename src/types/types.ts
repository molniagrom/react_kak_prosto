export type UserType = {
    id: string;
    title: string;
}

export type SelectPropsType = {
    users: UserType[]
    defaultValue?: string
}


export type OptionsPropsType = {
    users: UserType[]
    selectNewElement: (title: string) => void
}