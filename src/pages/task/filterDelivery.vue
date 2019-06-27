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
    <div id="main1" class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <div class="ui red padded grid">
            <div class="one wide column"></div>
            <div class="two wide column left aligned">
              <router-link :to="{name: 'mainpageTask'}" class="ui mini button">返回主页</router-link>
            </div>
            <div class="two wide column left aligned">
              <router-link :to="{name: 'filterQuestion'}" class="ui mini button">问卷任务</router-link>
            </div>
            <div class="two wide column left aligned">
              <router-link :to="{name: 'filterDelivery'}" class="ui mini blue button">快递任务</router-link>
            </div>
            <div class="eight wide column right aligned">
              <div class="ui category search">
                <div class="ui icon input">
                  <input class="prompt" type="text" placeholder="输入你想查找的任务">
                  <i class="search icon"></i>
                </div>
                <div class="results"></div>
              </div>
            </div>
            <div class="one wide column"></div>

            <div class="one wide column"></div>
            <div class="fourteen wide column">
              <div class="ui center aligned container black_border">
                <div class="ui red padded grid">
                  <div class="sixteen wide column">
                    <div class="ui grid">
                      <div class="six wide column left aligned">任务标题</div>
                      <div class="three wide column left aligned">任务类型</div>
                      <div class="three wide column left aligned">完成进度</div>
                      <div class="four wide column left aligned">截止日期</div>
                    </div>
                  </div>
                  <pubitem  
                    v-for="task in tasks"
                    v-bind:key="task.taskId"
                    v-bind:taskId="task.taskId"
                    v-bind:taskTitle="task.taskTitle"
                    v-bind:endTime="task.endTime"
                    v-bind:state="task.state"
                    v-bind:taskType="task.taskType"
                  ></pubitem>

                </div>
              </div>
            </div>

            <div class="one wide column"></div>

            <div class="one wide column"></div>
            <div class="eight wide column"></div>
            <div class="six wide column right aligned">
              <div class="ui blue six item menu">
                <a class="item"></a>
                <a class="active item">1</a>
                <a class="item">2</a>
                <a class="disabled item">...</a>
                <a class="item">7</a>
                <a class="item">></a>
              </div>
            </div>
            <div class="one wide column"></div>
          </div>
          <div class="three wide column"></div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getStore } from "../../config/mUtils";
import  pubitem  from "../../components/pubitem2";
import { queryPageD } from "../../service/getData";

export default {
  data() {
    return {
      person: getStore("userId"),
      tasks: []
    };
  },

  mounted() {
    this.getPageD();
  },

  methods: {
    async getPageD() {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      let res = await queryPageD({
        page: 1,
        userId: parseInt(getStore("userId")),
        $config: header
      });
      console.log(res);
      this.tasks = res.data.contents;
      while(this.tasks.length < 10) {
        this.tasks.push({
          taskId: 0,
          taskTitle: "",
          taskType: "",
          endTime: "",
          state: ""

        })
        }
        console.log(this.tasks)
    }
  },

  components: {
    pubitem
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

.mildblue {
  background-color: #e9f7fc;
}

.button {
  background-color: #4caf50;
  /* Green */
  font-size: 100px;
  border-radius: 50%;
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
