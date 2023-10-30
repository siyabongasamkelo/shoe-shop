import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecommApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllitems: builder.query({
      query: () => ({
        url: "get/items",
        method: "GET",
        // headers: { jwt: localStorage.getItem("token") },
      }),
      providesTags: ["Items"],
    }),
    getItem: builder.query({
      query: (id) => ({
        url: `get/item/${id}`,
        method: "GET",
        // headers: { jwt: localStorage.getItem("token") },
      }),
      providesTags: ["Item"],
    }),
    addItems: builder.mutation({
      query: (items) => ({
        url: "add/item",
        method: "POST",
        body: items,
        // headers: localStorage.getItem("token"),
      }),
      invalidatesTags: ["Items"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
        // headers: localStorage.getItem("token"),
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// export const { useGetAllProductsQuery, useAddProductsMutation } = productsApi;
export const {
  useLazyGetAllitemsQuery,
  useLazyGetItemQuery,
  useAddItemsMutation,
  useRegisterUserMutation,
} = ecommApi;
