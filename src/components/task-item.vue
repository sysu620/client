<template>
  <div>
    <div class="ui grid mline">
      <div class="one wide column"></div>
      <div class="seven wide column left aligned">{{taskTitle}}</div>
      <div class="seven wide column right aligned">结束时间：{{endtime}}</div>
      <div class="one wide column"></div>
    </div>
    <div class="ui divider"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: ["taskTitle", "endTime"]
};
</script>


<style scoped>
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
