# solojs
A simple SPA engine based on vue.js

## Get started

```bash
npm install vue-cli -g # if you haven't installed
vue init landray/solo-boilerplate my-project # my-project is your project name

cd my-project
npm install
npm run dev
```

## Dev build step

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production with minification & code splitting
npm run buildx

# build for production with minification & gzip
npm run build-gzip
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Page lifecycle
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


