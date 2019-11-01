<template>
  <div class="blogDetail">
    <h1>{{ blogTitle }}</h1>
    <div v-html="blog_content">
    </div>
    <div class="date">
      <p>{{content_date}}</p>
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
      blog_content: '',
      blog_date: '',
      content_date: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let response = await axios.get(`http://localhost:8888/blog_detail?title=${this.blogTitle}`);
      this.blog_content = response.data[0].content;
      this.blog_date = response.data[0].create_date;

      this.formateDate();
    },
    formateDate() {
      let date = this.blog_date.split('T')[0].split('-');
      this.content_date = date[0] + '年' + date[1] + '月' + date[2] + '日';
    }
  }
};
</script>
<style lang="less">
  div.blogDetail {
    padding-bottom: 80px;
  }
  div.date {
    color: #666;
  }
</style>