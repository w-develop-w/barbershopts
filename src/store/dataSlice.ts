import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Service {
    id: number
    name: string
    price: string
    time: number
}

interface RootState {
    allServices: Service[],
    recordingDate: string, 
    recordingTime: string,
    choosedService: string
}

const initialState: RootState = {
    allServices: [],
    recordingDate: "",
    recordingTime: "",
    choosedService: ""
}

const dataOfBarbershopSlice = createSlice({
    name: "dataOfBarbershop",
    initialState,
    reducers: {
        setAllServices: (state, action: PayloadAction<Service[]>) => {
            state.allServices = action.payload
        },
        setRecordingDate: (state, action: PayloadAction<string>) => {
            state.recordingDate = action.payload
        },
        setRecordingTime: (state, action: PayloadAction<string>) => {
            state.recordingTime = action.payload
        },
        setChoosedService: (state, action: PayloadAction<string>) => {
            state.choosedService = action.payload
        }
    },
})

export const { setAllServices, setRecordingDate, setRecordingTime, setChoosedService } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
