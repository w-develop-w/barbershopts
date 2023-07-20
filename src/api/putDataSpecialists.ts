import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Barbers } from "../models/models";

const putDataSpecialists = createApi({
  reducerPath: 'fetchDataSpecialists',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    specialists: builder.query<Barbers[], null>({
      query: () => '/barbers',
    }),
    updateSpecialist: builder.mutation<void, Partial<Barbers>>({
      query: (updatedSpecialist) => ({
        url: `/barbers/${updatedSpecialist.id}`,
        method: 'PUT',
        body: updatedSpecialist,
      }),
    }),
  }),
});

export const { useSpecialistsQuery, useUpdateSpecialistMutation } = putDataSpecialists;
export default putDataSpecialists;
