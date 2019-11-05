import Vue from "vue";
import Router from "vue-router";
import Blog from "./views/Blog";
import About from "./views/About";
import Experience from "./views/Experience";
import BlogDetail from "./views/BlogDetail";

Vue.use(Router);

//TODO: 连接后面的#去掉
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
      path: "/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "/blogDetail",
      name: "blogDetail",
      component: BlogDetail
    }
  ]
});
