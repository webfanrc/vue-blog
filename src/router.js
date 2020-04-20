import Vue from "vue";
import Router from "vue-router";

const Blog = () => import('./views/Blog');
const About = () => import('./views/About');
const BlogDetail = () => import('./views/BlogDetail');
const Statistic = () => import('./views/Statistic');
const Archives = () => import('./views/Archives');
const BlogEdit = ()=> import('./views/BlogEdit');
const BlogNew = ()=> import('./views/BlogNew');

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
    },
    {
      path: "/BlogEdit",
      name: "BlogEdit",
      component: BlogEdit
    },
    {
      path: "/BlogNew",
      name: "BlogNew",
      component: BlogNew
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
