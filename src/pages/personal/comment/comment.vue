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
    <div class="ui teal animated fade button f" tabindex="0">
      <div class="visible content f2">全部：8</div>
      <div class="hidden content f2">8</div>
    </div>
    <div class="ui animated fade button f" tabindex="0">
      <div class="visible content f">好评：8</div>
      <div class="hidden content f">8</div>
    </div>
    <div class="ui padded grid">
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="three wide column">
        <div class="three wide column">
          <div class="ui segment f">
            <div class="ui center aligned container">
              <i class="huge thumbs up outline icon f"></i>
              <br>
              <br>来自计算机专业的被帮助者：
              <br>
              <br>
谢谢小哥哥帮我
              拿快递！
              <br>
              <br>
              <br>2019年4月30日
            </div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from '../../../config/mUtils';
export default {
  data () {
    return {
      person: getStore('userId'),

    }
  }
}
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

.f2 {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 19px;
}
</style>
