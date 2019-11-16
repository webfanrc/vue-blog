<template>
  <div class="about">
    <h1>About</h1>
    <div>
      <p>
        这个网站是自己搭建的一个博客，代码开源，详见Demo，主要记录中级算法以及网页应用编程的一些内容，包括工作中的一些问题，尽量一周1-2篇。网页的统计数据可以在Statistic中看到。文章的分类以及更新情况可以在Archive中看到。博客的样式，功能，安全，部署上的一些问题会在之后进行迭代。
      </p>
      <p class="design">
        博客在设计之初参照了jekelly模版文件，后来迭代过程中参考了WorldPress的Colorlib样式以及功能（比较通用）。具体技术上怎么搭建的参见我最近的博客。
      </p>
      <p class="contact">
        想要联系我也可以给我发邮件：xrc_1995@163.com
      </p>
    </div>
    <div class="main_about">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <h2>Demo</h2>
        <div class="control">
          <a @click="demo_list_default = demo_list_en">En</a>&nbsp;|&nbsp;
          <a @click="demo_list_default = demo_list_cn">Zh</a>

        </div>
      </div>
      <ul>
        <li v-for="(demo, index) in demo_list_default" :key="index">
          <span class="name">{{demo.name}}</span>
          <span>:&nbsp;</span>
          <span class="description">{{demo.description}}</span>
          <span>&nbsp;(</span>
          <a :href="demo.source_code" class="source_code " v-if="typeof demo.source_code == 'string'" target="_blank">
            source code
          </a>
          <span class="source_code " v-if="typeof demo.source_code == 'object'">
          <a v-for="(link, index) in demo.source_code" :key="index" :href="link" target="_blank">
            source code {{index + 1}}<span v-if="index < demo.source_code.length - 1">;&nbsp</span>
          </a>
        </span>
          <a :href="demo.online_link" class="online_link" v-if="demo.online_link != ''" target="_blank">
            ; online link
          </a>
          <span>)</span>
        </li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>
          Front-end web Development (In Bitmain.com, 4/2017 - 1/2019)
        </li>
      </ul>
    </div>

    <comment-and-thoughts :groupArea="'About'"></comment-and-thoughts>
  </div>
</template>
<script>
  import CommentAndThoughts from '../components/CommentAndThoughts'
  export default {
    name: 'About',
    components: {
      CommentAndThoughts,
    },
    data: function() {
      return {
        demo_list_en: [
          {
            name: "Personal Blog",
            description: "using Vue.js and Node.js, build on Amazon Lightsail, main functions are leaving message and IP statics, have mobile page.",
            source_code: ["https://github.com/RuoChen95/vue-blog", "https://github.com/RuoChen95/node-blog"],
            online_link: "http://xieruochen.info"
          },
          {
            name: "Restaurant List",
            description:
              "A crud website using Flask, sql, HTML templates ann OAuth.",
            source_code: "https://github.com/RuoChen95/simple-flask-web-server",
            online_link: ""
          },
          {
            name: "Todo App",
            description:
              "A todo list app using Vue.js and Vue CLI 3.0.",
            source_code: "https://github.com/RuoChen95/vue-todo-app",
            online_link: "https://ruochen95.github.io/projects/todoApp"
          },
          {
            name: "Vue Components",
            description:
              "Vue.js components, including stepper and img lazyloader.",
            source_code: "https://github.com/RuoChen95/Learn-Vue-2/tree/master/btm-demo-pkg",
            online_link: "https://ruochen95.github.io/projects/vueComponents"
          },
        ],
        demo_list_cn: [
          {
            name: "个人博客",
            description: "前端用了Vue，后端用了Node.js，数据库为mysql，server为Nginx，云服务器为Amazon Lightsail，主要功能有留言、IP统计，适配手机端。",
            source_code: ["https://github.com/RuoChen95/vue-blog", "https://github.com/RuoChen95/node-blog"],
            online_link: "http://xieruochen.info"
          },
          {
            name: "Restaurant List",
            description:
              "crud接口的网站应用，用Python搭建（Flask + HTML Template），实现了OAuth登录功能。",
            source_code: "https://github.com/RuoChen95/simple-flask-web-server",
            online_link: ""
          },
          {
            name: "Todo App",
            description:
              "使用Vue.js写的简单的代办事项应用。",
            source_code: "https://github.com/RuoChen95/vue-todo-app",
            online_link: "https://ruochen95.github.io/projects/todoApp"
          },
          {
            name: "Vue Components",
            description:
              "Vue.js的步进器以及懒加载组件。",
            source_code: "https://github.com/RuoChen95/Learn-Vue-2/tree/master/btm-demo-pkg",
            online_link: "https://ruochen95.github.io/projects/vueComponents"
          },
        ],
        demo_list_default: [],
      }
    },
    mounted() {
      this.demo_list_default = this.demo_list_en;
    },
    methods: {
    }
  }
</script>
<style lang="less">
  div.about {
    margin-bottom: 15px;
  }
</style>

