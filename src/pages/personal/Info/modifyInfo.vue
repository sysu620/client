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
          <img src="../../../assets/nan.jpg" class="ui centered small circular image">
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
              <div class="ui label">学号</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">姓名</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">年龄</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">性别</div>
              <div class="ui selection dropdown">
                <input type="hidden" name="gender">
                <i class="dropdown icon"></i>
                <div class="default text">Gender</div>
                <div class="menu">
                  <div class="item" data-value="3">男</div>
                  <div class="item" data-value="4">女</div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">年级</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label">专业</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <br>
          <div class="ui buttons">
            <button class="ui large button">保存</button>
            <div class="or"></div>
            <button class="ui positive large button">取消</button>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from '../../../config/mUtils';
export default {
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
  },
  data () {
    return {
      person: getStore('userId')
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
