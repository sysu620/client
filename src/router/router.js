import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
// import passwd from '@/pages/'
import App from '../App'
Vue.use(Router)

const passwd = r => require.ensure([], () => r(require('../pages/access/reset/passwd')), 'passwd')
const mainpage = r => require.ensure([], () => r(require('../pages/mainpage/mainpage')), 'mainpage')
const taskDetail = r => require.ensure([], () => r(require('../pages/task/taskDetail')), 'taskDetail')
const person = r => require.ensure([], () => r(require('../pages/personal/Info/person')), 'person')
const modifyInfo = r => require.ensure([], () => r(require('../pages/personal/Info/modifyInfo')), 'modifyInfo')
const account = r => require.ensure([], () => r(require('../pages/personal/Info/account')), 'account')
const alipay = r => require.ensure([], () => r(require('../pages/personal/wallet/alipay')), 'alipay')
const withdrawProcess = r => require.ensure([], () => r(require('../pages/personal/wallet/withdrawProcess')), 'withdrawProcess')
const wallet = r => require.ensure([], () => r(require('../pages/personal/wallet/wallet')), 'wallet')
const withdraw = r => require.ensure([], () => r(require('../pages/personal/wallet/withdraw')), 'withdraw')
const help = r => require.ensure([], () => r(require('../pages/help/help')), 'help')
const problem = r => require.ensure([], () => r(require('../pages/help/problem')), 'problem')
const advice = r => require.ensure([], () => r(require('../pages/help/advice')), 'advice')
const about = r => require.ensure([], () => r(require('../pages/help/about')), 'about')






export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/mainpage'
        },
        {
          path: '/mainpage',
          component: mainpage
        },
        {
          path: '/task/:task',
          component: taskDetail,
        },
        {
          path: '/passwd',
          component: passwd
        },
        {
          path: '/personal/:person',
          component: person
        },
        {
          path: '/personal/:person/info',
          component: account
        },
        {
          path: '/personal/:person/info/modifyInfo',
          component: modifyInfo
        },
        {
          path: '/personal/:person/wallet',
          component: wallet
        },
        {
          path: '/personal/:person/wallet/alipay',
          component: alipay
        },
        {
          path: '/personal/:person/wallet/withdrawProcess',
          component: withdrawProcess,

        },
        {
          path: '/personal/:person/wallet/withdraw',
          component: withdraw
        },
        {
          path: '/help',
          component: help
        },
        {
          path: '/help/about',
          component: about
        },
        {
          path: '/help/advice',
          component: advice
        },
        {
          path: '/help/problem',
          component:problem
        }
      ]
    }
  ]
})

// export default [{
//   path: '/',
//   component: App,
//   children: [
//     {
//       path: '',
//       redirect: '/home'
//     },
//     {
//       path: '/home',
//       component: HelloWorld
//     }
//   ]
// }]