import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { TokenKey, getToken, removeToken } from '@/utils/auth';
import { Message, Notice } from 'view-design';
import { session } from '@/utils/session';

const authRequestHeader = 'Bearer ';

/**
 * 创建axios实例对象
 */       
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,        // api的base_url
    timeout: 5 * 1000,                      // 请求超时时间
});

request.interceptors.request.use(config => {
    return config;
}, err => {
    Message.error('请求超时');
    return Promise.resolve(err);
});
var _this = this;

// http response 拦截器
request.interceptors.response.use(response => {

    const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        case 401:
            // 未登录 清除已登录状态
            session.set('userInfo', '');
            removeToken();
            if (data.message !== null) {
                Message.error(data.message);
            }
            router.push('/login');
            break;
        case 403:
            // 没有权限
            if (data.message !== null) {
                Message.error(data.message);
            } else {
                Message.error("未知错误");
            }
            break;
        case 500:
            // 错误
            if (data.message !== null) {
                Message.error(data.message);
            } else {
                Message.error("未知错误");
            }
            break;
        default:
            return data.data;
    }

    return data;
}, error => {
    // 返回状态码不为200时候的错误处理
    Message.error(err.toString());
    return Promise.resolve(err);
});

export const getRequest = (url, params) => {
    let accessToken = getToken();
    return request({
        method: 'get',
        url: `${url}`,
        params: params,
        headers: {
            authRequestHeader: accessToken
        }
    });
};

export const postRequest = (url, params) => {
    let accessToken = getToken();
    return request({
        method: 'post',
        url: `${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};

export const putRequest = (url, params) => {
    let accessToken = getToken();
    return request({
        method: 'put',
        url: `${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authRequestHeader : accessToken
        }
    });
};

export const postBodyRequest = (url, params) => {
    let accessToken = getToken();
    return request({
        method: 'post',
        url: `${url}`,
        data: params,
        headers: {
            authRequestHeader : accessToken
        }
    });
};

/**
 * 无需token验证的GET请求 避免旧token过期导致请求失败
 * @param {*} url 
 * @param {*} params 
 */
export const getNoAuthRequest = (url, params) => {
    return request({
        method: 'get',
        url: `${url}`,
        params: params
    });
};

export const postNoAuthRequest = (url, params) => {
    return request({
        method: 'post',
        url: `${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};