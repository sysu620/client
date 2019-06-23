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
        <div class="ui center aligned container">
          <i class="circular centered huge teal dollar icon"></i>
        </div>
        <div class="ui left aligned container">
          <div class="ui bulleted list f">
            <div class="item f">目前拥有闲钱币3000个</div>
            <div class="item f">1个闲钱币=0.01元人民币</div>
            <div class="item f">点击[提现] ，提现到支付宝</div>
            <div class="item f">点击[提现进程] ，查看提现进程</div>
          </div>
        </div>
        <div class="ui right aligned container">
          <div class="ui buttons">
            <button class="ui large button">提现</button>
            <div class="or"></div>
            <button class="ui positive large button">提现进程</button>
          </div>
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
