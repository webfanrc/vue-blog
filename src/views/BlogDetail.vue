<template>
  <div class="blogDetail" v-if="finish">
    <h1 class="title">{{ blogData.title }}</h1>


    <div class="containers">
      <div v-html="marked(blogData.content)" class="blogContentShow" ref="blogContentShow"></div>
    </div>

    <div class="date_control">
      <div class="date">
        <p>{{blogData.create_date}}</p>
        <p v-if="blogData.edit_date">Edit on: {{blogData.edit_date}}</p>
      </div>

      <div>
        <div class="control">
          <a @click="routerToEditPage(blog_id)">Edit</a>
        </div>
      </div>
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
      blogData: {},

      finish: false,
      showTestArea: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let that = this;
      axios.get(`/blog/detail?id=${this.blog_id}`)
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
    routerToEditPage(id) {
      this.$router.push({ path: "blogEdit", query: { id: id } });
    },
  }
};
</script>
<style lang="less" scoped>
  h1.title,
  div.date {
    max-width: 720px;
    margin-left: 0;
    margin-right: auto;
    p {
      margin: 0;
    }
  }
  div.date {
    color: #666;
  }

  div.control {
    max-width: 720px;
    margin: 0;
  }
  div.date_control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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