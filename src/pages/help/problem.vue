<template>
  <div class="semantic-component">
    <div class="ui blue secondary  inverted menu">
      <div class="right menu">
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item" @click="$router.go(-1)">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <i class="centered huge teal question circle outline icon"></i>
        </div>
        <br />
        <br />
        <div class="ui  center aligned container">
          <p class="f">这里写用户常见的问题</p> <br />

        </div>

      </div>
      <div class="three wide column"></div>

    </div>

  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  body {
    background-color: #F2F6FC;
  }

  .ton {
    background-color: white;
  }

  .f {
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(102, 102, 255, 0.349019607843137);
    font-size: 19px;
  }

</style>
