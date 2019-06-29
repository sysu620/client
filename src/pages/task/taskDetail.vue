<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item" @click="$router.push({name: 'mainpageTask', params:{person: person}})">
          <i class="large home icon"></i>
        </a >
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item" @click="$router.go(-1)">
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
                <img class="ui centered small circular image" src="../../assets/nan.jpg">
                <h3>{{ username }}</h3>
                <!--<div class="ui padded grid left aligned">
                  <div class="three wide column"></div>
                  <div class="six wide column">4次发布任务</div>
                  <div class="six wide column">12 次完成任务</div>
                </div>-->
                <div class="ui padded grid left aligned">
                  <div class="three wide column"></div>
                  <div class="five wide column">所在大学</div>
                  <div class="eight wide column">{{ username }}</div>

                  <div class="three wide column"></div>
                  <div class="five wide column">所在年级</div>
                  <div class="eight wide column">{{ university }}</div>

                  <div class="three wide column"></div>
                  <div class="five wide column">所学专业</div>
                  <div class="eight wide column">{{major}}</div>

                  <div class="three wide column"></div>
                  <div class="five wide column">联系方式</div>
                  <div class="eight wide column">{{phone}} {{email}}</div>
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
                        <div class="six wide column ff">任务类型</div>
                        <div class="eight wide column"></div>

                        <div class="six wide column"></div>
                        <div class="six wide column ff">快递任务</div>
                        <div class="four wide column"></div>
                       <!-- <div class="two wide column"></div>
                        <div class="five wide column">任务报酬</div>
                        <div class="nine wide column">1 币</div> -->

                        <div class="two wide column"></div>
                        <div class="six wide column ff">任务标题</div>
                        <div class="eight wide column"></div>

                        <div class="six wide column"></div>
                        <div class="nine wide column ff">{{ task.task.taskTitle}}</div>

                        <div class="two wide column"></div>
                        <div class="six wide column ff">截止时间</div>
                        <div class="eight wide column"></div>


                        <div class="six wide column"></div>
                        <div class="nine wide column ff">{{ task.task.endTime}}</div>

                        <div class="two wide column"></div>
                        <div class="eight wide column ff">任务具体内容</div>
                        <div class="six wide column"></div>

                        <div class="four wide column"></div>
                        <div class="twelve wide column fff">{{ task.delivery.content }}</div>

                        <!--<div class="two wide column"></div>
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
                        <div class="nine wide column">啊啊啊啊噢噢噢噢 网页UI好难画噢噢噢噢啊啊啊</div>-->
                      </div>
                    </div>
                    <br>
                  </div>
                  <div class="eight wide column center">
                    <div class="ui grid">
                      <div class="four wide column"></div>
                      <div class="eight wide column">
                        <img class="ui Small image" src="../../assets/log.jpg">
                      </div>
                      <div class="four wide column"></div>
                    </div>
                  </div>

                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <button @click="getAccept" class="ui small blue button" style="width:120px;">{{ buttonState }}</button>
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

import { getDelivery, acceptTask, finishAccept, fillQuery, finishPublish } from "../../service/getData";
import { getStore, setStore } from "../../config/mUtils";
export default {
  data() {
    return {
      username: getStore("username"),
      university: getStore("university"),
      grade: getStore("grade"),
      major: getStore("major"),
      phone: getStore("phone"),
      email: getStore("email"),
      task: {
        task: {
          taskType: '',
          endTime: '',
          taskTitle: ''
        },
        delivery: {
          content: ''
        }
      },
      buttonState: ''
    }
  },
  created() {
    this.getDeliveryDetail()
  },

  methods: {
    async getDeliveryDetail() {
        if(this.$route.params.state == '0') {
          this.buttonState = '领取任务'
        } else if(this.$route.params.state == '1') {
          this.buttonState = '结束任务'
        }
        let header = { headers: { "Content-Type": "application/json" } };
        console.log("start request");
        let res = await getDelivery({
            taskId: parseInt(this.$route.params.taskId),
            $config: header
        });
        console.log(res.data)
        this.task = res.data
    },
    async getAccept() {
      if(this.$route.params.state == '0') {
        let header = { headers: { 
          "Content-Type": "application/json",
          "Authorization": getStore("token")} };
        console.log("start request");
        let taskId = {taskId: parseInt(this.$route.params.taskId)}
        let res = await acceptTask({
          body: taskId,
          $config: header
        });
        console.log(res.data)
        setTimeout(() => {
            this.$router.push({ name: "mainpagePub"})
        }, 1500)
      } else {
        let header = { headers: { 
          "Content-Type": "application/json",
          "Authorization": getStore("token")} };
        console.log("start request");
        let taskId = {taskId: parseInt(this.$route.params.taskId)}
        let res2 = await finishPublish({
          body: taskId,
          $config: header
        });
        console.log(res2.data)

        setTimeout(() => {
            this.$router.push({ name: "mainpagePub"})
        }, 1500)
      }

    }
  }
};
</script>

<style scoped>
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

.ff {
  font-size: 20px;
}

.fff {
  font-size: 18px;
}

.pic {
  width: 100px;
  height: 100px;
}
</style>
