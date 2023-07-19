export interface Root {
    barbers: Barbers[]
    servicing: Servicing[]
}

export interface Barbers {
    id: number
    image: string
    name: string
    status: string
    workDay: boolean
    datesAndTime: DatesAndTime[]
    price: string
}

export interface DatesAndTime {
    date: string
    time: string[]
    booking: boolean[]
    access: number[]
}

export interface Servicing {
    id: number
    name: string
    price: number
    time: number
}
