<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
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
                <div class="ui blue six item menu">
                  <a class="item"></a>
                  <a class="active item">1</a>
                  <a class="item">2</a>
                  <a class="disabled item">...</a>
                  <a class="item">7</a>
                  <a class="item">></a>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>

     

            <div class="one wide column"></div>
            <div class="fourteen wide column">
              <div class="ui center aligned container black_border">
                <div class="ui red padded grid">
                  <div class="one wide column"></div>
                  <div class="three wide column">
                    <div class="ui container">
                      <div class="ui grid">
                        <div class="row"></div>
                        <img class="ui small image" src="../../../assets/log.jpg">
                      </div>
                    </div>
                  </div>
                  <div class="nine wide column left aligned">
                    <div class="ui grid">
                      <div class="sixteen wide column">别人的快递1</div>

                      <div class="four wide column">快递领取进度</div>
                      <div class="ten wide column">
                        <div class="ui progress">
                          <div class="bar">
                            <div class="progress"></div>
                          </div>
                        </div>
                      </div>
                      <div class="two wide column">0/1</div>

                      <div class="sixteen wide column">任务截止时间: 2019-4-27 18:00</div>
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

            <div class="one wide column"></div>
            <div class="fourteen wide column">
              <div class="ui center aligned container black_border">
                <div class="ui red padded grid">
                  <div class="row"></div>
                  <div class="row"></div>
                  <div class="row"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>

            <div class="sixteen wide column"></div>
            <div class="one wide column"></div>
          </div>
        </div>
      </div>
      <div class="three wide column"></div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { getStore } from '../../../config/mUtils';
export default {
  data () {
    return {
      person: getStore('userId'),

    }
  }
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
