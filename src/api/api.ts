import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
      login: builder.query<{},{name: string}>({
        query: ({name}) => `/api/login`,
        
      })
    }),
  })