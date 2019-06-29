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
            <div class="nine wide column"></div>
            <div class="seven wide column">
              <!--<div class="ui right container">
                <div class="ui blue six item menu">
                  <a class="item">&lt; </a>
                  <a class="active item">1</a>
                  <a class="item">2</a>
                  <a class="disabled item">...</a>
                  <a class="item">7</a>
                  <a class="item">></a>
                </div>
              </div>-->
              <div class="ui right container">
                <button class="ui button one wide column blue" @click="turnPage(-1)">
                  &lt;Prev
                </button>
                <span>当前第 {{ currentPage }} 页</span>
                <button class="ui button one wide column blue" @click="turnPage(1)">
                  >Next
                </button>
              </div>
            </div>
            <div class="one wide column"></div>
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
      <div class="three wide column"></div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from "../../../config/mUtils";
import  pubitem  from "../../../components/pubitem";
import { qPublishPage } from "../../../service/getData";

export default {
  data() {
    return {
      person: getStore("userId"),
      tasks: [],
      currentPage: 1
    };
  },

  mounted() {
    this.getTaskUserPub(this.currentPage);
  },

  methods: {
    async getTaskUserPub(page) {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      let res
      try {
        res = await qPublishPage({
          page: page,
          userId: parseInt(getStore("userId")),
          $config: header
        })
        console.log(res.data);
        this.tasks = res.data.contents;
      } catch(e) {
        this.currentPage--
      };
      /*while(this.tasks.length < 5) {
        this.tasks.push({
          taskId: 0,
          taskTitle: "",
          taskType: "",
          endTime: "",
          state: ""

        })
        }
        console.log(this.tasks)
    */},
      turnPage (num) {
        if (num === 1) {
          this.currentPage++
          this.getTaskUserPub(this.currentPage)
        } else {
          if (this.currentPage === 1) {
            return
          } else {
            this.currentPage--  
            this.getTaskUserPub(this.currentPage)        
          }
        }
      },
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

.sty1 {
  font-weight: bold;
  font-size: 1.5em;
}

.height1 {
  height: 60px;
}
</style>
