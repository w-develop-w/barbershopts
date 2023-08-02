export type Root = {
    barbers: Barbers[]
    servicing: Servicing[]
}

export type Barbers = {
    id: number
    image: string
    name: string
    status: string
    workDay: boolean
    datesAndTime: DatesAndTime[]
    price: string
}

export type DatesAndTime = {
    date: string
    time: string[]
    booking: boolean[]
    access: number[]
}

export type Servicing = {
    id: number
    name: string
    price: number
    time: number
}
