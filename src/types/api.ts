/**
 * Generic API response envelope
 */
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  timestamp: string;
}

/**
 * Standard Paginated Response envelope
 */
export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

/**
 * Standard API error structure
 */
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}
