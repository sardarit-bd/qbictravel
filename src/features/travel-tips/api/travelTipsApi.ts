/**
 * Travel Tips RTK Query API Feature
 *
 * Injects travel tips endpoints into the unified `baseApi`.
 */

import { baseApi } from "@/services/api/baseApi";
import { ApiResponse } from "@/types/api";
import {
  TravelTipTopic,
  TravelTipAccordionItem,
  PopularTravelTip,
  TravelChecklistItem,
} from "../types/travelTips.types";

export const TRAVEL_TIPS_ENDPOINTS = {
  TOPICS: "/travel-tips/topics",
  ACCORDION: "/travel-tips/accordion",
  POPULAR: "/travel-tips/popular",
  CHECKLIST: "/travel-tips/checklist",
} as const;

export const travelTipsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTravelTipsTopics: builder.query<TravelTipTopic[], void>({
      query: () => TRAVEL_TIPS_ENDPOINTS.TOPICS,
      transformResponse: (
        response: ApiResponse<{ topics: TravelTipTopic[] }>,
      ) => {
        return response.data.topics;
      },
      providesTags: [{ type: "TravelTipTopic" as const, id: "LIST" }],
    }),

    getTravelTipsAccordion: builder.query<
      TravelTipAccordionItem[],
      string | void
    >({
      query: (topicId) => {
        const url = topicId
          ? `${TRAVEL_TIPS_ENDPOINTS.ACCORDION}?topic=${topicId}`
          : TRAVEL_TIPS_ENDPOINTS.ACCORDION;
        return url;
      },
      transformResponse: (
        response: ApiResponse<{ items: TravelTipAccordionItem[] }>,
      ) => {
        return response.data.items;
      },
      providesTags: [{ type: "TravelTipItem" as const, id: "LIST" }],
    }),

    getPopularTravelTips: builder.query<PopularTravelTip[], void>({
      query: () => TRAVEL_TIPS_ENDPOINTS.POPULAR,
      transformResponse: (
        response: ApiResponse<{ popularTips: PopularTravelTip[] }>,
      ) => {
        return response.data.popularTips;
      },
      providesTags: [{ type: "PopularTravelTip" as const, id: "LIST" }],
    }),

    getTravelChecklist: builder.query<TravelChecklistItem[], void>({
      query: () => TRAVEL_TIPS_ENDPOINTS.CHECKLIST,
      transformResponse: (
        response: ApiResponse<{ checklist: TravelChecklistItem[] }>,
      ) => {
        return response.data.checklist;
      },
      providesTags: [{ type: "TravelChecklist" as const, id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTravelTipsTopicsQuery,
  useGetTravelTipsAccordionQuery,
  useGetPopularTravelTipsQuery,
  useGetTravelChecklistQuery,
} = travelTipsApi;
