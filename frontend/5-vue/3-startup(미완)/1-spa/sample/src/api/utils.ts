import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import {config} from "../config/config.ts";

// axios 인스턴스 작성
const request = axios.create({
    baseURL: config.viteApiBaseUrl || '/',
    timeout: 10000,
});

// 리퀘스트의 인터셉터
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 리퀘스트전의 처리（Header 추가 등）
        // config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 레스폰스의 interceptor
request.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
