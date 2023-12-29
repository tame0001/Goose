interface AccountBase {
    name: string
    number?: string
    balance: number
}

export interface AccountRead extends AccountBase {
    id: number
}

