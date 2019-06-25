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
              <br>
              <div class="ui center aligned container">
                <a class="ui item">
                  <i class="large edit icon"></i>
                </a>
              </div>
            </div>
            <div class="seven wide column right aligned">
              <p class="ui f">{{studentId + '-----------------------学号'}}</p>
              <p class="ui f">{{name + '-------------------------姓名'}}</p>
              <p class="ui f">{{age + '---------------------------年龄'}}</p>
              <p class="ui f">{{sex + '-----------------------------性别'}}</p>
              <p class="ui f">{{grade + '---------------------------年级'}}</p>
              <p class="ui f">{{major + '-----------------------专业'}}</p>
            </div>
            <div class="two wide column"></div>
            <div class="row"></div>
            <div class="row">
              <div class="teal five wide column">
                <div class="ui center aligned container">
                  <router-link :to="{name: 'wallet'}" class="ui item">
                    <i class="huge question circle outline icon"></i>
                  </router-link>
                </div>
              </div>
              <div class="one wide column"></div>
              <div class="teal four wide column">
                <div class="ui center aligned container">
                  <router-link :to="{name: 'help'}" class="ui item">
                    <i class="huge dollar icon"></i>
                  </router-link>
                </div>
              </div>
              <div class="one wide column"></div>
              <div class="teal five wide column">
                <div class="ui center aligned container">
                  <router-link :to="{name: 'comment', params: {person: person}}" class="ui item">
                    <i class="huge comment icon"></i>
                  </router-link>
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
  data () {
    return {
      studentId: 'hbx',
      name: 'hbx123',
      age: 12,
      sex: 'man',
      grade : 12,
      major: 'computer science',
      person: 123
    }
  }
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

#main1 {
  padding-top: 48px;
}
</style>
