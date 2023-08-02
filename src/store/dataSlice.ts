import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type Service = {
    id: number
    name: string
    price: number
    time: number
}

type RootState = {
    allServices: Service[],
    choosedImageBarber: string,
    choosedStatusBarber: string,
    choosedNameBarber: string,
    recordingDate: string, 
    recordingTime: string,
    choosedService: string,
    priceChoosedService: number, 
    percentsOnPrice: string,
    timeForServiceFact: number,
}

const initialState: RootState = {
    allServices: [],
    choosedImageBarber: "",
    choosedStatusBarber: "",
    choosedNameBarber: "",
    recordingDate: "",
    recordingTime: "",
    choosedService: "", 
    priceChoosedService: 0,
    percentsOnPrice: "",
    timeForServiceFact: 0,
}

const dataOfBarbershopSlice = createSlice({
    name: "dataOfBarbershop",
    initialState,
    reducers: {
        setAllServices: (state, action: PayloadAction<Service[]>) => {
            state.allServices = action.payload
        },
        setChoosedImageBarber: (state, action: PayloadAction<string>) => {
            state.choosedImageBarber = action.payload
        }, 
        setChoosedStatusBarber: (state, action: PayloadAction<string>) => {
            state.choosedStatusBarber = action.payload
        }, 
        setChoosedNameBarber: (state, action: PayloadAction<string>) => {
            state.choosedNameBarber = action.payload
        }, 
        setRecordingDate: (state, action: PayloadAction<string>) => {
            state.recordingDate = action.payload
        },
        setRecordingTime: (state, action: PayloadAction<string>) => {
            state.recordingTime = action.payload
        },
        setChoosedService: (state, action: PayloadAction<string>) => {
            state.choosedService = action.payload
        }, 
        setPriceChoosedService: (state, action: PayloadAction<number>) => {
            state.priceChoosedService = action.payload
        }, 
        setPercentsOnPrice: (state, action: PayloadAction<string>) => {
            state.percentsOnPrice = action.payload
        }, 
        setTimeForServiceFact: (state, action: PayloadAction<number>) => {
            state.timeForServiceFact = action.payload
        }

    },
})

export const { setAllServices, setChoosedImageBarber, setChoosedStatusBarber,  setChoosedNameBarber, setRecordingDate, setRecordingTime, setChoosedService, setPriceChoosedService, setTimeForServiceFact, setPercentsOnPrice } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
