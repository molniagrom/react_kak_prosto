// src/types/types.ts
// Добавляем highlightedIndex в OptionsPropsType
export type UserType = {
    id: string;
    title: string;
    residents?: string;
}

export type SelectPropsType = {
    users: UserType[]
    defaultValue?: string
}



export type OptionsPropsType = {
    users: UserType[]
    selectNewElement: (title: string) => void
    highlightedIndex: number
}