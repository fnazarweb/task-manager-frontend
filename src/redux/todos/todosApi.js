import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (email && password) {
        const credentials = btoa(`${email}:${password}`);

        headers.set("Authorization", `Basic ${credentials}`);
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
