
import { IRootState } from '@/store/index';

const getters = {
    roles: (state: IRootState) => state.user.roles,

};
export default getters;
  