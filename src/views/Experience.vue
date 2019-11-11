<template>
  <div class="main_about">
    <h2>Demo</h2>
    <ul>
      <li v-for="(demo, index) in demo_list" :key="index">
        <span class="name">{{demo.name}}</span>
        <span>:</span>
        <span class="description">{{demo.description}}</span>
        <span>(</span>
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
</template>
<script>
  export default {
    name: "blog",
    data: function() {
      return {
        demo_list: [
          {
            name: "个人博客",
            description: "简单的个人博客，前端用了Vue，后端用了Node.js，数据库为mysql，server为nginx，云服务器为Amazon Lightsail",
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
        demo_list_zh: [],
      };
    },
    methods: {
      routerToBlogPage(title) {
        this.$router.push({ path: "blogDetail", query: { title: title } });
      }
    }
  };
</script>
