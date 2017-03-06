# solojs
A simple SPA engine based on vue


## Install
```sh
npm install solojs --save
```

## Get started
```js
import Vue from 'vue'
import Solo from 'solojs'
import 'solojs/solo.css'
import VueResource from 'vue-resource'
import Pages from './pages/pages'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueResource)
Vue.use(Solo)
Solo.start({
  pages: Pages,
  enterPage: 'home'
})
```

## Dev build step

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Improvement
1. iOS 下，设置了`-weblit-overflow-scrolling:touch;`的元素，即使它的上面存在着蒙层。当手指在蒙层上移动时，仍然会触发该元素的滚动
2. 新增一个可配置的`list-item`组件
3. 在iOS的safari浏览器下，后退按钮失效
4. vux的toast插件isShowMask失效不起作用

## 使用vue-echarts
1. import vue-echarts 到入口文件
2. 按需加载echarts的组件
3. 注册vue-echarts为全局组件
4. 在组件使用 `chart` 标签并同时组定options
5. 懂得如何配置 `echarts` 和 使用 `vue-echarts` 的一些方法

## Ideas

1. 利用slot的作用域插槽去实现某些功能



## Tasks

- [x] Header,Footer 组件的封装

header 的几个功能点

1. ​

## 技术参考
- [vue router](https://github.com/vuejs/vue-router)
- [vue2-filters](https://github.com/freearhey/vue2-filters)
- [mint-ui](https://github.com/elemefe/mint-ui/)
- [Solo](./#)

## 页面生命周期
1. beforeCreate 页面创建之前，观察对象，初始化事件之前
2. created 页面已创建，还未挂载到页面，$el 不可访问
3. beforeMount 挂载到页面之前
4. mounted 挂载之后
5. activated 页面被激活
6. beforeUpdate 数据更新时，dom 变化前
7. updated dom 更新后
8. deactivated 页面被隐藏
9. beforeDestroy 页面被销毁之前
10. destroyed 页面被销毁后


