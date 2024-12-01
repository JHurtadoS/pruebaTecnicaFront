import { AxiosResponse } from "axios";
import apiClient from "./api";

export interface AuthResponse {
    message: string;
}


export interface LoginResponse {
    accessToken: string;
    user: {
        id: string;
        email: string;
    };
}

export async function registerUser(email: string, password: string): Promise<AxiosResponse> {
    const response = await apiClient.post<AuthResponse>("/auth/register", { email, password });
    return response;
}


export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", { email, password });
    return data;
}
