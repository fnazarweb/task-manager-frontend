import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "task",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (payload) => ({
        url: "task",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (payload) => ({
        url: `task/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
