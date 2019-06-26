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
    <div id="main1" class="ui padded grid">
      <div class="one wide column"></div>
      <div class="five wide column">
        <div class="ui center aligned container">
          <div class="ui grid">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <img class="ui centered small circular image" src="../../../../assets/nan.jpg">
                <h3>懒死我了</h3>
                <div class="ui padded grid left aligned">
                  <div class="three wide column"></div>
                  <div class="six wide column">4次发布任务</div>
                  <div class="six wide column">12 次完成任务</div>
                </div>
                <div class="ui padded grid left aligned">
                  <div class="three wide column"></div>
                  <div class="four wide column">所在大学</div>
                  <div class="eight wide column">中山大学</div>

                  <div class="three wide column"></div>
                  <div class="four wide column">所在年级</div>
                  <div class="eight wide column">大三</div>

                  <div class="three wide column"></div>
                  <div class="four wide column">所学专业</div>
                  <div class="eight wide column">软件工程</div>

                  <div class="three wide column"></div>
                  <div class="four wide column">联系方式</div>
                  <div class="eight wide column">137 1234 5678 haotongxue@sysu.com</div>
                  <div class="row"></div>
                  <div class="row"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
            <div class="row"></div>
          </div>
        </div>
      </div>
      <div class="nine wide column">
        <div class="ui center aligned container">
          <div class="ui grid">
            <div class="fifteen wide column ton black_border">
              <div class="ui center aligned container">
                <div class="ui red padded grid">
                  <div class="eight wide column">
                    <div class="ui left aligned container">
                      <div class="ui grid">
                        <div class="two wide column"></div>
                        <div class="five wide column sty1">任务类型</div>
                        <div class="nine wide column">问卷填写</div>

                        <div class="two wide column"></div>
                        <div class="five wide column sty1">任务报酬</div>
                        <div class="nine wide column">1 币</div>

                        <div class="two wide column"></div>
                        <div class="five wide column sty1">任务时限</div>
                        <div class="nine wide column">2019 年 5 月 31 日 为止</div>

                        <div class="two wide column"></div>
                        <div class="thirteen wide column sty1">任务具体内容</div>

                        <div class="two wide column"></div>
                        <div class="five wide column right aligned">问卷内容</div>
                        <div class="nine wide column">对挣闲钱网站的建议</div>

                        <div class="two wide column"></div>
                        <div class="five wide column right aligned">问卷题数</div>
                        <div class="nine wide column">10 题</div>

                        <div class="two wide column"></div>
                        <div class="five wide column right aligned">问卷用途</div>
                        <div class="nine wide column">产品迭代</div>

                        <div class="two wide column"></div>
                        <div class="five wide column right aligned">需求问卷数量</div>
                        <div class="nine wide column">59 / 200</div>

                        <div class="two wide column"></div>
                        <div class="five wide column right aligned">其他备注</div>
                        <div class="nine wide column">啊啊啊啊噢噢噢噢 网页UI好难画噢噢噢噢啊啊啊</div>
                      </div>
                    </div>
                    <br>
                  </div>
                  <div class="eight wide column center">
                    <div class="ui grid">
                      <div class="four wide column"></div>
                      <div class="eight wide column">
                        <img class="ui Small image" src="../../../../assets/log.jpg">
                      </div>
                      <div class="four wide column"></div>
                    </div>
                  </div>

                  <div class="eleven wide column"></div>
                  <div class="four wide column left aligned">
                    <button
                      class="ui small blue button"
                      style="width:120px;"
                      @click="cancelTask"
                    >取消任务</button>
                  </div>
                  <div class="one wide column"></div>
                </div>
              </div>
            </div>

            <div class="one wide column"></div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from "../../../../config/mUtils";
import { finishPublish } from "../../../../service/getData";
export default {
  data() {
    return {
      person: getStore("userId")
    };
  },
  methods: {
    async cancelTask() {
      await finishPublish();
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
  font-size: 1em;
}

.pic {
  width: 100px;
  height: 100px;
}

.sty1 {
  font-weight: bold;
  font-size: 1.3em;
}

#main1 {
  padding-top: 48px;
}

.black_border {
  border: 1px solid black;
  border-radius: 5px;
}

.bottom_0 {
  padding-bottom: 0;
}
</style>
