import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, CreateAxiosDefaults } from 'axios';

const defaultHeaders: AxiosRequestConfig['headers'] = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=UTF-8'
};

export interface ApiResponse<T = any> {
	success: boolean;
	data: T | null;
	message?: string;
}

export interface ApiError {
	status: number;
	message: string;
	error?: any;
}

export class ApiService {
	private axiosInstance: AxiosInstance;
	private isAuth = false;
	private _getToken: () => string | null;

	set getToken(handler: typeof this._getToken) {
		this._getToken = handler;
	}

	constructor(
		private readonly baseURL: string,
		private readonly config?: Omit<CreateAxiosDefaults, 'baseURL'>
	) {
		this.initialize();
	}

	private initialize() {
		this.axiosInstance = axios.create({
			baseURL: this.baseURL,
			...this.config,
			headers: {
				...defaultHeaders,
				...this.config?.headers
			}
		});

		this.initInterceptors();
	}

	private initInterceptors() {
		this.axiosInstance.interceptors.request.use(
			config => {
				const token = this._getToken?.();
				if (token && this.isAuth) config.headers['Authorization'] = `Bearer ${token}`;
				return config;
			},
			(error: AxiosError) => Promise.reject(error)
		);

		this.axiosInstance.interceptors.response.use(
			response => response,
			(error: AxiosError) => Promise.reject(this.handleError(error))
		);
	}

	private handleError(error: AxiosError): ApiError {
		if (error.response) {
			const status = error.response.status;
			const message = (error.response.data as { message?: string }).message || 'Unknown Error';
			return { status, message, error: error.response.data };
		} else if (error.request) {
			return { status: 0, message: 'Network Error', error: error.message };
		} else {
			return { status: 0, message: error.message };
		}
	}

	protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		try {
			const response: AxiosResponse<T> = await this.axiosInstance.get(url, config);
			return { success: true, data: response.data };
		} catch (error) {
			return { success: false, data: null, message: (error as ApiError).message };
		}
	}

	protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		try {
			const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
			return { success: true, data: response.data };
		} catch (error) {
			return { success: false, data: null, message: (error as ApiError).message };
		}
	}

	protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		try {
			const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config);
			return { success: true, data: response.data };
		} catch (error) {
			return { success: false, data: null, message: (error as ApiError).message };
		}
	}

	protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		try {
			const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config);
			return { success: true, data: response.data };
		} catch (error) {
			return { success: false, data: null, message: (error as ApiError).message };
		}
	}

	protected async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		try {
			const response: AxiosResponse<T> = await this.axiosInstance.patch(url, data, config);
			return { success: true, data: response.data };
		} catch (error) {
			return { success: false, data: null, message: (error as ApiError).message };
		}
	}
}
