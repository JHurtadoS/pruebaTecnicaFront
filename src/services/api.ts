import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://backend-challenge-base-1qc2.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
