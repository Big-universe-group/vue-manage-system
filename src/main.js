import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import VueI18n from "vue-i18n";
import {messages} from "./components/common/i18n";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "./assets/css/icon.css";
import "./components/common/directives";
import "babel-polyfill";

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
  size: "small",
});
const i18n = new VueI18n({
  locale: "zh",
  messages,
});

/*
 * 功能: 使用钩子函数对路由进行权限跳转
 * 具体: 在每次路由切换前会执行该函数, 用于实现:
 *    a. 设置页面标题
 *    b. 检查用户角色是否存在，若不存在则重定向到登录页
 *    c. 根据角色和权限配置进行路由访问控制
 *    d. 在不兼容的浏览器上对特定路由进行提示
 * 参数说明:
 *    to:
 *      {
 *        fullPath: "/tabs",
 *        path: "/tabs",
 *        matched: [],
 *        meta: {title: "tab选项卡"},   // 见router/index.js中的定义, meta实际上是默认项, 不设置为{}
 *        name: undefined,
 *        params: {},
 *        query: {},
 *      }
 *    from: 类似上面, 表示原始的路由地址
 *    next: 一个回调函数
 */
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | vue-manage-system`;

  const role = localStorage.getItem("ms_username");
  if (!role && to.path !== "/login") {
    next("/login");
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === "admin" ? next() : next("/403");
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf("MSIE") > -1 && to.path === "/editor") {
      Vue.prototype.$alert(
        "vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看",
        "浏览器不兼容通知",
        {
          confirmButtonText: "确定",
        },
      );
    } else {
      next();
    }
  }
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
