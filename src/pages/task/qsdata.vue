<template>
  <div class="data-container">
    <template v-if="!isError">
      <h2>{{title}}</h2>
    </template>

    <div class="content" v-if="!isError">
      <template v-for="(item, index) in qsList.questionare">
        <div class="content-item">
          <div class="item-left">
            <p>Q{{item.num}} &nbsp; {{item.title}}</p>
            <p class="option" v-for="option in item.options">{{option}}</p>
          </div>
          <div class="item-right" v-if="item.type === 'radio'">
            <p>数据占比</p>
            <template v-for="(option, index) in item.options">
              <div class="progress-bar">
                <div class="bar-inner" :style="{width: renderProgressMath(item.options.length, index)}" v-if="renderProgressMath(item.options.length, index) !== '0%'"></div>
              </div>
              <span class="percent">{{renderProgressMath(item.options.length, index)}}</span>
            </template>
          </div>
          <div class="item-right" v-else>
            <p>数据占比</p>
            <div :id="`chart-${item.num}`">
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="error" v-if="isError">
      404 Not Found
    </div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import { getQuestionare, getAnswer } from "../../service/getData";
/**
 * A module that define qs-data router view
 * @exports qs-data
 * @author oyh(Reusjs)
 */
  export default {
    name: 'qsData',
    data() {
      return {
        title: '',
        qsList: {},
        isError: false,
        chartData: [],
        chartNum: [],
        answer: {}
      }
    },
    created() {
      //this.fetchData()
    },
    mounted() {
        this.fetchData()
    },
    methods: {
      async fetchData() {
        let header = { headers: { "Content-Type": "application/json" } };
        console.log("start request");
        let res = await getQuestionare({
            taskId: parseInt(this.$route.params.num),
            $config: header
        });
        console.log(res.data)
        this.qsList = res.data
        this.title = res.data.task.taskTitle
        this.qsList.questionare.forEach( item => {
            item.options = item.options.split(',')
        } )
        let res2 = await getAnswer({
            questionareId: parseInt(this.$route.params.num),
            $config: header
        });
        this.answer = res2.data
        this.answer.forEach( item => {
            item.answer = item.answer.split(',')
        } )
        console.log(this.answer)

        this.renderChartData()
        this.chartNum.forEach( (chartNum, index) => {
            this.renderEChart(chartNum, this.chartData[index])
      } )
      },
      renderProgressMath(length, index) {
        if (length < 2) return '100%'
        if (length >= 2) {
          if (index === 0) {
            return '85%'
          } else if (index === 1) {
            return '15%'
          } else {
            return '0%'
          }
        }
      },
      renderChartData() {  
        this.qsList.questionare.forEach( item => {
          if (item.type === 'checkbox') {
            let value  = 0
            let sum    = 0
            let data   = []
            let length = item.options.length

            this.chartNum.push(item.num);

            item.options.forEach( (optionName, index) => {
              if (index == length - 1) {
                value = 1000 - sum
              } else {
                value = Math.floor(Math.random() * (1001 - sum))
                sum += value
              }
              data.push({value: value, name: optionName})
            } )
            this.chartData.push(data)
          }
        } )
      },
      renderEChart(chartNum, chartData) {
        let myChart = echarts.init(document.getElementById(`chart-${chartNum}`))
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}选择人次 : {c} ({d}%)"
          },
          series: [
            {
              name: '数据占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: chartData
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
  
        let currentIndex = -1;
  
        setInterval(function () {
          var dataLen = option.series[0].data.length;
  
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
          });
          currentIndex = (currentIndex + 1) % dataLen;
  
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
          });
  
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
          });
        }, 1000);
  
        myChart.setOption(option)
      },
    },
  }
</script>

<style lang="scss" scoped>
$orange: #ee7419;
$lightorange: #fcf0e5;
.data-container {
  width: 100%;
  padding: 5rem;
  margin: 5rem auto;
  color: #666;
  background-color: #fff;
  border-radius: .4rem;
  box-shadow: 0 0 1rem #aaa;
  .back {
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
      color: $orange;
    }
  }
  > {
    h2 {
      margin-bottom: 1rem;
      text-align: center;
      font-size: 2rem;
      color: #555;
    }
    p {
      text-align: center;
    }
  }
  .content {
    padding: 3rem;
    margin-top: 2rem;
    border: {
      top: .2rem solid #aaa;
      bottom: .2rem solid #aaa;
    }
  }
  .content-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border: .2rem solid #aaa;
    p {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .item-left {
      width: 35rem;
      .option {
        margin-left: 3rem;
      }
    }
    .item-right {
      width: 35rem;
      .progress-bar {
        display: inline-block;
        width: 25rem;
        height: 1rem;
        margin-bottom: 1.5rem;
        border: 2px solid #aaa;
        cursor: pointer;
        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }
        &:hover .bar-inner {
          background-color: #ff9f50;
        }
        .bar-inner {
          height: 100%;
          background-color: $orange;
        }
      }
      .percent {
        margin-left: 1rem;
        vertical-align: top;
        font-size: 1.2rem;
      }
      div[id^="chart"] {
        width: 30rem;
        height: 18rem;
        margin: {
          top: -3rem;
          left: -5rem;
        }
      }
    }
  }
}
</style>