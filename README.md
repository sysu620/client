# makemoney

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 前言
由于课程要求，本次我们团队做了一个“挣闲钱“平台，主要是为了给在校大学生提供一个能够获得额外收入的方式。具体来说它的实现背景是这样的：
![前言](https://img-blog.csdnimg.cn/20190627184139624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)

我们实现的业务包括登录、注册、用户信息修改，任务发布接取，问卷发布填写等。内置任务管理系统，问卷填写系统，交易管理系统，账户管理系统。由于涉及到任务的处理以及金钱的管理，所以对逻辑严谨度要求高，页面之间交互复杂。
这种功能性的项目很实用但是往往也很枯燥，没有音乐播放器那么看起来绚丽。但我们尽量让我们的UI看起来美观舒适。
此项目大大小小共 29 个页面，涉及注册、登录、任务展示、个人任务接取进度、获取任务等等，是一个完整的流程。
另外，此项目还没正式投入使用，只是个人练习使用，与支付宝等没有真正等关系。

## 技术栈
前端部分：vue2 + vuex + vue-router + webpack + ES6/7 + semanticUI
后端部分：由队友完成，此处不做记录，详情查看github

## 项目地址
[挣闲钱完整项目](https://github.com/sysu620/)

[挣闲钱前端](https://github.com/sysu620/client)

## 项目运行
注意：由于涉及部分的 ES6/7 等新属性，node 需要 6.0 以上版本

```sh
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 接口数据
[接口数据](https://github.com/sysu620/API-doc)


## 说明
> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
> 或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
> 开发环境 macOS Majave10.14.5 Chrome 75  nodejs 10.15.03

## 目标功能
- [x] 用户登陆
- [x] 用户注册
- [x] 用户资料修改
- [x] 所有任务显示
- [x] 任务详情显示
- [x] 接取的任务显示
- [x] 接取快递任务
- [x] 接取问卷任务
- [x] 取消快递任务
- [x] 取消问卷任务
- [x] 发布问卷
- [x] 发布快递
- [x] 问卷系统
- [x] 个人页面显示
- [x] 帮助页面显示
- [x] 用户消息记录
- [x] 用户任务进度显示
- [x] 用户评价
- [ ] 用户提现
- [ ] 短信验证

## 总结
1. 开发过程实际上并无使用许多vuex功能，由于vuex主要用于页面中组件的消息传递，数据存储在内存当中，每次刷新页面就会消失，而本项目中绝大多数都是单页面组件，对于数据存储等主要采用local storage。但vue因其轻量级的框架在中小型项目中表现亮眼，在大型单页面应用中因为vuex的存在，表现依然出色，在处理复杂交互逻辑的时候，vuex的存在是不可或缺的。所以说利用 vue + vuex 完全可以去做大型的单页面项目。
2. 环境配置过程中，gulp必须使用`3.9`版本，否则无法进行与semantic 适配
3. 感谢[@RalphWithoutMissFun](https://github.com/RalphWithoutMissFun) ，[@Skywalker](https://github.com/skywalker00001)提供semantic页面编写； 感谢[@GostBop](https://github.com/GostBop)提供后端开发支持；感谢两位PM妹子[@9ayhub](https://github.com/9ayhub)， [@NikkariAoe](https://github.com/NikkariAoe)编写大量文档与控制项目进度

## 部分截图
### 登陆
![登陆页面](https://img-blog.csdnimg.cn/20190627204136913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)

### 主页
![主页](https://img-blog.csdnimg.cn/20190627204312697.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)
### 接取的任务
![个人任务](https://img-blog.csdnimg.cn/20190627204327627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)

### 全部任务
![全部任务](https://img-blog.csdnimg.cn/20190627204426503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)

### 问卷填写
![问卷](https://img-blog.csdnimg.cn/20190627204345165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)
### 问卷统计
![题目统计](https://img-blog.csdnimg.cn/20190627204401851.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)
### 制作问卷

![发布问卷](https://img-blog.csdnimg.cn/20190627204441692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h1YW5nYnhfdHg=,size_16,color_FFFFFF,t_70)


## 项目布局
```sh
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── deliverypage                        // 显示一页待接取快递任务
│   │   ├── questionpage                        // 显示一页待接取问卷任务
│   │   ├── pubitem                             // 单个任务
│   │   ├── deliverytaskitem                    // 单个快递任务
│   │   ├── questiontaskitem                    // 单个问卷任务
│   │   ├── task-item                           // 显示用户接取的单个任务
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── mUtils.js                           // 常用的js方法
│   ├── assets                                  // 公共图片
│   ├── pages
│   │   ├── activity
│   │   │   ├── pubQuestion                     // 发布问卷
│   │   │   ├── pubTask                         // 发布任务
│   │   ├── help
│   │   │   ├── about                           // 关于
│   │   │   ├── advice                          // 建议
│   │   │   ├── help                            // 帮助
│   │   │   ├── problem                         // 问题
│   │   ├── login
│   │   │   ├── login                           // 登陆
│   │   │   ├── protocol                        // 用户协议
│   │   │   ├── register                        // 当前城市页
│   │   ├── mainpage
│   │   │   ├── mainpagePub                     // 包含我的发布的主页
│   │   │   ├── mainpageTask                    // 包含我的任务的主页
│   │   ├── personal
│   │   │   ├── comment                         // 评论
│   │   │   ├── info
│   │   │   │   ├── changePW                    // 修改密码
│   │   │   │   ├── manageAccount               // 管理账户页面
│   │   │   │   ├── modifyInfo                  // 修改个人信息
│   │   │   ├── message
│   │   │   │   ├── message                     // 个人消息
│   │   │   ├── pub
│   │   │   │   ├── question
│   │   │   │   │    ├── myQuestionare          // 我发布的问卷
│   │   │   │   ├── task
│   │   │   │   │    ├── myTask                 // 我发布的快递
│   │   │   ├── task
│   │   │   │   ├── mypublish                   // 我发布的任务
│   │   │   │   ├── mytask                      // 我接取的任务
│   │   │   ├── wallet
│   │   │   │   ├── alipay                      // 连接到支付宝
│   │   │   │   ├── wallet                      // 我的钱包
│   │   │   │   ├── withdraw                    // 提现
│   │   │   │   ├── withdrawProcess             // 提现进程
│   │   │   ├── person                          // 个人页
│   │   ├── task
│   │   │   ├── alltask                         // 所有任务
│   │   │   ├── calendar-input                  // 时间
│   │   │   ├── filterDelivery                  // 所有任务中的快递任务
│   │   │   ├── filterQuestion                  // 所有任务中的问卷任务
│   │   │   ├── qsedit                          // 编写问卷
│   │   │   ├── qsfill                          // 展示问卷
│   │   │   ├── taskDetail                      // 任务详细信息
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
.

```