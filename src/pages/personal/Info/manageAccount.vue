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
    <div class="ui padded grid">
      <div class="three wide column"></div>
      <div class="ten wide column ton">
        <br />
        <br />
        <div class="ui container">
          <div class="ui divided selection list">
            <a class="item">
              <div class="ui teal horizontal label">账号</div>
              Kumquats
            </a>
            <a class="item">
              <div class="ui teal horizontal label">手机号</div>
              Ice Cream
            </a>
            <a class="item">
              <div class="ui teal horizontal label">支付宝账号</div>
              Orange
            </a>
          </div>
        </div>
        <br />
        <br />
        <div class="ui center aligned  container">
          <div class="ui buttons">
            <button class="ui button">修改登录密码</button>
            <div class="or"></div>
            <button class="ui positive button">修改支付密码</button>
          </div>
        </div>
        <br />
        <br />
        <div class="ui center aligned  container">
          <button class="ui centered aligned  teal button">返回</button>
        </div>


      </div>
      <div class="three wide column"></div>

    </div>

  </div>
</template>


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
    font-size: 19px;
  }

</style>
