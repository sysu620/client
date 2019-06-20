import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
// import passwd from '@/pages/'
import App from '../App'
Vue.use(Router)

const passwd = r => require.ensure([], () => r(require('../pages/access/reset/passwd')), 'passwd')
const mainpage = r => require.ensure([], () => r(require('../pages/mainpage/mainpage')), 'mainpage')
const taskDetail = r => require.ensure([], () => r(require('../pages/mainpage/taskDetail')), 'taskDetail')
const person = r => require.ensure([], () => r(require('../pages/personal/Info/person')), 'person')
const modifyInfo = r => require.ensure([], () => r(require('../pages/personal/Info/modifyInfo')), 'modifyInfo')
const account = r => require.ensure([], () => r(require('../pages/personal/Info/account')), 'account')
const alipay = r => require.ensure([], () => r(require('../pages/personal/wallet/alipay')), 'alipay')
const withdrawProcess = r => require.ensure([], () => r(require('../pages/personal/wallet/withdrawProcess')), 'withdrawProcess')
const wallet = r => require.ensure([], () => r(require('../pages/personal/wallet/wallet')), 'wallet')
const withdraw = r => require.ensure([], () => r(require('../pages/personal/wallet/withdraw')), 'withdraw')
const help = r => require.ensure([], () => r(require('../pages/help/help')), 'withdraw')
const problem = r => require.ensure([], () => r(require('../pages/help/problem')), 'withdraw')
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
          path: '/mainpage/:task',
          component: taskDetail,
        },
        {
          path: '/passwd',
          component: passwd
        },
        {
          path: '/:person',
          component: person
        },
        {
          path: '/:person/info',
          component: account
        },
        {
          path: '/:person/info/modifyInfo',
          component: modifyInfo
        },
        {
          path: '/:person/wallet',
          component: wallet
        },
        {
          path: '/:person/wallet/alipay',
          component: alipay
        },
        {
          path: '/:person/wallet/withdrawProcess',
          component: withdrawProcess,

        },
        {
          path: '/:person/wallet/withdraw',
          component: withdraw
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