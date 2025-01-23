/**
 * API utility functions
 */

// Define base API types
export interface ApiResponse<T = any> {
    data: T;
    status: number;
    message?: string;
}

// Basic error class for API errors
export class ApiError extends Error {
    constructor(
        public status: number,
        message: string,
        public data?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

/**
 * Basic fetch wrapper with error handling
 */
export async function fetchApi<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(response.status, response.statusText, data);
        }

        return {
            data,
            status: response.status,
        };
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Internal Server Error', error);
    }
}