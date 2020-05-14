import { getRequest, postRequest, putRequest, getNoAuthRequest, postNoAuthRequest} from '@/utils/request';


export const getHomeCarousel = () => getNoAuthRequest('/show/carousel', null);