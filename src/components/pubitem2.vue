<template>
  <div class="sixteen wide column mildblue">
    <div class="ui grid">
      <div class="six wide column left aligned">


        <router-link :to="{name: 'qsfill', params: { num: this.taskId , state: 0}}" v-if="stateFlag">{{taskTitle}}</router-link>
      </div>
      <div class="three wide column left aligned">{{taskType}}</div>
      <div class="three wide column left aligned">{{state}}</div>
      <div class="four wide column left aligned">{{endTime}}</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      stateFlag: true
    };
  },
  mounted() {
    this.getState()
  },
  methods: {
    getTaskDetail() {
      console.log(this.taskId);
      if (this.taskType == "questionare") {
        this.$router.push({ name: "qsfill", params: { num: this.taskId } });
      }
    },
    getState() {
      console.log(this.stateFlag)
      if(this.state == "已完成") {
        console.log(this.stateFlag)
        this.stateFlag = false
      }
    }
  },
  props: ["taskTitle", "state", "taskType", "endTime", "taskId"]
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
