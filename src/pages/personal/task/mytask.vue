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
            <div class="six wide column">
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
import { qAcceptPage, qAcceptPage2, finishAccept } from "../../../service/getData";
export default {
  data() {
    return {
      person: getStore("userId"),
      tasks: [],
      currentPage: 1
    };
  },

  mounted() {
    this.getTaskUserAccept(this.currentPage);
  },
  methods: {
    async getTaskUserAccept(page) {
      let header = { headers: { "Content-Type": "application/json" } };
      console.log("start request");
      try {
        let res = await qAcceptPage({
          page: page,
          userId: parseInt(getStore("userId")),
          $config: header
        });
        console.log(res);
        this.tasks = res.data.contents;

        let res2 = await qAcceptPage2({
          page: page,
          userId: parseInt(getStore("userId")),
          $config: header
        });
        console.log(res2);

        for(var i = 0; i < this.tasks.length; i++) {
          if(this.task[i].state == "已完成" && res2.data.contents[i].state == "进行中") {
            let header = { headers: { 
              "Content-Type": "application/json",
              "Authorization": getStore("token")} };
            console.log("start request");

            let taskId = {taskId: parseInt(this.task[i].taskId)}
            let res = await finishAccept({
              body: taskId,
              $config: header
            });
            console.log(res.data)
          } else {
            this.tasks[i].state = res2.data.contents[i].state
          }
        }
      } catch(e) {
        if(this.currentPage > 1) {
          this.currentPage--
        }
      }
    },
    turnPage (num) {
      if (num === 1) {
        this.currentPage++
        this.getTaskUserAccept(this.currentPage)
      } else {
        if (this.currentPage === 1) {
          return
        } else {
          this.currentPage--  
          this.getTaskUserAccept(this.currentPage)        
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
