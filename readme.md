# Solojs

### Introduction

Solo 是一款基于 [Vue](http://cn.vuejs.org) 构建的移动 web 应用框架。它与 Vue 核心深入整合，使 Vue 构建体验接近于原生应用的单页应用程序变得轻而易举。Solojs 核心功能点包括：

- 应用路由映射应用页面
- 提供多种页面过渡动画，为页面切换时提供良好的过渡效果
- 内置 `debounce` , `throttle` , `formatTime 格式化时间` 等实用工具函数



### Quick Start

> 前提：已经安装 [Node.js](https://nodejs.org/en/) 4.x 版本及以上, npm 3.x 版本及以上

[点此下载应用模板](http://kk5.landray.com.cn:6789/solo#get-started)

应用模板中包含了 Solo 的基本代码, 及应用的基础目录结构页面代码.

应用模板解压后，执行以下命令：

``` Bash
cd app-boilerplate
npm install --registry=https://registry.npm.taobao.org
npm run dev
```

### NPM更新
从 `https://github.com/landray/Solo` clone 至 与本项目平级的文件夹 `solo-github` 中, 再依次执行下述操作

1. 编译
```sh
# 编译框架, 版本号会自动升级
yarn run build 
```
2. 提交代码更新
3. 更新github及npm, 操作前, 请确保有 github 及 npm 操作权限
```sh
# 给本代码库打tag, 更新GitHub, 并更新npm
./publish2npm.sh
```

### Documentation

更多有关 `Solo` 的文档和示例，请访问：[Solo 在线文档](http://kk5.landray.com.cn:6789/solo/index.html) 进行查看



### Changelog

详细的版本更新历史，请访问： [Solo Changelog](http://kk5.landray.com.cn:6789/solo/index.html) 进行查看
