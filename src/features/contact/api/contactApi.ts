/**
 * Contact Us RTK Query API Feature
 *
 * Injects contact inquiry and FAQ endpoints into the unified `baseApi`.
 */

import { baseApi } from "@/services/api/baseApi";
import { ApiResponse } from "@/types/api";
import {
  ContactFormValues,
  ContactSubmissionResponse,
  FAQItem,
} from "../types/contact.types";

export const CONTACT_ENDPOINTS = {
  SUBMIT_MESSAGE: "/contact",
  FAQS: "/contact/faqs",
} as const;

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContactMessage: builder.mutation<
      ContactSubmissionResponse,
      ContactFormValues
    >({
      query: (body) => ({
        url: CONTACT_ENDPOINTS.SUBMIT_MESSAGE,
        method: "POST",
        body,
      }),
      transformResponse: (
        response: ApiResponse<ContactSubmissionResponse>,
      ) => {
        return response.data;
      },
      invalidatesTags: [{ type: "Contact" as const, id: "SUBMISSION" }],
    }),

    getContactFAQs: builder.query<FAQItem[], void>({
      query: () => CONTACT_ENDPOINTS.FAQS,
      transformResponse: (response: ApiResponse<{ faqs: FAQItem[] }>) => {
        return response.data.faqs;
      },
      providesTags: [{ type: "FAQ" as const, id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useSubmitContactMessageMutation, useGetContactFAQsQuery } =
  contactApi;
