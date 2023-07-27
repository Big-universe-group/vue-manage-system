import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/",
      component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      meta: {title: "自述文件"},
      children: [
        {
          path: "/dashboard",
          component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
          meta: {title: "系统首页"},
        },
        {
          path: "/icon",
          component: () => import(/* webpackChunkName: "icon" */ "@/views/Icon.vue"),
          meta: {title: "自定义图标"},
        },
        {
          path: "/userinfos",
          component: () => import(/* webpackChunkName: "userinfos" */ "@/views/BaseTable.vue"),
          meta: {title: "用户列表"},
        },
        {
          path: "/messages",
          component: () => import(/* webpackChunkName: "messages" */ "@/views/Messages.vue"),
          meta: {title: "系统消息"},
        },
        {
          path: "/form",
          component: () => import(/* webpackChunkName: "form" */ "@/views/BaseForm.vue"),
          meta: {title: "基本表单"},
        },
        {
          path: "/goods",
          component: () => import(/* webpackChunkName: "form" */ "@/views/goods/GoodsLayout.vue"),
          meta: {title: "商品列表"},
        },
        {
          // 富文本编辑器组件
          path: "/editor",
          component: () => import(/* webpackChunkName: "editor" */ "@/views/VueEditor.vue"),
          meta: {title: "富文本编辑器"},
        },
        {
          // markdown组件
          path: "/markdown",
          component: () => import(/* webpackChunkName: "markdown" */ "@/views/Markdown.vue"),
          meta: {title: "markdown编辑器"},
        },
        {
          // 图片上传组件
          path: "/upload",
          component: () => import(/* webpackChunkName: "upload" */ "@/views/Upload.vue"),
          meta: {title: "文件上传"},
        },
        {
          // 工作流程列表-使用到拖拽技术
          path: "/task",
          component: () => import(/* webpackChunkName: "task" */ "@/views/TaskList.vue"),
          meta: {title: "工作流程"},
        },
        {
          // 国际化组件
          path: "/i18n",
          component: () => import(/* webpackChunkName: "i18n" */ "@/views/I18n.vue"),
          meta: {title: "国际化"},
        },
        {
          // 权限页面
          path: "/permission",
          component: () => import(/* webpackChunkName: "permission" */ "@/views/Permission.vue"),
          meta: {title: "权限测试", permission: true},
        },
        {
          path: "/404",
          component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
          meta: {title: "404"},
        },
        {
          path: "/403",
          component: () => import(/* webpackChunkName: "403" */ "@/views/403.vue"),
          meta: {title: "403"},
        },
        {
          path: "/donate",
          component: () => import(/* webpackChunkName: "donate" */ "@/views/Donate.vue"),
          meta: {title: "支持作者"},
        },
        {
          path: "/person",
          component: () => import(/* webpackChunkName: "person" */ "@/views/person/PersonCenter.vue"),
          meta: {title: "个人中心"},
        },
      ],
    },
    {
      path: "/auth", // 统一路由
      component: () => import("@/views/auth/AuthLayout.vue"), // 统一布局组件，包含登录、注册、重置密码页面的共同样式和结构
      children: [
        {
          path: "", // 子路由为空的时候自动跳转到/auth/login
          redirect: "login",
        },
        {
          path: "login", // 子路由
          component: () => import("@/views/auth/Login.vue"),
          meta: {title: "登录"},
        },
        {
          path: "register", // 子路由
          component: () => import("@/views/auth/Register.vue"),
          meta: {title: "注册"},
        },
        {
          path: "reset", // 子路由
          component: () => import("@/views/auth/Reset.vue"),
          meta: {title: "重置密码"},
        },
      ],
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
