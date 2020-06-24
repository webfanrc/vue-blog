<template>
  <div class="blogDetail" v-if="finish">
    <h1 class="title">{{ blogData.title }}</h1>

    <div class="i">
      <div class="info">
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-calendar-day fa-w-14 fa-2x">

            <path fill="gray" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" class=""></path>

          </svg>
          <span>发布日期：{{blogData.create_date}}</span>
        </p>
        <p v-if="blogData.edit_date && blogData.edit_date != blogData.create_date">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-calendar-plus fa-w-14 fa-2x">

            <path fill="gray" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z" class=""></path>
          </svg>
          <span>编辑日期：{{blogData.edit_date}}</span>
        </p>
        <p>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-eye fa-w-18 fa-2x"><path fill="gray" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" class=""></path>
          </svg>
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
  p {
    white-space: pre-line;
  }
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
      line-height: 16px;
      margin-right: 18px;
      img,
      svg,
      object{
        width: 16px;
        height: 16px;
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