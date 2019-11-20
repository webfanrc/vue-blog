<template>
  <div class="blogDetail" v-if="finish">
    <h1>{{ blogTitle }}</h1>

    <div v-if="showTestArea">
      <a @click="saveArticle">Save</a> |
      <a @click="dontSave">Cancel</a>
    </div>


    <div class="magic-area">
      <textarea v-model="blog_content" v-if="showTestArea == true"></textarea>
      <div v-html="marked(blog_content)"></div>
    </div>

    <div class="date">
      <p>{{content_date}}</p>
      <a @click="showTestArea = true">Edit</a>
    </div>

    <comment-and-thoughts :groupArea="blogTitle"></comment-and-thoughts>
  </div>
</template>
<script>
import axios from 'axios';
import CommentAndThoughts from '../components/CommentAndThoughts'
import marked from 'marked';
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
      blogId: '',

      finish: false,
      showTestArea: false,
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
      this.blogId = response.data[0].id;

      response = await axios.get('/blog/getUserIP');
      this.userIP = response.data.userIP;

      this.formateDate();
      this.ipAddress(this.blogTitle);

      this.finish = true;
    },
    marked(string) {
      return marked(string)
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
    saveArticle() {
      let that = this;
      axios.post('/blog/updateBlogContent', {
        id: that.blogId,
        blog_content: that.blog_content,
      }, function(response) {
      })

      that.showTestArea = false;
    },
    dontSave() {
      this.showTestArea = false;
    }

  }
};
</script>
<style lang="less">
  div.blogDetail {
    padding: 0 40px;
  }
  h1,
  div.date {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  div.date {
    color: #666;
  }
  div.magic-area {
    display: flex;
    justify-content: space-around;
    textarea {
      width: 47%;
      font-size: 16px;

      border: 2px solid darkgray;
      border-radius: 3px;

    }
    div {
      width: 720px;
    }
  }
</style>