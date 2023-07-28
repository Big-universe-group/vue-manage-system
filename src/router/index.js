import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue");
const Icon = () => import(/* webpackChunkName: "icon" */ "@/views/Icon.vue");
const UserInfos = () => import(/* webpackChunkName: "userinfos" */ "@/views/person/PersonInfos");
const PersonCenter = () => import(/* webpackChunkName: "person" */ "@/views/person/PersonCenter.vue");
const Messages = () => import(/* webpackChunkName: "messages" */ "@/views/Messages.vue");
const BaseForm = () => import(/* webpackChunkName: "form" */ "@/views/BaseForm.vue");
const Goods = () => import(/* webpackChunkName: "form" */ "@/views/goods/GoodsLayout.vue");
const VueEditor = () => import(/* webpackChunkName: "editor" */ "@/views/VueEditor.vue");
const MarkDown = () => import(/* webpackChunkName: "markdown" */ "@/views/Markdown.vue");
const Upload = () => import(/* webpackChunkName: "upload" */ "@/views/Upload.vue");
const Task = () => import(/* webpackChunkName: "task" */ "@/views/TaskList.vue");
const I18n = () => import(/* webpackChunkName: "i18n" */ "@/views/I18n.vue");
const Permission = () => import(/* webpackChunkName: "permission" */ "@/views/Permission.vue");
const NotFound = () => import(/* webpackChunkName: "404" */ "@/views/404.vue");
const Forbidden = () => import(/* webpackChunkName: "403" */ "@/views/403.vue");
const Donate = () => import(/* webpackChunkName: "donate" */ "@/views/Donate.vue");

const AuthLayout = () => import("@/views/auth/AuthLayout.vue");
const AuthLogin = () => import("@/views/auth/Login.vue");
const AuthRegister = () => import("@/views/auth/Register.vue");
const AuthReset = () => import("@/views/auth/Reset.vue");

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/dashboard" },
    {
      path: "/",
      component: Home,
      meta: { title: "自述文件" },
      children: [
        { path: "/dashboard", component: Dashboard, meta: { title: "系统首页" } },
        { path: "/icon", component: Icon, meta: { title: "自定义图标" } },
        { path: "/userinfos", component: UserInfos, meta: { title: "用户列表" } },
        { path: "/person", component: PersonCenter, meta: { title: "个人中心" } },
        { path: "/messages", component: Messages, meta: { title: "系统消息" } },
        { path: "/form", component: BaseForm, meta: { title: "基本表单" } },
        { path: "/goods", component: Goods, meta: { title: "商品列表" } },
        { path: "/editor", component: VueEditor, meta: { title: "富文本编辑器" } },
        { path: "/markdown", component: MarkDown, meta: { title: "arkdown编辑器" } },
        { path: "/upload", component: Upload, meta: { title: "文件上传" } },
        { path: "/task", component: Task, meta: { title: "工作流程" } },
        { path: "/i18n", component: I18n, meta: { title: "国际化" } },
        { path: "/permission", component: Permission, meta: { title: "权限测试", permission: true } },
        { path: "/404", component: NotFound, meta: { title: "404" } },
        { path: "/403", component: Forbidden, meta: { title: "403" } },
        { path: "/donate", component: Donate, meta: { title: "支持作者" } },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        { path: "", redirect: "login" },
        { path: "login", component: AuthLogin, meta: { title: "登录" } },
        { path: "register", component: AuthRegister, meta: { title: "注册" } },
        { path: "reset", component: AuthReset, meta: { title: "重置密码" } },
      ],
    },
    { path: "*", redirect: "/404" },
  ],
});
