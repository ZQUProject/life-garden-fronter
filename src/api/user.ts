import { getRequest, postRequest, putRequest, getNoAuthRequest, postNoAuthRequest} from '@/utils/request';


export const login = (data) => postNoAuthRequest('/auth/login', data);
export const getCaptchaImage = () => getNoAuthRequest('/auth/captcha', null);
export const getUserMessage = () => getNoAuthRequest('/user/message', null);