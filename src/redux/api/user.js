import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["list-user"],
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params: params,
      }),
      providesTags: ["list-user"],
    }),
    createUser: builder.mutation({
      query: ({ name }) => ({
        url: "/users",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["list-user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["list-user"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserListQuery,useDeleteUserMutation } = userApiSlice;
