<template>
  <div class="main_about">
    <h2>Demo</h2>
    <ul>
      <li v-for="(demo, index) in demo_list" :key="index">
        <span class="name">{{demo.name}}</span>
        :
        <span class="description">{{demo.description}}</span>
        (
        <a :href="demo.source_code" class="source_code ">source code</a>
        ;
        <a :href="demo.online_link" class="online_link">online link</a>
        )
      </li>
    </ul>
    <h2>Experience</h2>
    <ul>
      <li>
        Front-end web Development (In Bitmain.com, 2017.4 - 2018.12)
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
            name: "Restaurant List",
            description:
              "A crud website using Flask, sql, HTML templates ann OAuth.",
            source_code: "https://github.com/RuoChen95/simple-flask-web-server",
            online_link: "http://xieruochen.me/"
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
        ]
      };
    },
    methods: {
      routerToBlogPage(title) {
        this.$router.push({ path: "blogDetail", query: { title: title } });
      }
    }
  };
</script>
