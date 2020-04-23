<template>
  <div class="blogEdit" v-if="finish">
    <p>
      <label for="title">Title: </label>
      <input v-model="blogData.title" id="title"></input>
    </p>

    <p>
      <label for="tag">Tag: </label>
      <input v-model="blogData.tag" id="tag"></input>
    </p>

    <textarea v-model="blogData.content" class="blogContentEdit"></textarea>

    <button @click="saveArticle">Save</button>
    <button @click="deleteArticle">Delete</button>
  </div>
</template>

<script>
  import service from '../utils/http';
  import marked from 'marked'; // md -> html
  export default {
    data: function() {
      return {
        blog_id: this.$route.query.id,
        blogData: {},
        finish: false,
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let that = this;
        service.get(`/blog/detail?id=${this.blog_id}`)
          .then(function (response) {
            that.blogData = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            that.finish = true;
          });
      },
      marked(string) {
        return marked(string)
      },
      saveArticle() {
        let passport = prompt("Enter your passport");
        let that = this;
        service.post('/blog/update', {
          passport: passport,
          id: that.blog_id,
          blog_content: that.blogData.content,
          blog_title: that.blogData.title,
          blog_tag: that.blogData.tag,
        })
          .then(function(response) {
            console.log(response);
            if (response.data.code == 0) {
              that.$router.push({ path: "blogDetail", query: { id: that.blog_id } });
            } else {
              alert(response.data.message);
            }
          })
          .catch(function(error) {
            console.log(error)
          })
          .then(function() {
          });
      },
      deleteArticle() {
        let passport = prompt("Enter your passport");
        let that = this;
        service.post('/blog/delete', {
          passport: passport,
          id: that.blog_id,
        })
          .then(function(response) {
            console.log(response);
            if (response.data.code == 0) {
              that.$router.push({ path: "/"});
            } else {
              alert(response.data.message);
            }
          })
          .catch(function(error) {
            console.log(error)
          })
          .then(function() {
          });
      },
    }
  }
</script>
<style lang="less" scoped>
  div:focus,
  input:focus {
    outline: none;
  }
  .blogContentEdit {
    width: 100%;
    height: 400px;
    font-size: 16px;

    border: 1px solid #ccc;
    padding: 0.6em;
    border-radius: 3px;
  }
  .blogContentEdit:focus {
    border: 1px solid #ccc;
    outline: none;
  }
  h1.title,
  div.date {
    max-width: 720px;
    margin-left: 0;
    margin-right: auto;
    p {
      margin: 0;
    }
    &:focus {
      outline: none;
    }
  }
</style>