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
      component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
      meta: { title: "自述文件" },
      children: [
        {
          path: "/dashboard",
          component: () => import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue"),
          meta: { title: "系统首页" },
        },
        {
          path: "/icon",
          component: () => import(/* webpackChunkName: "icon" */ "@/pages/Icon.vue"),
          meta: { title: "自定义图标" },
        },
        {
          path: "/userinfos",
          component: () => import(/* webpackChunkName: "userinfos" */ "@/pages/BaseTable.vue"),
          meta: { title: "用户列表" },
        },
        {
          path: "/messages",
          component: () => import(/* webpackChunkName: "messages" */ "@/pages/Messages.vue"),
          meta: { title: "系统消息" },
        },
        {
          path: "/form",
          component: () => import(/* webpackChunkName: "form" */ "@/pages/BaseForm.vue"),
          meta: { title: "基本表单" },
        },
        {
          // 富文本编辑器组件
          path: "/editor",
          component: () => import(/* webpackChunkName: "editor" */ "@/pages/VueEditor.vue"),
          meta: { title: "富文本编辑器" },
        },
        {
          // markdown组件
          path: "/markdown",
          component: () => import(/* webpackChunkName: "markdown" */ "@/pages/Markdown.vue"),
          meta: { title: "markdown编辑器" },
        },
        {
          // 图片上传组件
          path: "/upload",
          component: () => import(/* webpackChunkName: "upload" */ "@/pages/Upload.vue"),
          meta: { title: "文件上传" },
        },
        {
          // 拖拽列表组件
          path: "/drag",
          component: () => import(/* webpackChunkName: "drag" */ "@/pages/DragList.vue"),
          meta: { title: "拖拽列表" },
        },
        {
          // 拖拽Dialog组件
          path: "/dialog",
          component: () => import(/* webpackChunkName: "dragdialog" */ "@/pages/DragDialog.vue"),
          meta: { title: "拖拽弹框" },
        },
        {
          // 国际化组件
          path: "/i18n",
          component: () => import(/* webpackChunkName: "i18n" */ "@/pages/I18n.vue"),
          meta: { title: "国际化" },
        },
        {
          // 权限页面
          path: "/permission",
          component: () => import(/* webpackChunkName: "permission" */ "@/pages/Permission.vue"),
          meta: { title: "权限测试", permission: true },
        },
        {
          path: "/404",
          component: () => import(/* webpackChunkName: "404" */ "@/pages/404.vue"),
          meta: { title: "404" },
        },
        {
          path: "/403",
          component: () => import(/* webpackChunkName: "403" */ "@/pages/403.vue"),
          meta: { title: "403" },
        },
        {
          path: "/donate",
          component: () => import(/* webpackChunkName: "donate" */ "@/pages/Donate.vue"),
          meta: { title: "支持作者" },
        },
        {
          path: "/person",
          component: () => import(/* webpackChunkName: "person" */ "@/pages/person/PersonCenter.vue"),
          meta: { title: "个人中心" },
        },
      ],
    },
    {
      path: "/login",
      component: () => import(/* webpackChunkName: "login" */ "@/pages/auth/Login.vue"),
      meta: { title: "登录" },
    },
    {
      path: "/register",
      component: () => import(/* webpackChunkName: "register" */ "@/pages/auth/Register.vue"),
      meta: { title: "注册" },
    },
    {
      path: "/reset",
      component: () => import(/* webpackChunkName: "reset" */ "@/pages/auth/Reset.vue"),
      meta: { title: "重置密码" },
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
