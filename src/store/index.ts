import Vue from 'vue';
import Vuex from 'vuex';
import { IUserState } from './modules/user';
import getters from './getters';

Vue.use(Vuex);

export interface IRootState {

  user: IUserState;
}
const store = new Vuex.Store<IRootState>({getters});

export default store;