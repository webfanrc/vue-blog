<template>
  <div class="blogDetail" v-if="finish">
    <h1 class="title">{{ blogData.title }}</h1>

    <div class="i">
      <div class="info">
        <p>
          <img src="./../assets/calendar-day.svg">
          <span>发布日期：{{blogData.create_date}}</span>
        </p>
        <p v-if="blogData.edit_date && blogData.edit_date != blogData.create_date">
          <img src="./../assets/calendar-plus.svg">
          <span>编辑日期：{{blogData.edit_date}}</span>
        </p>
        <p>
          <img src="./../assets/view.svg">
          <span>阅读次数：{{statistic.count}}</span>
        </p>
      </div>

      <div>
        <div class="control">
          <a @click="routerToEditPage(blog_id)">Edit</a>
        </div>
      </div>
    </div>

    <div class="containers">
      <div v-html="marked(blogData.content)" class="blogContentShow" ref="blogContentShow"></div>
    </div>
  </div>
</template>
<script>
import service from '../utils/http';
import marked from 'marked'; // md -> html
export default {
  name: "blogDetail",
  components: {
  },
  data: function() {
    return {
      blog_id: this.$route.query.id,
      blogData: {},
      statistic: {},

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
      service.get(`/statistic/readAmount?id=${this.blog_id}`)
        .then(function (response) {
          that.statistic = response.data;
        })
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
  div.info {
    max-width: 720px;
    margin-left: 0;
    margin-right: auto;
    p {
      margin: 0;
    }
  }
  div.i {
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  div.info {
    display: flex;
    flex-wrap: wrap;
    color: #666;
    p {
      display: flex;
      line-height: 25px;
      margin-right: 18px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
      span {
        display: inline-block;
      }
    }
  }
  .mr-18 {
    display: inline-block;
    margin-right: 18px;
  }

  div.control {
    max-width: 720px;
    margin: 0;
  }
  div.i {
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