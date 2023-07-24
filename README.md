### 安装

1. 基础环境

- node: node16
- python: python3.11

```sh
npm i
```

### 代码说明

1. 目录结构

```sh
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
|   |   router.js  // 所有路由
│   │
│   |____assets    // css、image、svg等资源
|   |____components    // 用于存放可复用的组件
|   |____pages     // 用于存放路由页面组件，每个文件对应一个路由页面
|   |____plugins   // 自己或第三方插件
|   |   | directives.js  // 所有Vue指令
|   |   | filters.js  // 所有Vue过滤
|   |
|   |____api    // 接口层
|   |____store     // vuex数据
|   |____utils     // 工具层
|
└───public         // 公用文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
│   vue.config.js  // vue-cli3主配置
│   babel.config.js// babel配置
│   .eslintrc.js   // eslint配置
│   .prettierrc.js // perttier配置
│   package.json   // npm配置
│   README.md      // 项目说明
```

2. 别名配置

首先, 在 vue.config.js 中增加 alias 配置, 具体见文件中配置.

另外, 正常的 Vue Component 导入直接使用`@`即可, 但是对于 assets 中的资源导入, 需要使用`~@`来完成.
