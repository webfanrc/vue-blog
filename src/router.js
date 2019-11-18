import Vue from "vue";
import Router from "vue-router";
import Blog from "./views/Blog";
import About from "./views/About";
import BlogDetail from "./views/BlogDetail";
import Statistic from "./views/Statistic";
import Archives from "./views/Archives"

Vue.use(Router);

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: "/",
      name: "Blog",
      component: Blog
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blogDetail",
      name: "blogDetail",
      component: BlogDetail
    },
    {
      path: "/Statistic",
      name: "Statistic",
      component: Statistic
    },
    {
      path: "/Archives",
      name: "Archives",
      component: Archives
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
