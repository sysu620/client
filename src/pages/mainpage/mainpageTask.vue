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
      <div class="six wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>公告</h3>
                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">挣闲钱1.0上线啦</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">挣闲钱1.0上线啦</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="ui grid">
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
      <div class="eight wide column">
        <div class="ui center aligned container">
          <div class="ui grid">
            <div class="fifteen wide column ton black_border">
              <div class="ui buttons">
                <router-link
                  :to="{ name:'mainpageTask', params: { person: person }}"
                  class="ui button positive"
                >我的任务</router-link>
                <router-link
                  :to="{ name:'mainpagePub', params: { person: person }}"
                  class="ui button"
                >我的发布</router-link>
              </div>
              <div class="ui center aligned container">
                <taskitem
                  v-for="task in tasks"
                  v-bind:key="task.taskId"
                  v-bind:taskTitle="task.taskTitle"
                  v-bind:endTime="task.endTime"
                ></taskitem>

                <div class="row"></div>
                <div class="row"></div>
                <div class="row"></div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'psTask', params: {person: person}}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
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

      <div class="four wide column"></div>
      <div class="four wide column right aligned">
        <div class="ui category search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="输入你想查找的任务">
            <i class="search link icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
      <div class="four wide column left aligned">
        <router-link :to="{name: 'allTask'}" class="ui big blue button">查看任务列表</router-link>
      </div>
      <div class="four wide column"></div>
      <div class="row"></div>

      <div class="one wide column"></div>
      <div class="seven wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>填写问卷任务</h3>
                <div class="ui grid">
                  <deliverypage
                    v-for="question in QuestionPage"
                    v-bind:key="question.taskId"
                    v-bind:taskTitle="question.taskTitle"
                    v-bind:endTime="question.endTime"
                    v-bind:state="question.state"
                  ></deliverypage>
                </div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'filterQuestion'}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
                  </div>
                  <div class="one wide column"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
          </div>
        </div>
      </div>

      <div class="seven wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>快递领取任务</h3>
                <div class="ui grid">
                  <deliverypage
                    v-for="delivery in DeliveryPage"
                    v-bind:key="delivery.taskId"
                    v-bind:taskTitle="delivery.taskTitle"
                    v-bind:endTime="delivery.endTime"
                    v-bind:state="delivery.state"
                  ></deliverypage>
                </div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'filterDelivery'}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
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
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
import { async } from "q";
import { getStore } from "../../config/mUtils";
import { qAcceptPage } from "../../service/getData";
import taskitem from "../../components/task-item";
import deliverypage from "../../components/deliverypage";
import questionpage from "../../components/questionpage";
import { queryPageD, queryPageQ } from "../../service/getData";

export default {
  data() {
    return {
      searchText: "",
      person: getStore("userId"),
      tasks: [],
      DeliveryPage: [],
      QuestionPage: []
    };
  },
  methods: {
    async getTaskUserPick() {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      let res = await qAcceptPage({
        page: 0,
        userId: parseInt(getStore("userId")),
        $config: header
      });
      this.tasks = res.data.contents;
      // console.log(this.tasks);
    },
    async gettaskDelivery() {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      let res = await queryPageD({
        page: 0,
        userId: parseInt(getStore("userId")),
        $config: header
      });
      this.DeliveryPage = res.data.contents;
      console.log("haha");
      console.log(res);
      console.log("heihei");
      console.log(getStore("DeliveryPage"));
    },
    async gettaskQuestion() {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      let res = await queryPageQ({
        page: 0,
        userId: parseInt(getStore("userId")),
        $config: header
      });
      this.QuestionPage = res.data.contents;
    }
  },
  mounted() {
    this.getTaskUserPick();
    this.gettaskDelivery();
    this.gettaskQuestion();
  },
  components: {
    taskitem,
    deliverypage,
    questionpage
  }
};
</script>

<style scoped>
body {
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
.mline {
  height: 3em;
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
.top_0 {
  margin-top: 0;
}
</style>
