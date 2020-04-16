<template>
  <div ref="archives">
    <h1>
      Archives
    </h1>

    <div class="tagsAndArticles">
      <ul class="articles">
        <li v-for="(blog, n) in blogs" :key="n">
          <a :href="'/blogDetail?title=' +blog.title">{{blog.title}}</a>
        </li>
      </ul>

      <div class="tags">
        <p class="title">Tags:</p>
        <div class="tag">
          <span @click="all()">
            All
          </span>
        </div>
        <div v-for="(tag, n) in tags" :key="n" class="tag">
          <span @click="tagChange(tag.tag)">
            {{tag.tag}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "archives",
    data: function() {
      return {
        tags: [],
        blogs: [],
      };
    },
    mounted() {
      this.init();
      this.all();
    },
    methods: {
      init() {
        let that = this;
        axios.get('/blog/distinct').then(function(response) {
          that.tags = response.data;
        })
      },
      tagChange(tag) {
        let that = this;
        axios.get('/blog/tagChange', {
          params: {
            tag: tag,
          }
        }).then(function(response) {
          that.blogs = response.data;
        })
      },
      all() {
        let that = this;
        axios.get('/blog/all')
        .then(function(response) {
          that.blogs = response.data;
        })
      },
    }
  };
</script>
<style lang="less" scoped>
  ul {
    margin: 15px 0;
    padding-left: 30px;
    li {
      line-height: 24px;
    }
  }
  div.tagsAndArticles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.tags {
    width: 150px;
    p.title {
      border-bottom: 1px dotted gray;
      margin: 0;
      padding: 15px 0;
    }
    div.tag {
      border-bottom: 1px dotted gray;
      padding: 3px 0;
    }
    div.tag span:hover {
      background-color: #3377aa;
      color: white;
      cursor: pointer;
    }
  }
</style>