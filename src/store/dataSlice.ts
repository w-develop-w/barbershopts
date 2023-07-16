import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Service {
    id: number
    name: string
    price: string
    time: number
}

// interface OtherState {
// Другие состояния
// }

interface RootState {
    allServices: Service[]
    //   otherState: OtherState;
}

const initialState: RootState = {
    allServices: [],
    //   otherState: /* начальное состояние других состояний */,
}

const dataOfBarbershopSlice = createSlice({
    name: "dataOfBarbershop",
    initialState,
    reducers: {
        setAllServices: (state, action: PayloadAction<Service[]>) => {
            state.allServices = action.payload
        },
        // Другие reducers для обновления других состояний
    },
})

export const { setAllServices } = dataOfBarbershopSlice.actions
export default dataOfBarbershopSlice.reducer
