# Pkg Master <img src="https://img.shields.io/badge/pkg--master-集成创建和发布的NPM模块管理工具-66f.svg">

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/pkg-master)
[![version](https://img.shields.io/badge/version-0.0.4-f66.svg)](https://github.com/JowayYoung/pkg-master)
[![node](https://img.shields.io/badge/node-%3E%3D%2010.0.0-3c9.svg)](https://github.com/JowayYoung/pkg-master)
[![npm](https://img.shields.io/badge/npm-%3E%3D%205.6.0-3c9.svg)](https://github.com/JowayYoung/pkg-master)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/pkg-master)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/pkg-master)
[![coverage](https://img.shields.io/badge/coverage-100%25-09f.svg)](https://github.com/JowayYoung/pkg-master)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/pkg-master)

> `pkg-master`是一个集成创建和发布的NPM模块管理工具

### 安装

`npm i -g pkg-master`

> 安装失败

- 切换**NPM镜像**为淘宝镜像：`npm config set registry https://registry.npm.taobao.org/`
- 重新执行安装命令：`npm i -g pkg-master`

### 使用

命令|缩写|功能|描述
-|-|-|-
`pkg-master create`|`pkg-master c`|创建模块|生成模块的`基础文件`
`pkg-master publish`|`pkg-master p`|发布模块|检测NPM的`运行环境`和`账号状态`，通过则自动发布模块

- 推荐使用缩写命令

> 步骤

- 执行`pkg-master c`创建模块，使用交互式问答生成模块的基础文件
- 执行`cd yourPackage`进入创建的模块，开发你的模块功能
- 执行`pkg-master p`发布模块，若执行步骤出错，请根据提示修复再执行`pkg-master p`

![发布模块](https://yangzw.vip/static/article/pkg-master/pkg-master.gif)

### 版权

MIT © [Joway Young](https://github.com/JowayYoung)

### 后记

若觉得`pkg-master`对你有帮助，可在[Issue](https://github.com/JowayYoung/pkg-master/issues)上`提出你的宝贵建议`，笔者会认真阅读并整合你的建议。喜欢`pkg-master`的请给一个[Star](https://github.com/JowayYoung/pkg-master)，或[Fork](https://github.com/JowayYoung/pkg-master)本项目到自己的`Github`上，根据自身需求定制功能。

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![](https://static.yangzw.vip/frontend/account/IQ前端公众号.jpg)
