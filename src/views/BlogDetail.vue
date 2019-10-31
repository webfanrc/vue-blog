<template>
  <div class="blogDetail">
    <h1>{{ blogTitle }}</h1>
    <div v-html="blog_detail">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "blogDetail",
  data: function() {
    return {
      blogTitle: this.$route.query.title,
      blog_detail: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      console.log(1);
      let response = await axios.get(`http://localhost:8888/blog_detail?title=${this.blogTitle}`);
      console.log(response.data);
      this.blog_detail = response.data[0].content;
    },
  }
};
</script>
<style lang="less">
  div.blogDetail {
    padding-bottom: 80px;
  }
</style>