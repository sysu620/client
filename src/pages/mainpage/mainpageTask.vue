<template>
  <div class="semantic-component">
    <div class="ui blue secondary inverted menu">
      <div class="right menu">
        <a class="ui item">
          <i class="large bell icon"></i>
        </a>
        <a class="ui item" @click="$router.go(-1)">
          <i class="large sign out alternate icon"></i>
        </a>
      </div>
    </div>
    <div id="main1" class="ui padded grid">
      <div class="one wide column"></div>
      <div class="six wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>公告</h3>
                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">挣闲钱1.0上线啦</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">挣闲钱1.0上线啦</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="ui grid">
                  <div class="row"></div>
                  <div class="row"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
            <div class="row"></div>
          </div>
        </div>
      </div>
      <div class="eight wide column">
        <div class="ui center aligned container">
          <div class="ui grid">
            <div class="fifteen wide column ton black_border">
              <div class="ui buttons">
                <router-link
                  :to="{ name:'mainpageTask', params: { person: person }}"
                  class="ui button positive"
                >我的任务</router-link>
                <router-link
                  :to="{ name:'mainpagePub', params: { person: person }}"
                  class="ui button"
                >我的发布</router-link>
              </div>
              <div class="ui center aligned container">
                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">我发布的快递1</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27 18:00</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="ui grid mline">
                  <div class="one wide column"></div>
                  <div class="seven wide column left aligned">我发布的问卷1</div>
                  <div class="seven wide column right aligned">发布时间：2019-4-27 18:00</div>
                  <div class="one wide column"></div>
                </div>
                <div class="ui divider"></div>

                <div class="row"></div>
                <div class="row"></div>
                <div class="row"></div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'pspubT', params: {person: person}}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
                  </div>
                  <div class="one wide column"></div>
                </div>
              </div>
            </div>

            <div class="one wide column"></div>
          </div>
        </div>
      </div>
      <div class="one wide column"></div>

      <div class="four wide column"></div>
      <div class="four wide column right aligned">
        <div class="ui category search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="输入你想查找的任务">
            <i class="search link icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
      <div class="four wide column left aligned">
        <router-link :to="{name: 'allTask'}" class="ui big blue button">查看任务列表</router-link>
      </div>
      <div class="four wide column"></div>
      <div class="row"></div>

      <div class="one wide column"></div>
      <div class="seven wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>填写问卷任务</h3>
                <div class="ui grid">
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>

                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>

                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的问卷1</h5>
                            <p>内容：挣闲钱意见</p>
                            <p>需求份数： 10/50</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                </div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'filterQuestion'}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
                  </div>
                  <div class="one wide column"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
          </div>
        </div>
      </div>

      <div class="seven wide column">
        <div class="ui center aligned container">
          <div class="ui grid top_0">
            <div class="one wide column"></div>
            <div class="fourteen wide column ton black_border">
              <div class="ui container">
                <h3>快递领取任务</h3>
                <div class="ui grid">
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>

                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>

                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截止日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>

                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                  <div class="four wide column">
                    <div class="ui center aligned container">
                      <div class="ui grid top_0">
                        <div class="one wide column"></div>
                        <div class="fourteen wide column ton black_border">
                          <div class="ui container">
                            <h5>别人的快递</h5>
                            <p>领取地点：慎思园6号</p>
                            <p>交付地点:：教学楼</p>
                            <p>截至日期：2019年5月26日</p>
                          </div>
                        </div>
                        <div class="one wide column"></div>
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                  <div class="one wide column"></div>
                </div>

                <div class="ui grid">
                  <div class="twelve wide column"></div>
                  <div class="three wide column left aligned">
                    <router-link
                      :to="{name: 'filterDelivery'}"
                      class="ui small blue button"
                      style="width:120px;"
                    >查看全部</router-link>
                  </div>
                  <div class="one wide column"></div>
                </div>
              </div>
            </div>
            <div class="one wide column"></div>
          </div>
        </div>
      </div>

      <div class="one wide column"></div>

      <div class="row"></div>
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
import { async } from "q";

export default {
  data() {
    return {
      searchText: "",
      person: "123"
    };
  },

  methods: {}
};
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
