<template>
  <div class="blogDetail" v-if="finish">
    <h1 class="title">{{ blog_title }}</h1>

    <div class="control">
      <a @click="showTestArea = true" v-if="!showTestArea">Edit</a>
      <div v-if="showTestArea">
        <a @click="saveArticle">Save</a> |
        <a @click="dontSave">Cancel</a>
      </div>
    </div>

    <div class="containers" v-if="showTestArea == true">
      <label for="edit_title">Title: </label>
      <input v-model="blog_title" id="edit_title"></input>
      <br>
      <label for="edit_tag">Tag: </label>
      <input v-model="blog_tag" id="edit_tag"></input>
      <br>
      <textarea v-model="blog_content" class="blogContentEdit" id="edit_content"></textarea>
    </div>


    <div class="containers">
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
      blog_id: this.$route.query.id,
      blog_title: '',
      blog_tag: '',
      blog_content: '',
      blog_date: '',
      content_date: '',
      content_edit_date: '',
      userIP: '',

      finish: false,
      showTestArea: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let response = await axios.get(`/blog/detail?id=${this.blog_id}`);


      this.blog_title = response.data[0].title;
      this.blog_content = response.data[0].content;
      this.blog_tag = response.data[0].tag;
      this.blog_date = response.data[0].create_date;
      this.blog_edit_date = response.data[0].edit_date;


      this.formateDate();

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
    saveArticle() {
      let passport = prompt("Enter your passport");
      let that = this;
      axios.post('/blog/update', {
        passport: passport,
        id: that.blogId,
        blog_content: that.blog_content,
        blog_title: that.blog_title,
        blog_tag: that.blog_tag,
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
    label {
      display: inline-block;
      min-width: 50px;
    }
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