import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api" }),
  endpoints: (builder) => ({
    getPeopleByNumber: builder.query({
      query: (number) => `/?results=${number}`,
    }),
  }),
});

export const { useGetPeopleByNumberQuery } = api;
