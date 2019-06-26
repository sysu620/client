<template>
  <div>
    <div class="one wide column"></div>
    <div class="fourteen wide column">
      <div class="ui center aligned container black_border">
        <div class="ui red padded grid">
          <div class="one wide column"></div>
          <div class="three wide column">
            <div class="ui container">
              <div class="ui grid">
                <div class="row"></div>
                <img class="ui small image" src="../assets/log.jpg">
              </div>
            </div>
          </div>
          <div class="nine wide column left aligned">
            <div class="ui grid">
              <div class="sixteen wide column">{{taskTitle}}</div>

              <div class="four wide column">问卷填写进度: {{state}}</div>
              <div class="four wide column">任务种类: {{taskType}}</div>
              <div class="two wide column">0/1</div>

              <div class="sixteen wide column">任务截止时间: {{endTime}}</div>
            </div>
          </div>
          <div class="three wide column">
            <div class="ui center aligned container">
              <div class="ui red padded grid">
                <div class="row"></div>
                <div class="row"></div>
                <button class="ui small blue button">查看任务</button>
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
    <div class="one wide column"></div>
  </div>
</template>


<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {

    },
    props: ["taskTitle", "state", "taskType", "endTime"]
    
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
