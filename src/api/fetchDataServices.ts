import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Servicing } from "../models/models"

const fetchDataServices = createApi({
    reducerPath: "fetchDataServices",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        servicing: builder.query<Servicing[], null>({
            query: () => "/servicing",
        }),
    }),
})

export const { useServicingQuery } = fetchDataServices
export default fetchDataServices
