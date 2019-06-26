<template>
  <div class="edit-container">
    <h2 @click="titleClick" v-if="!titleChange">{{qsItem.title}}</h2>
    <input type="text" name="qsTitle" v-if="titleChange"
    v-model="titleValue"
    @blur="onblur"
    @keyup.enter="onsubmit"
    ref="titleInput">
    <div class="content">
      <div class="questions" v-for="(qs, index) in qsList.questionare">
        <div class="qs-left" >
          <p class="qs-title">
            {{qs.num}}&nbsp;{{qs.title}}&nbsp;{{getMsg(qs)}}
          </p>
          <p v-for="option in qs.options" class="option">
            <label>
              <input 
              type="radio" 
              :name="`${qs.num}-${qs.title}`"
              v-if="qs.type === 'radio'">
              <input 
              type="checkbox" 
              :name="`${qs.num}-${qs.title}`"
              v-if="qs.type === 'checkbox'">{{option}}
            </label>
          </p>
          <textarea 
          v-if="qs.type === 'textarea'"></textarea>
        </div>
        <div class="qs-right">
          <label><input type="checkbox" :value="qs.isNeed" v-model="qs.isNeed">
          此题是否必填</label>
          <p>
            <span @click="del(index)">删除</span>
          </p>
        </div>
      </div>
      <div class="add">
        <transition name="slide">
          <div class="add-option" v-if="showBtn">
            <button @click="addRadio">单选</button>
            <button @click="addCheckbox">多选</button>
          </div>
        </transition>
        <div class="add-item" @click="addItemClick">
          <span class="add-icon" >+</span><span>添加问题</span>
        </div>
      </div>
    </div>
    <div class="shadow" v-if="showAddQsDialog">
      <div class="add-qs-dialog">
        <header>
          <span>提示</span>
          <span class="close-btn" @click="showAddQsDialog = false">X</span>
        </header>
        <p>{{info}}</p>
        <label>输入题目标题<input type="text" v-model="qsInputTitle"></label>
        <label>输入选项<input type="text" v-model="qsInputOptions"></label>
        <div class="btn-box">
          <button class="yes" @click="validateAddQs">确定</button>
          <button @click="showAddQsDialog = false">取消</button>
        </div>
      </div>
    </div>
    <div class="shadow" v-if="showDialog">
      <div class="dialog">
        <header>
          <span>提示</span>
          <span class="close-btn" @click="cancel">X</span>
        </header>
        <p>{{info}}</p>
        <div class="btn-box">
          <button class="yes" @click="iterator.next()">确定</button>
          <button @click="cancel">取消</button>
        </div>
      </div>
    </div>
    <footer>
      <span>问卷截止日期</span>
      <calendar-input 
      :showCalendar="false" 
      :limit="limit" 
      @getValue="getValue">
      </calendar-input>
      <div class="btn-box">
        <button class="issue" @click="iterator = issueQs(); iterator.next()">发布问卷</button>
      </div>
    </footer>
  </div>
</template>

<script>
import { publishQTask } from "../../service/getData";
import calendarInput from './calendar-input'
import { getStore, setStore } from "../../config/mUtils";
/**
 * A module that define qs-edit view
 * @exports qs-edit
 * @author oyh(Reusjs)
 */
export default {
  name: 'qsEdit',
  components: {
    calendarInput,
  },
  data() {
    return {
      qsItem: {},
      qsList: {
        task:{
          taskType:"questionare",
          taskTitle: "问卷系统"
        },
        questionare:[]
      },
      isError: false,
      showBtn: false,
      titleChange: false,
      titleValue: '',
      showAddQsDialog: false,
      qsInputTitle: '',
      qsInputOptions: [],
      info: '',
      selectTime: '',
      addOptionType: '',
      limit: {},
      showDialog: false,
      iterator: {},
      isGoIndex: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.limit = { 
          minYear: new Date().getFullYear(),
          minMonth: new Date().getMonth() + 1,
          minDay: new Date().getDate(),
          maxYear: 2030,
          maxMonth: 3,
          maxDay: 20
        }
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
    onblur() {
      this.titleValue = this.titleValue.trim()
      this.qsItem.title = this.titleValue === '' ? this.qsItem.title : this.titleValue
      this.titleChange = false
    },
    onsubmit() {
      this.titleValue = this.titleValue.trim()
      this.qsItem.title = this.titleValue === '' ? this.qsItem.title : this.titleValue
      this.titleChange = false
    },
    titleClick() {
      this.titleChange = !this.titleChange
      setTimeout( () => {
        this.$refs.titleInput.focus()
      }, 150 )
    },
    del(index) {
      this.qsList.questionare.splice(index, 1)
    },
    addItemClick() {
      console.log(this.showBtn)
      if (this.showBtn === false) {
        this.questionLength === 10 ? alert('问卷已满！') : this.showBtn = !this.showBtn
      } else {
        this.showBtn = !this.showBtn
      }
    },
    showAddDialog(msg) {
      this.showAddQsDialog = true
      this.info = msg
      this.qsInputTitle = ''
      this.qsInputOptions = ''
    },
    addRadio() {
      if (this.questionLength === 10) return alert('问卷已满！')
      this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开')
      this.addOptionType = 'radio'
    },
    addCheckbox() {
      if (this.questionLength === 10) return alert('问卷已满！')
      this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开')
      this.addOptionType = 'checkbox'
    },
    validateAddQs() {
      let qsTitle = this.qsInputTitle.trim()
      if (qsTitle === '') return alert('题目不能为空')
      let qsOptions = this.qsInputOptions.trim()
      if (qsOptions === '') return alert('选项不能为空！')
      let qsOption = qsOptions.split(',')
      for (let i = 0, length = qsOption.length; i < length; i++) {
        if (qsOption[i].trim() === '') {
          return alert('存在某个选项内容为空')
        }
      }
      this.qsList.questionare.push({
        'title': qsTitle, 
        'type': this.addOptionType,
        'isNeed': true,
        'options':qsOptions
      })
      
      this.showAddQsDialog = false
      console.log(this.qsList.questionare)
    },
    getValue(selectTime) {
      this.selectTime = selectTime
      this.qsList.task.endTime = this.selectTime
    },
    async *issueQs() {
      this.showDialog = true
      this.info = '确认发布?'
      yield
      if (this.qsList.questionare.length === 0) {
        this.showDialog = false
        alert('问卷为空无法保存')
      } else {
        for (let i = 0, length = this.qsList.questionare.length; i < length; i++) {
          console.log("hhh")
          if (this.qsList.questionare[i].isNeed) {
            this.qsList.questionare[i].isNeed = "true"
          } else {
            this.qsList.questionare[i].isNeed = "false"
          }
        }
        //console.log(this.qsList.questionare)
        this.showDialog = false
        let header = { headers: { 
            "Content-Type": "application/json",
            "Authorization": getStore("token")} };
        let res = await publishQTask({ body: this.qsList, $config: header });
        console.log(res.data)
      }
      
    },
    cancel() {
      this.showDialog = false
      if (this.isGoIndex === true) {
        this.$router.push({path:'/'})
      }
    }
  },
  computed: {
    questionLength() {
      return this.qsList.questionare.length
    }
  },
  /*watch: {
    '$route': 'fetchData',
    qsItem: {
      handler(newVal) {
        newVal.question.forEach( (item, index) => {
          item.num = `Q${index + 1}`
        } )
      },
      deep: true
    }
  }*/
}
</script>

<style  scoped lang="scss">
$orange: #ee7419;
$lightorange: #fcf0e5;
.edit-container {
  width: 100%;
  margin: 5rem auto;
  padding: 5rem;
  color: #666;
  background-color: #fff;
  border-radius: .4rem;
  box-shadow: 0 0 1rem #aaa;
  h2 {
    height: 6rem;
    margin-bottom: 3rem;
    line-height: 6rem;
    text-align: center;
    font-size: 2rem;
    color: #555;
    cursor: pointer;
    &:hover {
      background-color: $lightorange;
    }
  }
  input[name="qsTitle"] {
    height: 6rem;
    width: 100%;
    margin-bottom: 3rem;
    font-size: 2rem;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #ccc;
  }
  .content {
    padding: 3rem;
    border: {
      top: .2rem solid #ccc;
      bottom: .2rem solid #ccc;
    }
  }
  .questions {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    &:hover {
      background-color: $lightorange;
    }
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
    .qs-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: #333;
    }
    .option {
      margin-left: 2.5rem;
    }
    .qs-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 20rem;
      label {
        margin: {
          top: 2rem;
          bottom: 2rem;
        }
      }
      p {
        bottom: 1rem;
        span {
          cursor: pointer;
          &:hover {
            color: $orange;
          }
        }
      }
    }
  }
  .add {
    border: .2rem solid #ccc;
  }
  .add-option {
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    button {
      height: 3rem;
      width: 8rem;
      margin-left: 4rem;
      border: .2rem solid #ccc;
      background-color: #eee;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 .4rem #aaa;
      }
    }
  }
  .add-item {
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
    > span {
      font-size: 1.6rem;
    }
  }
  footer {
    position: relative;
    height: 6rem;
    margin-top: 3rem;
    line-height: 6rem;
    .btn-box {
      position: absolute;
      right: 2rem;
      display: inline-block;
    }
    .save,
    .issue {
      width: 10rem;
      height: 3rem;
      padding: {
        top: .3rem;
        bottom: .3rem;
      }
      line-height: 100%;
      color: #777;
      border: .1rem solid #aaa;
      border-radius: .2rem;
      background-color: #fff;
      cursor: pointer;
    }
    .save:hover {
      box-shadow: 0 0 .5rem #aaa;
    }
    .issue {
      margin-left: 4rem;
      color: #fff;
      border: .1rem solid $orange;
      background-color: $orange;
      &:hover {
        box-shadow: 0 0 .5rem $orange;
      }
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter-active {
    height: 8rem;
  }
  .slide-enter, .slide-leave-active {
    opacity: 0;
    height: 0;
    transform: translateY(-3rem);
  }
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
  .shadow {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(85, 85, 85, .7);
    .add-qs-dialog, .dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 40rem;
      height: 28rem;
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
    .add-qs-dialog p,
    .dialog p {
      margin: 3rem 0 2rem 3rem;
    }
    label {
      display: block;
      margin-left: 3rem;
      margin-bottom: 2rem;
      &:nth-of-type(2) {
        margin-left: 5.7rem;
      }
      input {
        margin-left: 1rem;
      }
    }
    .btn-box {
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