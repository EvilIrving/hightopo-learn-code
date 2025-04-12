# Vue 3 社交卡片项目

一个基于 Vue 3 和 TypeScript 构建的现代化社交卡片展示项目，支持多种社交媒体平台卡片样式。

## 项目特点

- 🎨 多种社交媒体卡片样式 (微博、音乐、播客、网站等)
- 🚀 基于 Vue 3 + Vite 的现代化前端架构
- 📱 响应式设计，适配多种设备
- 🎭 使用 JSX 语法编写组件
- 🌈 动态主题支持

## 技术栈

### 核心框架

- [Vue 3](https://vuejs.org/) - 前端框架
- [Vite](https://vitejs.dev/) - 构建工具

### UI & 动画

- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Lottie](https://airbnb.design/lottie/) - 动画渲染 (v5.12.2)
- [clsx](https://github.com/lukeed/clsx) - 动态 class 组合

### 工具库

- [Day.js](https://day.js.org/) - 日期处理
- [@pureadmin/utils](https://github.com/pure-admin/utils) - 实用工具集

## 项目结构

.
├── public/                 # 静态资源目录
│   ├── favicon.ico        # 网站图标
│   └── index.html         # 主 HTML 文件
│
├── src/                   # 源代码目录
│   ├── api/              # API 接口管理
│   │   ├── modules/      # 按模块划分的接口文件
│   │   │   ├── user.ts   # 用户相关接口
│   │   │   └── product.ts # 产品相关接口
│   │   └── request.ts    # axios 请求封装
│   │
│   ├── assets/           # 静态资源
│   │   ├── images/       # 图片资源
│   │   ├── styles/       # 样式文件
│   │   │   ├── variables.scss  # 全局变量
│   │   │   └── global.scss     # 全局样式
│   │   └── fonts/        # 字体文件
│   │
│   ├── components/       # 全局公共组件
│   │   ├── common/       # 基础公共组件
│   │   │   ├── Button/
│   │   │   └── Input/
│   │   └── business/     # 业务公共组件
│   │       ├── Header/
│   │       └── Footer/
│   │
│   ├── composables/      # 组合式函数
│   │   ├── useUser.ts
│   │   └── useTheme.ts
│   │
│   ├── constants/        # 常量定义
│   │   ├── api.ts       # API 相关常量
│   │   └── enum.ts      # 枚举值
│   │
│   ├── directives/       # 全局指令
│   │   ├── permission.ts
│   │   └── index.ts
│   │
│   ├── hooks/           # 钩子函数
│   │   ├── usePermission.ts
│   │   └── useCache.ts
│   │
│   ├── layouts/         # 布局组件
│   │   ├── DefaultLayout.vue
│   │   └── UserLayout.vue
│   │
│   ├── router/          # 路由配置
│   │   ├── modules/     # 路由模块
│   │   ├── guards.ts    # 路由守卫
│   │   └── index.ts     # 路由主文件
│   │
│   ├── stores/          # Pinia 状态管理
│   │   ├── modules/     # 状态模块
│   │   │   ├── user.ts
│   │   │   └── app.ts
│   │   └── index.ts
│   │
│   ├── types/           # TypeScript 类型定义
│   │   ├── api.ts       # API 相关类型
│   │   └── global.d.ts  # 全局类型声明
│   │
│   ├── utils/           # 工具函数
│   │   ├── auth.ts      # 认证相关
│   │   ├── request.ts   # 请求相关
│   │   └── storage.ts   # 存储相关
│   │
│   ├── views/           # 页面组件
│   │   ├── home/        # 按模块划分页面
│   │   ├── user/
│   │   └── error/
│   │
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── env.d.ts         # 环境变量类型声明
│
├── .env                  # 环境变量
├── .env.development      # 开发环境变量
├── .env.production       # 生产环境变量
├── .eslintrc.js         # ESLint 配置
├── .prettierrc          # Prettier 配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── package.json         # 项目配置文件

## Card 说明

卡片类型:

- Twitter
- Instagram
- Github
- Product Hunt
- Youtube
- Buy Me a Coffee
- Image & Video
- Text

- Map,位置
- 小红书
- 微信
- 微博
- 网易云
- 即刻
- 小宇宙

寻找logo:

<https://svglogo.top/>
<https://simpleicons.org/>
<https://www.radix-ui.com/icons>
