<template>
  <div class="fill-container">
    <div class="fill" v-if="!isError">
      <!--<router-link to="/" tag="span" class="back">&lt; 返回</router-link>-->
      <h2>{{qsList.task.taskTitle}}</h2>
      <div class="content">
        <div class="content-item" v-for="item in qsList.questionare">
          <p class="qs-title">
            {{item.num}}&nbsp;{{item.title}}&nbsp;{{getMsg(item)}}
          </p>
          <p v-for="option in item.options" class="option">
            <label>
              <input 
              type="radio" 
              :name="`${item.num}-${item.title}`"
              v-model="requiredItem[item.num]"
              v-if="item.type === 'radio'"
              :value="option">
              <input 
              type="checkbox" 
              :name="`${item.num}-${item.title}`"
              v-model="requiredItem[item.num]"
              v-if="item.type === 'checkbox'"
              :value="option">{{option}}
            </label>
          </p>
          <textarea 
          v-if="item.type === 'textarea'" 
          v-model="requiredItem[item.num]"></textarea>
        </div>
      </div>
      <transition name="fade">
        <div class="dialog" v-if="showDialog">
          <div class="submit-dialog" v-if="submitError">
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
            <div class="btn-box">
              <button class="yes" @click="showDialog = false">确定</button>
              <button @click="showDialog = false">取消</button>
            </div>
          </div>
          <div class="submit-dialog" v-else>
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
          </div>
        </div>
      </transition>  
      <footer>
        <button @click="submit" class="submit">{{buttonState}}</button>
      </footer>
    </div>
    <div class="error" v-else>
      404 Not Found
    </div>
  </div>
</template>

<script>
import { getQuestionare, acceptTask, finishAccept } from "../../service/getData";

import { getStore, setStore } from "../../config/mUtils";
/**
 * A module that define qs-fill router view
 * @exports qs-fill
 * @author oyh(Reusjs)
 */
  export default {
    name: 'qsFill',
    data() {
      return {
        buttonState: '',
        qsList: {
            task: {taskTitle: ""}
        },
        isError: false,
        showDialog: false,
        info: '',
        submitError: false,
        requiredItem: {}
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        if(this.$route.params.state == '0') {
          this.buttonState = '领取任务'
        } else if(this.$route.params.state == '1') {
          this.buttonState = '提交'
        }
        let header = { headers: { "Content-Type": "application/json" } };
        console.log("start request");
        let res = await getQuestionare({
            taskId: parseInt(this.$route.params.num),
            $config: header
        });
        console.log(res.data)
        this.qsList = res.data
        this.qsList.questionare.forEach( item => {
            item.options = item.options.split(',')
            if (item.isNeed) {
              if (item.type === 'checkbox') {
                this.requiredItem[item.num] = []
              } else {
                this.requiredItem[item.num] = ''
              }
            }
        } )
      },
      getMsg(item) {
        let msg = ''
        if (item.type === 'radio') {
          msg = '(单选题)'
        } else if (item.type === 'checkbox') {
          msg = '(多选题)'
        } else {
          msg = '(文本题)'
        }

        return item.isNeed ? `${msg} *` : msg
      },
      async submit() {
        if(this.$route.params.state == '0') {
          let header = { headers: { 
            "Content-Type": "application/json",
            "Authorization": getStore("token")} };
          console.log("start request");
          let taskId = {taskId: this.$route.params.num}
          let res = await acceptTask({
            body: taskId,
            $config: header
          });
          console.log(res.data)
          setTimeout(() => {
             this.$router.push({ name: "mainpagePub"})
            }, 1500)
        } else if(this.$route.params.state == '1') {
          let header = { headers: { 
            "Content-Type": "application/json",
            "Authorization": getStore("token")} };
          console.log("start request");
          let taskId = {taskId: this.$route.params.num}
          let res = await finishAccept({
            body: taskId,
            $config: header
          });
          console.log(res.data)
          setTimeout(() => {
             this.$router.push({ name: "mainpagePub"})
            }, 1500)
        }

        /*if (this.qsList.task.state === 'inissue') {
          let result = this.validate()
          if (result) {
            this.showDialog = true
            this.submitError = false
            this.info = '提交成功！'
            setTimeout(() => {
              this.showDialog = false
            }, 500)
            setTimeout(() => {
              this.$router.push({path: '/'})
            }, 1500)
          } else {
            this.showDialog = true
            this.submitError = true
            this.info = '提交失败！ 存在必填项未填'
          }
        } else {
          this.showDialog = true
          this.submitError = true
          this.info = '提交失败！ 只有发布中的问卷才能提交'
        }*/
      },
      validate() {
        for (let i in this.requiredItem) {
          if (this.requiredItem[i].length === 0) return false
        }
        return true
      }
    },
    //watch: {
    //  '$route': 'fetchData'
    //}
  }
</script>

<style lang="scss" scoped>
$orange: #ee7419;
$lightorange: #fcf0e5;
.fill-container {
  width: 100%;
  margin: 5rem auto;
  padding: 5rem;
  color: #666;
  background-color: #fff;
  border-radius: .4rem;
  box-shadow: 0 0 1rem #aaa;
  h2 {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2rem;
    color: #555;
  }
  .back {
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
      color: $orange;
    }
  }
  .content {
    padding: 3rem;
    border: {
      top: .2rem solid #ccc;
      bottom: .2rem solid #ccc;
    }
  }
  .content-item{
    padding: 1.5rem 2rem;
    &:hover {
      background-color: $lightorange;
    }
    > {
      p {
        margin: {
          top: 1.5rem;
          bottom: 1.5rem;
        }
      }
      textarea {
        width: 35rem;
        height: 15rem;
        margin-left: 2.5rem;
      }
    }
    .qs-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: #333;
    }
    .option {
      margin-left: 2.5rem;
    }
  }
  footer {
    height: 6rem;
    margin-top: 3rem;
    text-align: center;
    line-height: 6rem;
    .submit {
      width: 10rem;
      height: 3rem;
      padding: {
        top: .3rem;
        bottom: .3rem;
      }
      line-height: 100%;
      color: #fff;
      border: .1rem solid $orange;
      border-radius: .2rem;
      background-color: $orange;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 5px $orange;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(85, 85, 85, .7);
    .submit-dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 40rem;
      height: 20rem;
      transform: translateX(-50%) translateY(-50%);
      border-radius: .5rem;
      box-shadow: 0 0 5px #555;
      background-color: #fff;
    }
    header {
      height: 5rem;
      padding: {
        left: 3rem;
        right: 3rem;
      }
      line-height: 5rem;
      border-radius: .5rem;
      background-color: #f7f7f7;
      span:nth-of-type(1) {
        font-weight: 700;
      }
      .close-btn {
        position: absolute;
        right: 3rem;
        color: #bbb;
        cursor: pointer;
        &:hover {
          color: $orange;
        }
      }
    }
    .submit-dialog p {
      margin-top: 3rem;
      margin-left: 3rem;
    }
    .btn-box {
      button {
        width: 7rem;
        height: 2.5rem;
        padding: {
          top: .3rem;
          bottom: .3rem;
        }
        line-height: 100%;
        color: #777;
        border: 1px solid #555;
        border-radius: .2rem;
        background-color: #fff;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 5px #bbb;
        }
      }
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 6rem;
      text-align: center;
      line-height: 6rem;
      .yes {
        margin-right: 1rem;
        color: #fff;
        background-color: $orange;
        border: 1px solid $orange;
        &:hover {
          box-shadow: 0 0 5px $orange;
        }
      }
    }
  }
}
</style>