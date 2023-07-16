export interface Root {
    barbers: Barbers[]
    servicing: Servicing[]
}

export interface Barbers {
    id: number
    image: string
    name: string
    status: string
    datesAndTime: DatesAndTime[]
    price: string
}

export interface DatesAndTime {
    date: string
    time: string[]
    access: number[]
}

export interface Servicing {
    id: number
    name: string
    price: string
    time: number
}
