<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <button class="large ui f disabled button">账号登录</button>
          <br>
          <br>
          <div class="ui container">
            <div class="ui left corner big labeled input">
              <input v-model="account" type="text" placeholder="    请输入账户">
              <div class="ui left corner label">
                <i class="user icon"></i>
              </div>
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui left corner big labeled input">
              <input v-model="password" type="text" placeholder="    请输入登录密码">
              <div class="ui left corner label">
                <i class="lock icon"></i>
              </div>
            </div>
          </div>
          <br>

          <div class="ui center aligned container">
            <button class="ui teal large button" v-on:click="login">登录</button>
          </div>
          <br>
          <br>
          <br>
          <div class="ui center aligned container">
            <div class="ui buttons">
              <button class="ui large button">注册新用户</button>
              <div class="or"></div>
              <button class="ui positive large button">忘记密码</button>
            </div>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { async } from "q";

export default {
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
  },
  data() {
    return {
      account: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
    ...mapActions(["userLogin"]),
    async login() {
      let body = { userId: parseInt(this.account), password: this.password };
      let a = await this.userLogin(body);
      this.$router.push({
        name: "mainpagePub",
        params: { person: this.userId }
      });
    }
  }
};
</script>

<style scoped>
.semantic-component {
  background-color: #f2f6fc;
}

.ton {
  background-color: white;
}

.f {
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(102, 102, 255, 0.349019607843137);
  font-size: 19px;
}
</style>
