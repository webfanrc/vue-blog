<template>
  <div class="blog">
    <div v-for="(blog, index) in blogList" class="blogTag" :key="index">
      <p class="h1" @click="routerToBlogPage(blog.title)">{{ blog.title }}</p>
      <p class="h2" v-html="blog.blog_brief"></p>
      <p class="readMore" @click="routerToBlogPage(blog.title)">Read More</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "blog",
  data: function() {
    return {
      blogList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let response = await axios.get('/blog');
      this.blogList = response.data;
      this.blogList.forEach(function(ele) {
        ele.blog_brief = ele.content.split('</p>')[0];
      });
    },
    routerToBlogPage(title) {
      this.$router.push({ path: "blogDetail", query: { title: title } });
    }
  }
};
</script>
<style lang="less">
div.blog {
  padding-bottom: 80px;
}
div.blogTag {
  min-height: 100px;

  padding: 36px 0;

  border-bottom: 1px solid #eee;
  p.h1 {
    display: inline-block;
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
