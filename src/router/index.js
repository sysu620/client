import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
// import passwd from '@/pages/'
import App from '../App'
Vue.use(Router)

const passwd = r => require.ensure([], () => r(require('../pages/access/reset/passwd')), 'passwd')
const mainpage = r => require.ensure([], () => r(require('../pages/mainpage/mainpage')), 'mainpage')
//const taskDetail = r => require.ensure([], () => r(require('../pages/mainpage/taskDetail')), 'taskDetail')



export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: mainpage
        },
        {
          path: 'passwd',
          component: passwd
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