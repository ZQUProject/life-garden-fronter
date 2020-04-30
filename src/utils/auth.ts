import { session } from '@/utils/session';

const TokenKey = 'life_garden_token'
export function getToken() {
    return session.get(TokenKey);
  }
  
  export function setToken(token: string) {
    return session.set(TokenKey, token);
  }
  
  export function removeToken() {
    return session.remove(TokenKey);
  }