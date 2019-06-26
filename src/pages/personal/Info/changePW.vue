<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item" @click="$router.push({name: 'message', params:{person: person}})">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item" @click="$router.push({name: 'person', params: {person: person}})">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <button class="large ui f disabled button">设置新密码</button>
          <br>
          <br>
          <div class="ui container">
            <div class="ui left corner big labeled input">
              <input type="text" placeholder="    设置6至20位登录密码">
              <div class="ui left corner label">
                <i class="lock icon"></i>
              </div>
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui left corner big labeled input">
              <input type="text" placeholder="    请再次输入登录密码">
              <div class="ui left corner label">
                <i class="lock icon"></i>
              </div>
            </div>
          </div>
          <br>

          <div class="ui center aligned container">
            <button class="ui teal large button">下一步</button>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from "../../../config/mUtils";
export default {
  data() {
    return {
      person: getStore("userId")
    };
  },
  methods: {},
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
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
