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
    recordingTime: string 
}

const initialState: RootState = {
    allServices: [],
    recordingDate: "",
    recordingTime: ""
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
        }
    },
})

export const { setAllServices, setRecordingDate, setRecordingTime } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
