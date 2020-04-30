import request from '@/utils/request';


export const login = (data) => request({url: 'api/auth/login', method: 'post', data});
export const getCaptchaImage = () => request({url: 'api/auth/captcha', method: 'get'});