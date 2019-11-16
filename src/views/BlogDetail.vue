<template>
  <div class="blogDetail">
    <h1>{{ blogTitle }}</h1>
    <div v-html="blog_content">
    </div>
    <div class="date">
      <p>{{content_date}}</p>
    </div>

    <comment-and-thoughts :groupArea="blogTitle"></comment-and-thoughts>
  </div>
</template>
<script>
import axios from 'axios';
import CommentAndThoughts from '../components/CommentAndThoughts'
export default {
  name: "blogDetail",
  components: {
    CommentAndThoughts,
  },
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
      let response = await axios.get(`/blog/detail?title=${this.blogTitle}`);
      this.blog_content = response.data[0].content;
      this.blog_date = response.data[0].create_date;

      this.formateDate();
      this.catchIP();
    },
    formateDate() {
      let date = this.blog_date.split('T')[0].split('-');
      this.content_date = date[0] + '年' + date[1] + '月' + date[2] + '日';
    },
    catchIP() {

    }
  }
};
</script>
<style lang="less">
  div.blogDetail {
  }
  div.date {
    color: #666;
  }
</style>