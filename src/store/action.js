import { signIn, getUser } from "../service/getData";

import { RECORD_USERINFO } from "./mutation-types.js";

export default {
  async userLogin({ commit, state }, payload) {
    let body = {
      userId: payload.userId,
      password: payload.password
    };
    let header =  {headers: {"Content-Type": "application/json"}}
    let res = await signIn({"body": body, "$config": header});
    console.log(res.data.token)
    commit(RECORD_USERINFO, {'token': res.data.token, 'userId': payload.userId});
  }
};
