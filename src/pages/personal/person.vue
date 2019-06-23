<template>
  <div class="semantic-component">
    <div class="ui blue secondary  inverted menu">
      <div class="right menu">
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div id="main1" class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <div class="ui center aligned container">
          <div class="ui red padded grid">
            <div class="eight wide column"></div>
            <div class="eight wide column"></div>
            <div class="eight wide column"></div>
            <div class="eight wide column"></div>
            <div class="three wide column"></div>
            <div class="four wide column">
              <img class="ui centered small circular image" src="../../assets/nan.jpg">
              <br />
              <div class="ui center aligned container">
                <a class="ui item">
                  <i class="large edit icon"></i>
                </a>
              </div>
            </div>
            <div class="seven wide column right aligned">
              <p class="ui f">16340000-----------------------学号</p>
              <p class="ui f">张大鱼-------------------------姓名</p>
              <p class="ui f">21岁---------------------------年龄</p>
              <p class="ui f">男-----------------------------性别</p>
              <p class="ui f">大三---------------------------年级</p>
              <p class="ui f">软件工程-----------------------专业</p>
            </div>
            <div class="two wide column"></div>
            <div class="row"></div>
            <div class="row">

              <div class="teal five wide column">
                <div class="ui center aligned container">
                  <a class="ui item">
                    <i class="huge question circle outline icon"></i>
                  </a>
                </div>
              </div>
              <div class="one wide column"></div>
              <div class="teal four wide column">
                <div class="ui center aligned container">
                  <a class="ui item">
                    <i class="huge dollar icon"></i>
                  </a>
                </div>
              </div>
              <div class="one wide column"></div>
              <div class="teal five wide column">
                <div class="ui center aligned container">
                  <a class="ui item">
                    <i class="huge comment icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="ui column">
                <div class="ui center aligned container">
                  <a class="ui item">
                    <i class="huge sign out alternate icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
          </div>
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
  .semantic-component {
    background-color: #F2F6FC;
  }

  .ton {
    background-color: white;
  }

  .f {
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(102, 102, 255, 0.349019607843137);
    font-size: 1em;
  }

  #main1 {
    padding-top: 48px;
  }

</style>
