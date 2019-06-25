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
              <input type="text" placeholder="mysite.com">
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
          <div class="ui center aligned container">
            <button class="ui teal small button">发送验证码</button>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">验证</div>
              <input type="text" placeholder="验证码">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">密码</div>
              <input :type="showPassword == true?'text':'password'" placeholder="password" v-model="password">
            </div>
          </div>

          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">密码</div>
              <input :type="showPassword == true?'text':'password'" placeholder="请再次输入密码" v-model="passwordagain">
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
export default {
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
  },
  data(){
      return {
          phoneNumber: null, //电话号码
          password: null, //密码
          passwordagain: null, //密码
          showPassword: false, // 是否显示密码
          isChecked: false, //是否同意用户协议

      }

  },
    computed: {
    //判断手机号码
    rightPhoneNumber: function (){
        return /^1\d{10}$/gi.test(this.phoneNumber)
    }
},
  methods: {
      register(){
          if (!this.rightPhoneNumber) {
            swal('invalid phone number');

          }
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
