import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Service {
    id: number
    name: string
    price: string
    time: number
}

interface RootState {
    allServices: Service[],
    choosedImageBarber: string,
    choosedStatusBarber: string,
    choosedNameBarber: string,
    recordingDate: string, 
    recordingTime: string,
    choosedService: string,
    priceChoosedService: string, 
    timeForServiceFact: number
}

const initialState: RootState = {
    allServices: [],
    choosedImageBarber: "",
    choosedStatusBarber: "",
    choosedNameBarber: "",
    recordingDate: "",
    recordingTime: "",
    choosedService: "", 
    priceChoosedService: "",
    timeForServiceFact: 0 
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
        setPriceChoosedService: (state, action: PayloadAction<string>) => {
            state.priceChoosedService = action.payload
        }, 
        setTimeForServiceFact: (state, action: PayloadAction<number>) => {
            state.timeForServiceFact = action.payload
        }
    },
})

export const { setAllServices, setChoosedImageBarber, setChoosedStatusBarber,  setChoosedNameBarber, setRecordingDate, setRecordingTime, setChoosedService, setPriceChoosedService, setTimeForServiceFact } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
