import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

interface CustomAxiosRequestConfig {
    method: string
    route: string;
    body: any;
    includeHeaders: boolean;
}

export const sendRequest = async ({
    method,
    route,
    body,
    includeHeaders,
}: CustomAxiosRequestConfig): Promise<any> => {
    if (!route) throw Error("URL required");

    axios.defaults.headers.authorization = includeHeaders
        ? `Bearer ${localStorage.getItem("token")}`
        : "";

    try {
        const response = await axios.request({
            method,
            url: route,
            data: body,
            
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};