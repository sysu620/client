<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item" @click="$router.push({name: 'mainpageTask', params:{person: person}})">
          <i class="large home icon"></i>
        </a >
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
          <i class="circular centered huge teal dollar icon"></i>
        </div>
        <br>
        <br>
        <div class="ui center aligned container">
          <div class="ui container">
            <div class="ui large labeled input">
              <div class="ui label f">请输入支付宝账号</div>
              <input type="text" placeholder="mysite.com">
            </div>
          </div>
          <br>
          <br>
          <br>
          <div class="ui animated button" tabindex="0">
            <div class="visible content">绑定</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
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
