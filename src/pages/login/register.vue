<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item" @click="$router.go(-1)">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">昵称</div>
              <input type="text" placeholder="mysite.com" v-model="username">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">学校</div>
              <input type="text" placeholder="mysite.com" v-model="university">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">手机</div>
              <input type="text" placeholder="mysite.com" v-model="phoneNumber">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">email</div>
              <input type="text" placeholder="mysite.com" v-model="email">
            </div>
          </div>
          <br>

          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">密码</div>
              <input
                :type="showPassword == true?'text':'password'"
                placeholder="password"
                v-model="password"
              >
            </div>
          </div>

          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">密码</div>
              <input
                :type="showPassword == true?'text':'password'"
                placeholder="请再次输入密码"
                v-model="passwordagain"
              >
            </div>
          </div>
          <br>
          <div class="ui checkbox">
            <input type="checkbox" name="example" v-model="isChecked">
            <label>勾选同意《用户服务协议》</label>
          </div>

          <br>
          <br>
          <div class="ui buttons">
            <button class="ui large button" v-on:click="register">注册</button>
            <div class="or"></div>
            <router-link :to="{name: 'login'}" class="ui positive large button">已有账号，立即登录</router-link>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import { signUp } from "../../service/getData";
import { setStore } from "../../config/mUtils";
export default {
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
  },
  data() {
    return {
      phoneNumber: null, //电话号码
      password: null, //密码
      passwordagain: null, //密码
      showPassword: false, // 是否显示密码
      isChecked: false, //是否同意用户协议
      username: "", //昵称
      university: "", //学校
      userId: 0, //Id，后台给
      balance: 0, //余而
      email: ""
    };
  },
  computed: {
    //判断手机号码
    rightPhoneNumber: function() {
      return /^1\d{10}$/gi.test(this.phoneNumber);
    }
  },
  methods: {
    async register() {
      if (!this.rightPhoneNumber) {
        swal("invalid phone number");
      }
      if (this.password != this.passwordagain) {
        swal("enter same password");
      }
      if (!this.isChecked) {
        swal("please agree the protocol");
      }
      let body = {
        userId: parseInt(this.userId),
        password: String(this.password),
        username: String(this.username),
        university: String(this.university),
        grade: String(this.grade),
        phone: String(this.phoneNumber),
        major: String(this.major),
        email: String(this.email),
        balance: parseInt(this.balance)
      };
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start register");
      let res = await signUp({ body: body, $config: header }).catch(e => {
        swal(e.response.data.error);
      });
      console.log(res.data);
      setStore("userId", res.data.userId);
      setStore("username", res.data.username);
      setStore("university", res.data.university);
      setStore("grade", res.data.grade);
      setStore("phone", res.data.phone);
      setStore("major", res.data.major);
      setStore("email", res.data.email);
      setStore("balance", res.data.balance);
      this.$router.push({
        name: "mainpagePub",
        params: { person: res.data.userId }
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
