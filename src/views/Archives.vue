<template>
  <div class="archives" ref="archives">
    <h1>
      Archives
    </h1>
    <p>这个页面是我手动把一些文章做的一个归档。</p>

    <h2>工作</h2>
    <ul>
      <li><a href="/blogDetail?title=工作期回顾">工作期回顾</a></li>
      <li><a href="/blogDetail?title=工作回顾以及未来打算">工作回顾以及未来打算</a></li>
      <li><a>OKR页面构造实践以及工作回顾</a></li>
      <li><a>Liferay实践回顾</a></li>
      <li><a>一个公司需要什么样的人才</a></li>
    </ul>
    <h2>语言</h2>
    <ul>
      <li><a>托福回顾</a></li>
    </ul>

    <h2>服务端</h2>
    <ul>
      <li><a>博客搭建回顾</a></li>
      <li><a>服务端编程基础(Node)</a></li>
      <li><a href="/blogDetail?title=网络编程基础">网络编程基础</a></li>
    </ul>
    <h2>客户端</h2>
    <ul>
      <li><a href="/blogDetail?title=Array.map，forEach，filter以及reduce">Array.map，forEach，filter以及reduce</a></li>
      <li><a href="/blogDetail?title=步进器组件的构建回顾">步进器组件的构建回顾</a></li>
      <li><a href="/blogDetail?title=关于MVVM模型的反思">关于MVVM模型的反思</a></li>
      <li><a href="/blogDetail?title=eslint%20%2B%20prettier%20%2B%20lint-staged代码校验配置方式回顾">eslint + prettier + lint-staged代码校验配置方式回顾</a></li>
      <li><a href="/blogDetail?title=我是如何构建博客的">我是如何构建博客的</a></li>
      <li><a>前端频控实践</a></li>
      <li><a>The Basic of Font-end Web Development</a></li>
    </ul>
    <h2>Github</h2>
    <ul>
      <li><a href="/blogDetail?title=Git%20rebase">Git rebase</a></li>
    </ul>
    <h2>读书</h2>
    <ul>
      <li><a>The Picture of DorianGray</a></li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "archives",
    data: function() {
      return {
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$refs.archives.childNodes.forEach(function(n) {
          if (n.nodeName == "UL") {
            n.childNodes.forEach(function(n) {
              n.childNodes.forEach(function(n) {
                n.href= "/blogDetail?title=" + n.innerHTML;
              })
            })
          }
        })
      },
    }
  };
</script>
<style lang="less">
  ul {
    margin: 15px 0;
    padding-left: 30px;
    li {
      line-height: 24px;
    }
  }
</style>