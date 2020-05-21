<template>
  <div ref="archives">
    <h1>
      Archives
    </h1>


    <div class="tagsAndArticles">
      <ul class="articles">
        <li v-for="(blog, n) in blogs" :key="n">
          <a :href="'/blogDetail?id=' +blog.id">{{blog.title}}</a>
        </li>
      </ul>

      <div class="tags">

        <div class="control">
          <p>
            <a @click="routerToNewPage()">NEW</a>
          </p>
          <p>
            <a @click="all()">order by date</a>
          </p>
          <p>
            <a @click="orderByReading()">order by reading</a>
          </p>
        </div>

        <p class="title">Tags:</p>
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
  import service from '../utils/http';
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
        service.get('/blog/distinct').then(function(response) {
          that.tags = response.data;
        })
      },
      tagChange(tag) {
        let that = this;
        service.get('/blog/tagChange', {
          params: {
            tag: tag,
          }
        }).then(function(response) {
          that.blogs = response.data;
        })
      },
      all() {
        let that = this;
        service.get('/blog/all')
        .then(function(response) {
          that.blogs = response.data;
        })
      },
      orderByReading() {
        let that = this;
        service.get('/statistic/orderByReading')
          .then(function(response) {
            that.blogs = response.data;
          })
      },
      routerToNewPage() {
        this.$router.push({ path: "blogNew" });
      }
    }
  };
</script>
<style lang="less" scoped>

  ul {
    margin: 15px 0;
    padding-left: 30px;
    li {
      line-height: 34px;
      span {
        cursor: pointer;
      }
    }
  }
  div.tagsAndArticles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.control {
    p {
      width: 150px;
      line-height: 34px;
      padding: 0;
      margin: 0;
    }
  }
  div.tags {
    width: 150px;
    line-height: 34px;
    p.title {
      border-bottom: 1px dotted gray;
      margin: 0;
      padding: 15px 0;
    }
    div.tag {
      border-bottom: 1px dotted gray;
    }
    div.tag span:hover {
      background-color: #3377aa;
      color: white;
      cursor: pointer;
    }
  }
</style>