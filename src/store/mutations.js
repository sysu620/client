import { GET_USERINFO, RECORD_USERINFO } from "./mutation-types.js";

export default {
  // 记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userId = info.userId;
    state.token = info.token;
    state.login = true;
  }
};
