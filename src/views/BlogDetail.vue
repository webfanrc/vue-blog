<template>
  <div class="blogDetail" v-if="finish">
    <h1 class="title">{{ blogTitle }}</h1>

    <div class="control">
      <a @click="showTestArea = true" v-if="!showTestArea">Edit</a>
      <div v-if="showTestArea">
        <a @click="saveArticle">Save</a> |
        <a @click="dontSave">Cancel</a>
      </div>
    </div>

    <div class="containers">
      <textarea v-model="blog_content" v-if="showTestArea == true" class="blogContentEdit"></textarea>
      <div v-html="marked(blog_content)" class="blogContentShow" ref="blogContentShow"></div>
    </div>

    <div class="date">
      <p>{{content_date}}</p>
      <p v-if="content_edit_date != ''">Edit on: {{content_edit_date}}</p>
    </div>

  </div>
</template>
<script>
import axios from 'axios';
import marked from 'marked'; // md -> html
export default {
  name: "blogDetail",
  components: {
  },
  data: function() {
    return {
      blogTitle: this.$route.query.title,
      blog_content: '',
      blog_date: '',
      content_date: '',
      content_edit_date: '',
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
      this.blog_edit_date = response.data[0].edit_date;
      this.blogId = response.data[0].id;

      // response = await axios.get('/blog/getUserIP');
      // this.userIP = response.data.userIP;

      this.formateDate();
      // this.ipAddress(this.blogTitle);

      this.finish = true;
    },
    marked(string) {
      return marked(string)
    },
    formateDate() {
      let date = this.blog_date.split('T')[0].split('-');
      this.content_date = date[0] + '年' + date[1] + '月' + date[2] + '日';

      if (this.blog_edit_date != null) {
        date = this.blog_edit_date.split('T')[0].split('-');
        this.content_edit_date = date[0] + '年' + date[1] + '月' + date[2] + '日';
      }
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
      let passport = prompt("Enter your passport");
      let that = this;
      axios.post('/blog/update', {
        passport: passport,
        id: that.blogId,
        blog_content: that.blog_content,
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error)
        });
      that.showTestArea = false;
    },
    dontSave() {
      this.showTestArea = false;
      this.init();
    }

  }
};
</script>
<style lang="less" scoped>
  h1.title,
  div.date {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  div.date {
    color: #666;
  }

  div.control {
    max-width: 720px;
    margin: 0 auto;
  }
  div.containers {
    max-width: 720px;
    margin: 0 auto;
    .blogContentEdit {
      width: 100%;
      height: 400px;
      font-size: 16px;

      border: 1px solid #ccc;
      padding: 0.6em;
      border-radius: 3px;

    }
    .blogContentShow {
      max-width: 720px;
    }
  }
</style>