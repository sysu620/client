import { signIn, getUser } from "../service/getData";

import { RECORD_USERINFO } from "./mutation-types.js";

import { getStore, setStore } from "../config/mUtils";

export default {
  async userLogin({ commit, state }, payload) {
    let body = {
      userId: payload.userId,
      password: payload.password
    };
    let header = { headers: { "Content-Type": "application/json" } };
    let res = await signIn({ body: body, $config: header });
    console.log(res.data.token);
    setStore("userId", payload.userId);
    setStore("token", res.data.token);
    //commit(RECORD_USERINFO, {'token': res.data.token, 'userId': payload.userId});
  }
};
