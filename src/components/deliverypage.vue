<template>
  <div>
    <div class="one wide column"></div>
    <div class="four wide column">
      <div class="ui center aligned container">
        <div class="ui grid top_0">
          <div class="one wide column"></div>
          <div class="fourteen wide column ton black_border">
            <div class="ui container">
              <h5>{{taskTitle}}</h5>
              <p>内容：挣闲钱意见</p>
              <p>状态： {{state}}</p>
              <p>截至日期：{{endTime}}</p>
            </div>
          </div>
          <div class="one wide column"></div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props:["taskTitle", "state", "endTime"]
    
}
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
