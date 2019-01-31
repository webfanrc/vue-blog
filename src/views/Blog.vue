<template>
  <div class="blog">
    <div v-for="(blog, index) in blogList" class="blogTag" :key="index">
      <p class="h1" @click="routerToBlogPage(blog.title)">{{ blog.title }}</p>
      <p class="h2">{{ blog.description }}</p>
      <p class="readMore" @click="routerToBlogPage(blog.title)">Read More</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data: function() {
    return {
      blogList: [
        {
          title: "工作内容回顾",
          description:
            "在之前的文章中提到了我最近的回顾，侧重点在于每天的工作内容。其实，从入职到突然离职这整个快两年的工作周期内，我经历了如下的事情："
        },
        {
          title: "网络编程基础",
          description:
            "在上一篇文章中，提到了一句话：Node.js将简单的脚本语言（JS）和Unix网络编程结合在了一起[1]。那什么是Unix网络编程？什么是Unix编程？什么是Unix？"
        },
        {
          title: "服务端编程基础(Node)",
          description:
            "二年又一个月之前，我从这篇翻译开始，进入了网页开发领域。当初我写下这篇翻译开始，万万没有想到我当初一时的兴趣会引导我进入现在的生活。"
        }
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
<style lang="less">
div.blogTag {
  min-height: 100px;

  padding: 36px 0;

  border-bottom: 1px solid #eee;
  p.h1 {
    font-size: 30px;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
  p.h2 {
    font-size: 18px;
    margin: 15px 0 0 0;
  }
  p.readMore {
    display: inline-block;
    font-size: 15px;
    margin: 15px 0 0 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
}
</style>
