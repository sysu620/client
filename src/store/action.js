import { signIn, getUser } from "../service/getData";

import { RECORD_USERINFO } from "./mutation-types.js";

export default {
  async userLogin({ commit, state }, payload) {
    let body = {
      userId: payload.userId,
      password: payload.password
    };
    let res = await signIn(body);
    commit(RECORD_USERINFO, res);
  }
};
