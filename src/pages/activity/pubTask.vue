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
    <div id="main1" class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <div class="ui red padded grid">
            <div class="row"></div>
            <div class="two wide column"></div>
            <div class="twelve wide column">
              <div class="ui left aligned container">
                <div class="ui middle aligned grid">
                  <div class="four wide column">任务类型</div>
                  <div class="twelve wide column">快递拿取</div>

                  <div class="four wide column">任务标题</div>
                  <div class="twelve wide column">
                    <div class="ui input">
                      <input type="text" placeholder v-model="taskTitle">
                    </div>
                  </div>

                  <div class="four wide column">截止时间</div>
                  <div class="twelve wide column">
                    <div class="ui mini input">
                      <input type="text" placeholder v-model="year">
                    </div>年
                    <div class="ui mini input">
                      <input type="text" placeholder v-model="month">
                    </div>月
                    <div class="ui mini input">
                      <input type="text" placeholder v-model="day">
                    </div>日
                  </div>
                  <div class="four wide column">任务具体内容</div>
                  <div class="twelve wide column"></div>
                    <div class="ui input">
                      <input type="text" placeholder style="width:450px;height:200px" v-model="content">
                    </div>
                  <div class="three wide column left aligned">
                    <button class="ui small blue button" style="width:120px;" @click="publishD()">发布</button>
                  </div>
                  </div>

                  <div class="one wide column"></div>
                </div>
              </div>
              <br>
            </div>
            <div class="two wide column"></div>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
      <div class="row"></div>
    </div>
</template>

<script>
import { getStore } from "../../config/mUtils";
import { queryPageD, queryPageQ, publishDTask } from "../../service/getData";
export default {
  mounted() {
    $(this.$el)
      .find(".ui.dropdown")
      .dropdown();
  },
  data() {
    return {
      person: getStore("userId"),
      taskType: "delivery",
      taskTitle: "",
      content: "",
      year: "",
      month: "",
      day: ""
    };
  },
  methods: {
    async publishD() {
      let task = {
        
        task: {
          taskTitle: this.taskTitle,
          taskType: this.taskType,
          endTime: this.year + '-' + this.month + '-' + this.day
        },
        delivery: {
          content: this.content,
        }
      }

      console.log(task)
      
      let header = { headers: { 
          "Content-Type": "application/json",
          "Authorization": getStore("token")} };
      let res = await publishDTask({ body: task, $config: header });
      console.log(res.data) 
      setTimeout(() => {
          this.$router.push({ name: "mainpagePub"})
      }, 1500)
    }
  },
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
</style>
