<template>
  <div class="blog">

    <template v-if="fin">
      <div v-for="(blog, index) in blogInfo.blogList" class="blogTag" :key="index">
        <p class="h1" @click="routerToBlogPage(blog.title)">{{ blog.title }}</p>
        <p class="date">{{blog.date}}</p>
      </div>

    </template>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "blog",
  data: function() {
    return {
      blogInfo: {},
      fin: false,
      showInfo: true,

      userIP: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {

      let response = await axios.get('/blog/');
      this.blogInfo = response.data;

      response = await axios.get('/blog/getUserIP');

      this.userIP = response.data.userIP;

      this.ipAddress("main page");


      this.fin = true;
    },
    routerToBlogPage(title) {
      this.$router.push({ path: "blogDetail", query: { title: title } });
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
<style lang="less" scoped>
button.showInfo_control {
  border: 1px solid gray;
  border-radius: 5px;
  height: 10px;
}
div.blog {
}
div.blogTag {
  min-height: 90px;

  padding: 16px 0;

  border-bottom: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  &:nth-last-of-type(1) {
    border-bottom-width: 0;
  }
  p.h1 {
    display: inline-block;
    font-size: 26px;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
  p.date {
    font-size: 14px;
    margin: 0;
  }
}
  div.infoDiv {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div#loading {
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
</style>
