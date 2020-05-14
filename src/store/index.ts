import Vue from 'vue';
import Vuex from 'vuex';
import { IUserState } from './modules/user';
import { AppState } from './modules/app'


Vue.use(Vuex);

interface IRootState { 
  app: AppState;
  user: IUserState;
}
export default new  Vuex.Store<IRootState>({

});