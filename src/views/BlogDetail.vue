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
      userIP: '',
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

      response = await axios.get('/blog/getUserIP');
      this.userIP = response.data.userIP;

      this.formateDate();
      this.ipAddress(this.blogTitle);
    },
    formateDate() {
      let date = this.blog_date.split('T')[0].split('-');
      this.content_date = date[0] + '年' + date[1] + '月' + date[2] + '日';
    },
    // 当前用户这天没有访问过这个页面，
    // 记录用户IP以及点击的博客名称（为main时为主页）
    async ipAddress(title) {
      let that = this;
      let response = await axios.get('/blog/ipFilter', {
        params: {
          user_ip: that.userIP,
          view_title: title,
        }
      });
      if (response.data == false) {
        await axios.get('/blog/ipAddress', {
          params: {
            user_ip: that.userIP,
            view_title: title,
          }
        });
      }
    },
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