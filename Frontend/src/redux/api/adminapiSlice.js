import { apiSlice } from "./apiSlice";
import { API_URL } from "../const";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${API_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),

    createEmployee: builder.mutation({
      query: (data) => ({
        url: `${API_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    getEmployeeList: builder.query({
      query: () => ({
        url: `${API_URL}/employeelist`,
        method: "GET",
        keepUnusedDataFor: 5,
      }),
    }),
    getEmployeeById: builder.query({
      query: (id) => ({
        url: `${API_URL}/employee/${id}`,
        method: "GET",
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({
        id,
        name,
        email,
        phone,
        designation,
        course,
        gender,
        image,
      }) => ({
        url: `${API_URL}/update/${id}`,
        method: "PUT",
        body: { name, email, phone, designation, course, gender, image },
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `${API_URL}/delete/${id}`,
        method: "DELETE",
      }),
    }),
    uploadImage: builder.mutation({
      query: (data) => ({
        url: `/upload`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetEmployeeListQuery,
  useDeleteEmployeeMutation,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
  useCreateEmployeeMutation,
  useUploadImageMutation,
} = adminApiSlice;
