import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Barbers } from "../models/models"

const fetchDataSpecialists = createApi({
  reducerPath: 'fetchDataSpecialists',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    specialists: builder.query<Barbers[], null>({
      query: () => '/barbers',
    }),
  }),
});

export const { useSpecialistsQuery } = fetchDataSpecialists;
export default fetchDataSpecialists;