import { VuexModule, Module, Action, Mutation, getModule, MutationAction } from 'vuex-module-decorators'
import store from '@/store';
import { setToken, getToken, removeToken } from '@/utils/auth';
import { login } from '@/api/user'
import { RESPONSE_CODE } from '@/constant'
import { decrypt } from '@/utils/crypt'


export interface IUserState {
    user: any;
    token: any;
    roles: any;
    loadMenus: boolean;
  }
  
  @Module({dynamic: true, store, namespaced: true, name: 'user'})
  class User extends VuexModule implements IUserState {
    user = {};
    token = getToken();
    roles = [];
    loadMenus = false;
  
    @Mutation
    SET_USER(user) {
      this.user = user;
    }
  
    @Mutation
    SET_TOKEN(token) {
      this.token = token;
    }

    @Mutation
    SET_ROLES(roles) {
      this.roles = roles;
    }
  
    @Mutation
    SET_LOADMENUS(loadMenus) {
      this.loadMenus = loadMenus;
    }
  
    // action
    // 用户名登录
    @Action({commit: 'SET_TOKEN'})
    async login(userInfo: { username: string, password: string, captcha: string,
                                        uuid: string}) {
      const username = userInfo.username.trim();
      const captcha = userInfo.captcha.trim();
      const res = await login({
        data: {
          username,
          password: userInfo.password,
          captcha,
          uuid: userInfo.uuid
        }
      });
      const {status, data} = res;
      if (data.code === RESPONSE_CODE.SUCCESS) {
        if (data != null) { 
            setToken(data.token);
        }
      } else {
        
      }
    }
  
    // @Action
    // ResetToken() {
    //   removeToken();
    //   this.SET_TOKEN('');
    //   this.SET_ROLES([]);
    // }
  
    // 获取用户信息
    // @MutationAction({mutate: ['roles', 'name', 'avatar', 'introduction']})
    // async GetUserInfo() {
    //   const {code, data} = await services.getUserInfo({
    //     method: 'get',
    //     data: {
    //       token: getToken()
    //     }
    //   });
    //   if (!data) {
    //     throw Error('Verification failed, please Login again.');
    //   }
    //   if (code === SUCCESS_STATUS) {
    //     const {roles, name, avatar, introduction} = data;
    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       throw Error('getInfo: roles must be a non-null array!');
    //     }
    //     console.log('roles', roles);
    //     return {
    //       roles,
    //       name,
    //       avatar,
    //       introduction
    //     };
    //   }
    //   return {
    //     roles: [],
    //     name: '',
    //     avatar: '',
    //     introduction: ''
    //   };
    // }
  
    // 登出
    // @MutationAction({mutate: ['token', 'roles']})
    // async LogOut() {
    //   await services.logout({});
    //   removeToken();
    //   resetRouter();
    //   return {
    //     token: '',
    //     roles: []
    //   };
    // }
  
    // @Action({commit: 'SET_TOKEN'})
    // async FedLogOut() {
    //   removeToken();
    //   return '';
    // }
  
    // 动态修改权限
    // @MutationAction({mutate: ['token', 'roles', 'name', 'avatar', 'introduction']})
    // async ChangeRoles(role: string) {
    //   const token = role + '-token';
  
    //   setToken(token);
  
    //   const {code, data} = await services.getUserInfo({
    //     method: 'get',
    //     data: {
    //       token: role
    //     }
    //   });
    //   if (code === SUCCESS_STATUS) {
    //     const {roles} = data;
    //     console.log('ChangeRoles data', data);
    //     resetRouter();
    //     permissionModule.GenerateRoutes(roles);
    //   }
  
    //   return {
    //     token,
    //     roles: data.roles,
    //     name: data.name,
    //     avatar: data.avatar,
    //     introduction: data.introduction
    //   };
    // }
  }
  
  export const UserModule = getModule(User);