import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import test from "@/components/test";
// import passwd from '@/pages/'
import App from "../App";
Vue.use(Router);

//login
const login = r => require.ensure([], () => r(require("../pages/login/login")), "login");
const register = r => require.ensure([], () => r(require("../pages/login/register")), "register");
const protocol = r => require.ensure([], () => r(require("../pages/login/protocol")), "protocol");

//activity
const pubQ = r => require.ensure([], () => r(require("../pages/activity/pubQuestion")), "pubQ");
const pubT = r => require.ensure([], () => r(require("../pages/activity/pubTask")), "pubT");

//help
const help = r => require.ensure([], () => r(require("../pages/help/help")), "help");
const problem = r => require.ensure([], () => r(require("../pages/help/problem")), "problem");
const advice = r => require.ensure([], () => r(require("../pages/help/advice")), "advice");
const about = r => require.ensure([], () => r(require("../pages/help/about")), "about");

//mainpage
const mainpagePub = r => require.ensure([], () => r(require("../pages/mainpage/mainpagePub")), "mainpagePub");
const mainpageTask = r => require.ensure([], () => r(require("../pages/mainpage/mainpageTask")), "mainpageTask");

//personal
const person = r => require.ensure([], () => r(require("../pages/personal/person")), "person");

//personal/comment
const comment = r => require.ensure([], () => r(require("../pages/personal/comment/comment")),"comment");

//personal/info
const changePW = r => require.ensure([], () => r(require("../pages/personal/info/changePW")), "changePW");
const manageAccount = r => require.ensure([], () => r(require("../pages/personal/info/manageAccount")), "manageAccount");
const modifyInfo = r => require.ensure([], () => r(require("../pages/personal/Info/modifyInfo")), "modifyInfo");

//personal/message
const message = r => require.ensure([], () => r(require("../pages/personal/message/message")),"message");

//personal/pub
const psPubQ = r => require.ensure([], () => r(require("../pages/personal/pub/question/myQuestionare")), "psPubQ");
const psPubT = r => require.ensure([], () => r(require("../pages/personal/pub/task/myTask")),"psPubT");

//personal/task
const psPub = r => require.ensure([], () => r(require("../pages/personal/task/mypublish")), "psPub");
const psTask = r => require.ensure([], () => r(require("../pages/personal/task/mytask")), "psTask");

//personal/wallet
const alipay = r => require.ensure([], () => r(require("../pages/personal/wallet/alipay")), "alipay");
const withdrawProcess = r => require.ensure([], () => r(require("../pages/personal/wallet/withdrawProcess")), "withdrawProcess");
const wallet = r => require.ensure([], () => r(require("../pages/personal/wallet/wallet")), "wallet");
const withdraw = r => require.ensure([], () => r(require("../pages/personal/wallet/withdraw")), "withdraw");

//task
const allTask = r => require.ensure([], () => r(require("../pages/task/allTask")), "allTask");
const taskDetail = r => require.ensure([], () => r(require("../pages/task/taskDetail")), "taskDetail");
const filterDelivery = r => require.ensure([], () => r(require("../pages/task/filterDelivery")), "filterDelivery");
const filterQuestion = r => require.ensure([], () => r(require("../pages/task/filterQuestion")), "filterQuestion");

export default new Router({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          redirect: "/login"
        },
        {
          path: "/login",
          component: login,
          name: 'login'
        },
        {
          path: "/register",
          component: register,
          name: "register"
        },
        {
          path: "/protocol",
          component: protocol
        },
        {
          path: "/activity/pubQ",
          component: pubQ
        },
        {
          path: "/activity/pubT",
          component: pubT
        },
        {
          path: "/help/help",
          component: help,
          name: 'help'
        },
        {
          path: "/help/problem",
          component: problem
        },
        {
          path: "/help/advice",
          component: advice
        },
        {
          path: "/help/about",
          component: about
        },
        {
          path: "/mainpage/:person/mainpagePub",
          component: mainpagePub,
          name: "mainpagePub"
        },
        {
          path: "/mainpage/:person/mainpageTask",
          component: mainpageTask,
          name: "mainpageTask"
        },
        {
          path: "/personal/:person",
          component: person,
          name: 'person'
        },
        {
          path: "/personal/:person/comment",
          component: comment,
          name: 'comment'
        },
        {
          path: "/personal/:person/info/changePW",
          component: changePW
        },
        {
          path: "/personal/:person/info/manageAccount",
          component: manageAccount
        },
        {
          path: "/personal/:person/info/modifyInfo",
          component: modifyInfo
        },
        {
          path: "/personal/:person/message/",
          component: message
        },
        {
          path: "/personal/:person/pub/psPubQ",
          component: psPubQ,
          name: "pspubQ"
        },
        {
          path: "/personal/:person/pub/psPubT",
          component: psPubT,
          name: "pspubT"
        },
        {
          path: "/personal/:person/task/psPub",
          component: psPub
        },
        {
          path: "/personal/:person/task/psTask",
          component: psTask
        },
        {
          path: "/personal/:person/wallet/alipay",
          component: alipay
        },
        {
          path: "/personal/:person/wallet/withdrawProcess",
          component: withdrawProcess
        },
        {
          path: "/personal/:person/wallet/wallet",
          component: wallet,
          name: 'wallet'
        },
        {
          path: "/personal/:person/wallet/withdraw",
          component: withdraw
        },
        {
          path: "/task/allTask",
          component: allTask,
          name: "allTask"
        },
        {
          path: "/task/taskDetail",
          component: taskDetail
        },
        {
          path: "/task/filterDelivery",
          component: filterDelivery,
          name: "filterDelivery"
        },
        {
          path: "/task/filterQuestion",
          component: filterQuestion,
          name: "filterQuestion"
        }
      ]
    }
  ]
});
