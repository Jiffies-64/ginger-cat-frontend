import axios from 'axios';
import {getToken} from '@/utils/cookies';
import {Toast} from "vant-green";

const service = axios.create({
    baseURL: '/api',
    timeout: 5000 * 5
});

service.defaults.headers.post['Content-Type'] = 'application/json';

// Request interceptors
service.interceptors.request.use(
    config => {
        let token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            let temp = process.env.VUE_APP_SERVER_AUTHORIZATION;
            if (temp) {
                config.headers['Authorization'] = `Bearer ${temp}`;
            }
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    response => response,
    error => {
        Toast.success(error.response.data.errMessage || error.message);

        if (error.response.status === "401" && error.response.data.errMessage === '没有认证') {
            window.location = 'http://www.gingercat.top/sign.html';
        }
        return Promise.reject(error);
    }
);

export const createAPI = (
    url,
    method = 'get',
    params = undefined,
    data = undefined
) => {
    let config = {};
    config.url = url;
    config.method = method;
    if (params !== undefined) {
        config.params = params;
    }
    if (method !== 'get' && data !== undefined) {
        config.data = data;
    }

    return service(config);
};

export const createFormAPI = (url, method, data) => {
    let config = {};
    config.url = url;
    config.method = method;
    config.data = data;
    config.headers = {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    config.responseType = 'json';
    config.transformRequest = [
        function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }
    ];
    return service(config);
};

// 视频上传
export const uploadVideo = (url, method, data, contentType = 'application/x-www-form-urlencoded') => {
    let config = {};
    config.url = url;
    config.method = method;
    config.data = data;
    config.headers = {
        'Content-Type': 'multipart/form-data; boundary=WebAppBoundary'
    };
    return service(config);
};

export default service;
